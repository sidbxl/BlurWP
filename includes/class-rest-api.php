<?php

defined('ABSPATH') || exit;

class BlurWP_REST_API {
    private static $instance = null;
    private $namespace = 'blurwp/v1';

    public static function get_instance(): self {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        $this->register_routes();
    }

    private function register_routes(): void {
        register_rest_route($this->namespace, '/process', array(
            'methods' => 'POST',
            'callback' => array($this, 'process_image'),
            'permission_callback' => array($this, 'check_permission'),
        ));

        register_rest_route($this->namespace, '/restore/(?P<id>\d+)', array(
            'methods' => 'POST',
            'callback' => array($this, 'restore_image'),
            'permission_callback' => array($this, 'check_permission'),
        ));

        register_rest_route($this->namespace, '/settings', array(
            array(
                'methods' => 'GET',
                'callback' => array($this, 'get_settings'),
                'permission_callback' => array($this, 'check_permission'),
            ),
            array(
                'methods' => 'POST',
                'callback' => array($this, 'update_settings'),
                'permission_callback' => array($this, 'check_permission'),
            ),
        ));

        register_rest_route($this->namespace, '/bulk/queue', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_bulk_queue'),
            'permission_callback' => array($this, 'check_permission'),
        ));

        register_rest_route($this->namespace, '/bulk/clear', array(
            'methods' => 'POST',
            'callback' => array($this, 'clear_bulk_queue'),
            'permission_callback' => array($this, 'check_permission'),
        ));

        register_rest_route($this->namespace, '/image/(?P<id>\d+)', array(
            'methods' => 'GET',
            'callback' => array($this, 'serve_image'),
            'permission_callback' => array($this, 'check_permission'),
        ));
    }

    public function check_permission(): bool {
        return current_user_can('upload_files');
    }

    public function process_image(WP_REST_Request $request) {
        $attachment_id = $request->get_param('attachment_id');
        $image_data = $request->get_param('image_data');
        $faces = $request->get_param('faces');
        $settings = $request->get_param('settings');

        if (!$attachment_id || !$image_data) {
            return new WP_Error(
                'missing_params',
                __('Missing required parameters.', 'blurwp'),
                array('status' => 400)
            );
        }

        $attachment = get_post($attachment_id);
        if (!$attachment || 'attachment' !== $attachment->post_type) {
            return new WP_Error(
                'invalid_attachment',
                __('Invalid attachment ID.', 'blurwp'),
                array('status' => 404)
            );
        }

        if (get_current_user_id() !== (int) $attachment->post_author && !current_user_can('edit_others_posts')) {
            return new WP_Error(
                'permission_denied',
                __('You do not have permission to modify this attachment.', 'blurwp'),
                array('status' => 403)
            );
        }

        if (!wp_attachment_is_image($attachment_id)) {
            return new WP_Error(
                'not_an_image',
                __('The attachment is not an image.', 'blurwp'),
                array('status' => 400)
            );
        }

        if ($faces) {
            $faces_validation = $this->validate_faces($faces);
            if (is_wp_error($faces_validation)) {
                return $faces_validation;
            }
            $faces = $faces_validation;
        }

        if ($settings) {
            $settings_validation = $this->validate_settings($settings);
            if (is_wp_error($settings_validation)) {
                return $settings_validation;
            }
            $settings = $settings_validation;
        }

        $blurwp_settings = BlurWP_Settings::get_instance();
        $keep_originals = $blurwp_settings->get_setting('keep_originals');

        if ($keep_originals) {
            // Ensure backup folder exists and is secured
            if (!self::ensure_backup_folder_secure()) {
                return new WP_Error(
                    'backup_folder_error',
                    __('Failed to create or secure backup folder.', 'blurwp'),
                    array('status' => 500)
                );
            }

            $backup_result = $this->backup_original($attachment_id);
            if (is_wp_error($backup_result)) {
                return $backup_result;
            }
            if (false === $backup_result) {
                return new WP_Error(
                    'backup_failed',
                    __('Failed to create backup of original image.', 'blurwp'),
                    array('status' => 500)
                );
            }
        }

        $file_path = get_attached_file($attachment_id);
        if (!$file_path) {
            return new WP_Error(
                'file_not_found',
                __('Could not locate attachment file.', 'blurwp'),
                array('status' => 404)
            );
        }

        $decoded = $this->decode_base64_image($image_data);
        if (is_wp_error($decoded)) {
            return $decoded;
        }

        $saved = file_put_contents($file_path, $decoded);
        if (false === $saved) {
            return new WP_Error(
                'save_failed',
                __('Failed to save processed image.', 'blurwp'),
                array('status' => 500)
            );
        }

        update_post_meta($attachment_id, '_blurwp_anonymized', true);
        if ($faces) {
            update_post_meta($attachment_id, '_blurwp_faces', $faces);
        }
        if ($settings) {
            update_post_meta($attachment_id, '_blurwp_settings', $settings);
        }

        $this->regenerate_thumbnails($attachment_id);

        // Add cache-busting version to attachment metadata
        update_post_meta($attachment_id, '_blurwp_version', time());

        // Track processed item in bulk queue if applicable
        $this->mark_bulk_item_processed($attachment_id);

        return rest_ensure_response(array(
            'success' => true,
            'message' => __('Image processed successfully.', 'blurwp'),
        ));
    }

    private function mark_bulk_item_processed(int $attachment_id): void {
        $user_id = get_current_user_id();
        $queue = get_transient('blurwp_bulk_queue_' . $user_id);
        
        if (false === $queue || !is_array($queue)) {
            return;
        }
        
        if (!in_array($attachment_id, $queue, true)) {
            return;
        }
        
        $processed = get_transient('blurwp_bulk_processed_' . $user_id);
        if (false === $processed || !is_array($processed)) {
            $processed = array();
        }
        
        if (!in_array($attachment_id, $processed, true)) {
            $processed[] = $attachment_id;
            set_transient('blurwp_bulk_processed_' . $user_id, $processed, 3600);
        }
    }

    public function restore_image(WP_REST_Request $request) {
        $attachment_id = (int) $request->get_param('id');

        $attachment = get_post($attachment_id);
        if (!$attachment || 'attachment' !== $attachment->post_type) {
            return new WP_Error(
                'invalid_attachment',
                __('Invalid attachment ID.', 'blurwp'),
                array('status' => 404)
            );
        }

        $file_path = get_attached_file($attachment_id);
        if (!$file_path) {
            return new WP_Error(
                'file_not_found',
                __('Could not locate attachment file.', 'blurwp'),
                array('status' => 404)
            );
        }

        // Get backup path from metadata (stored when backup was created)
        $backup_path = get_post_meta($attachment_id, '_blurwp_original_file', true);
        
        // DEBUG LOGGING
        error_log('BlurWP Restore Debug: Attachment ID: ' . $attachment_id);
        error_log('BlurWP Restore Debug: Stored backup path: ' . $backup_path);
        error_log('BlurWP Restore Debug: File path: ' . $file_path);
        
        if (empty($backup_path)) {
            error_log('BlurWP Restore Debug: No backup path in metadata');
            return new WP_Error(
                'no_backup',
                __('No backup file found for this image.', 'blurwp'),
                array('status' => 404)
            );
        }

        // Verify ownership
        if (get_current_user_id() !== (int) $attachment->post_author && !current_user_can('edit_others_posts')) {
            return new WP_Error(
                'permission_denied',
                __('You do not have permission to restore this attachment.', 'blurwp'),
                array('status' => 403)
            );
        }

        // Normalize paths to use forward slashes for cross-platform compatibility
        $backup_path = str_replace('\\', '/', $backup_path);
        $file_path = str_replace('\\', '/', $file_path);
        
        // Validate backup path is within uploads directory
        $upload_dir = wp_upload_dir();
        $uploads_base = str_replace('\\', '/', $upload_dir['basedir']);
        
        // DEBUG LOGGING
        error_log('BlurWP Restore Debug: Normalized uploads base: ' . $uploads_base);
        error_log('BlurWP Restore Debug: Normalized backup path: ' . $backup_path);
        
        // Simple string comparison with normalized paths
        if (strpos($backup_path, $uploads_base) !== 0) {
            error_log('BlurWP Restore Debug: FAILED - backup path does not start with uploads base');
            return new WP_Error(
                'invalid_backup_path',
                __('Invalid backup file location.', 'blurwp'),
                array('status' => 500)
            );
        }
        error_log('BlurWP Restore Debug: PASSED - path validation');

        if (!file_exists($backup_path)) {
            return new WP_Error(
                'no_backup',
                __('No backup file found for this image.', 'blurwp'),
                array('status' => 404)
            );
        }

        $copied = copy($backup_path, $file_path);
        if (!$copied) {
            return new WP_Error(
                'restore_failed',
                __('Failed to restore image from backup.', 'blurwp'),
                array('status' => 500)
            );
        }

        delete_post_meta($attachment_id, '_blurwp_anonymized');
        delete_post_meta($attachment_id, '_blurwp_faces');
        delete_post_meta($attachment_id, '_blurwp_settings');
        delete_post_meta($attachment_id, '_blurwp_original_file');

        // Delete the backup file
        if (file_exists($backup_path)) {
            @unlink($backup_path);
        }

        $this->regenerate_thumbnails($attachment_id);

        return rest_ensure_response(array(
            'success' => true,
            'message' => __('Image restored successfully.', 'blurwp'),
        ));
    }

    public function get_settings(WP_REST_Request $request): WP_REST_Response {
        $blurwp_settings = BlurWP_Settings::get_instance();
        $settings = $blurwp_settings->get_settings();

        return rest_ensure_response($settings);
    }

    public function update_settings(WP_REST_Request $request) {
        $settings = $request->get_json_params();

        if (!is_array($settings)) {
            return new WP_Error(
                'invalid_settings',
                __('Invalid settings format.', 'blurwp'),
                array('status' => 400)
            );
        }

        $blurwp_settings = BlurWP_Settings::get_instance();
        $sanitized = $blurwp_settings->sanitize_settings($settings);

        update_option('blurwp_settings', $sanitized);

        return rest_ensure_response(array(
            'success' => true,
            'message' => __('Settings updated successfully.', 'blurwp'),
            'settings' => $blurwp_settings->get_settings(),
        ));
    }

    public function get_bulk_queue(WP_REST_Request $request): WP_REST_Response {
        $user_id = get_current_user_id();
        $queue = get_transient('blurwp_bulk_queue_' . $user_id);
        
        if (false === $queue || !is_array($queue)) {
            return rest_ensure_response(array(
                'queue' => array(),
                'total' => 0,
                'remaining' => 0,
            ));
        }
        
        $processed = get_transient('blurwp_bulk_processed_' . $user_id);
        if (false === $processed || !is_array($processed)) {
            $processed = array();
        }
        
        $remaining = array_diff($queue, $processed);
        
        return rest_ensure_response(array(
            'queue' => $queue,
            'total' => count($queue),
            'processed' => $processed,
            'remaining' => array_values($remaining),
            'remaining_count' => count($remaining),
        ));
    }

    public function clear_bulk_queue(WP_REST_Request $request): WP_REST_Response {
        $user_id = get_current_user_id();
        
        delete_transient('blurwp_bulk_queue_' . $user_id);
        delete_transient('blurwp_bulk_processed_' . $user_id);
        
        return rest_ensure_response(array(
            'success' => true,
            'message' => __('Bulk processing queue cleared.', 'blurwp'),
        ));
    }

    public function serve_image(WP_REST_Request $request) {
        $attachment_id = (int) $request->get_param('id');
        
        $attachment = get_post($attachment_id);
        if (!$attachment || 'attachment' !== $attachment->post_type) {
            return new WP_Error(
                'invalid_attachment',
                __('Invalid attachment ID.', 'blurwp'),
                array('status' => 404)
            );
        }
        
        if (!wp_attachment_is_image($attachment_id)) {
            return new WP_Error(
                'not_an_image',
                __('The attachment is not an image.', 'blurwp'),
                array('status' => 400)
            );
        }
        
        $file_path = get_attached_file($attachment_id);
        if (!$file_path || !file_exists($file_path)) {
            return new WP_Error(
                'file_not_found',
                __('Could not locate attachment file.', 'blurwp'),
                array('status' => 404)
            );
        }
        
        // Send CORS headers
        header('Access-Control-Allow-Origin: ' . esc_url_raw(site_url()));
        header('Access-Control-Allow-Credentials: true');
        
        // Get MIME type
        $mime_type = get_post_mime_type($attachment_id);
        if (!$mime_type) {
            $mime_type = 'image/jpeg';
        }
        
        header('Content-Type: ' . $mime_type);
        header('Content-Length: ' . filesize($file_path));
        
        readfile($file_path);
        exit;
    }

    private function backup_original(int $attachment_id) {
        $file_path = get_attached_file($attachment_id);
        if (!$file_path || !file_exists($file_path)) {
            return new WP_Error(
                'file_not_found',
                __('Could not locate attachment file.', 'blurwp'),
                array('status' => 404)
            );
        }

        $backup_path = $this->get_backup_path($attachment_id, $file_path);
        
        // Validate path is within uploads directory
        $upload_dir = wp_upload_dir();
        $real_uploads = realpath($upload_dir['basedir']);
        
        if ($real_uploads === false) {
            return new WP_Error(
                'invalid_upload_path',
                __('Could not locate uploads directory.', 'blurwp'),
                array('status' => 500)
            );
        }
        
        // Create backup directory if it doesn't exist
        $backup_dir = dirname($backup_path);
        if (!is_dir($backup_dir)) {
            if (!wp_mkdir_p($backup_dir)) {
                return new WP_Error(
                    'mkdir_failed',
                    __('Failed to create backup directory.', 'blurwp'),
                    array('status' => 500)
                );
            }
        }
        
        // Now validate the resolved path
        $real_backup = realpath($backup_dir);
        if ($real_backup === false || strpos($real_backup, $real_uploads) !== 0) {
            return new WP_Error(
                'invalid_backup_path',
                __('Invalid backup path.', 'blurwp'),
                array('status' => 500)
            );
        }
        
        if (file_exists($backup_path)) {
            return true;
        }

        $copied = copy($file_path, $backup_path);
        if (!$copied) {
            return new WP_Error(
                'backup_failed',
                __('Failed to create backup of original image.', 'blurwp'),
                array('status' => 500)
            );
        }

        // Normalize path to use forward slashes for cross-platform compatibility
        $normalized_path = str_replace('\\', '/', $backup_path);
        update_post_meta($attachment_id, '_blurwp_original_file', $normalized_path);

        return true;
    }

    private function regenerate_thumbnails(int $attachment_id): void {
        if (!function_exists('wp_generate_attachment_metadata')) {
            require_once ABSPATH . 'wp-admin/includes/image.php';
        }

        $file_path = get_attached_file($attachment_id);
        
        // Generate new thumbnails from the anonymized main image
        // This automatically creates thumbnails from the already-anonymized full-size image
        $metadata = wp_generate_attachment_metadata($attachment_id, $file_path);
        wp_update_attachment_metadata($attachment_id, $metadata);
    }

    private function get_backup_path(int $attachment_id, string $file_path): string {
        $upload_dir = wp_upload_dir();
        $backup_base = $upload_dir['basedir'] . '/blurwp-backups';
        $info = pathinfo($file_path);
        // Generate random hash for security (unguessable URLs)
        $random_hash = substr(md5($attachment_id . wp_rand() . time()), 0, 12);
        return $backup_base . '/backup-' . $random_hash . '.' . $info['extension'];
    }

    /**
     * Ensure backup folder exists and is secured
     * Creates .htaccess (Apache) and index.php for both servers
     * Returns true on success, WP_Error on failure
     */
    public static function ensure_backup_folder_secure(): bool {
        $upload_dir = wp_upload_dir();
        $backup_dir = $upload_dir['basedir'] . '/blurwp-backups';

        // Create backup directory if it doesn't exist
        if (!is_dir($backup_dir)) {
            if (!wp_mkdir_p($backup_dir)) {
                return false;
            }
            // Set restrictive permissions
            chmod($backup_dir, 0755);
        }

        // Create index.php to prevent directory listing (works on all servers)
        $index_file = $backup_dir . '/index.php';
        if (!file_exists($index_file)) {
            $index_content = "<?php\n// Silence is golden.\n// This directory contains sensitive backup files.\n// Access is restricted by .htaccess (Apache) or server configuration (Nginx).\n";
            @file_put_contents($index_file, $index_content);
        }

        // Create .htaccess for Apache servers
        $htaccess_file = $backup_dir . '/.htaccess';
        if (!file_exists($htaccess_file)) {
            $htaccess_content = "# BlurWP Backup Security\n";
            $htaccess_content .= "# This file protects backup images from web access\n\n";
            $htaccess_content .= "Order deny,allow\n";
            $htaccess_content .= "Deny from all\n\n";
            $htaccess_content .= "# Alternative syntax for Apache 2.4+\n";
            $htaccess_content .= "<IfModule mod_authz_core.c>\n";
            $htaccess_content .= "    Require all denied\n";
            $htaccess_content .= "</IfModule>\n";
            
            @file_put_contents($htaccess_file, $htaccess_content);
        }

        return true;
    }

    /**
     * Check if backup folder is properly secured
     * Returns array with status and server type info
     */
    public static function check_backup_security(): array {
        $upload_dir = wp_upload_dir();
        $backup_dir = $upload_dir['basedir'] . '/blurwp-backups';
        
        $result = array(
            'folder_exists' => is_dir($backup_dir),
            'htaccess_exists' => file_exists($backup_dir . '/.htaccess'),
            'index_exists' => file_exists($backup_dir . '/index.php'),
            'server_software' => $_SERVER['SERVER_SOFTWARE'] ?? 'unknown',
            'is_nginx' => false,
            'is_apache' => false,
            'security_ok' => false,
            'message' => '',
        );

        // Detect server type
        $server = strtolower($result['server_software']);
        if (strpos($server, 'nginx') !== false) {
            $result['is_nginx'] = true;
        } elseif (strpos($server, 'apache') !== false) {
            $result['is_apache'] = true;
        }

        // Check security status
        if (!$result['folder_exists']) {
            $result['message'] = __('Backup folder does not exist.', 'blurwp');
        } elseif ($result['is_apache'] && !$result['htaccess_exists']) {
            $result['message'] = __('.htaccess file missing. Backup folder may be accessible.', 'blurwp');
        } elseif ($result['is_nginx']) {
            $result['message'] = __('Nginx detected. Please configure server-level protection (see settings page).', 'blurwp');
        } else {
            $result['security_ok'] = true;
            $result['message'] = __('Backup folder is secured.', 'blurwp');
        }

        return $result;
    }

    private function decode_base64_image(string $image_data) {
        $image_data = preg_replace('#^data:image/\w+;base64,#i', '', $image_data);
        $image_data = str_replace(' ', '+', $image_data);
        
        $decoded = base64_decode($image_data, true);
        
        if (false === $decoded) {
            return new WP_Error(
                'invalid_image_data',
                __('Invalid base64 image data.', 'blurwp'),
                array('status' => 400)
            );
        }

        $finfo = new finfo(FILEINFO_MIME_TYPE);
        $mime_type = $finfo->buffer($decoded);
        $allowed_types = array('image/jpeg', 'image/png', 'image/webp');

        if (!in_array($mime_type, $allowed_types, true)) {
            return new WP_Error(
                'invalid_file_type',
                __('Only JPEG, PNG, and WebP images are allowed.', 'blurwp'),
                array('status' => 400)
            );
        }

        $max_size = wp_max_upload_size();
        if (strlen($decoded) > $max_size) {
            return new WP_Error(
                'file_too_large',
                __('Image exceeds maximum upload size.', 'blurwp'),
                array('status' => 400)
            );
        }

        return $decoded;
    }

    private function validate_faces($faces) {
        if (!is_array($faces)) {
            return new WP_Error(
                'invalid_faces_format',
                __('Invalid faces data format.', 'blurwp'),
                array('status' => 400)
            );
        }

        $validated = array();
        $max_faces = 100;

        if (count($faces) > $max_faces) {
            return new WP_Error(
                'too_many_faces',
                sprintf(__('Maximum %d faces allowed.', 'blurwp'), $max_faces),
                array('status' => 400)
            );
        }

        foreach ($faces as $index => $face) {
            if (!is_array($face)) {
                continue;
            }

            $validated_face = array(
                'x' => isset($face['x']) ? max(0, min(1, floatval($face['x']))) : 0,
                'y' => isset($face['y']) ? max(0, min(1, floatval($face['y']))) : 0,
                'width' => isset($face['width']) ? max(0, min(1, floatval($face['width']))) : 0,
                'height' => isset($face['height']) ? max(0, min(1, floatval($face['height']))) : 0,
                'confidence' => isset($face['confidence']) ? max(0, min(1, floatval($face['confidence']))) : 1,
            );

            if ($validated_face['width'] <= 0 || $validated_face['height'] <= 0) {
                continue;
            }

            $validated[] = $validated_face;
        }

        return $validated;
    }

    private function validate_settings($settings) {
        if (!is_array($settings)) {
            return new WP_Error(
                'invalid_settings_format',
                __('Invalid settings format.', 'blurwp'),
                array('status' => 400)
            );
        }

        $validated = array();

        if (isset($settings['style'])) {
            $validated['style'] = in_array($settings['style'], array('blur', 'pixelate'), true) 
                ? $settings['style'] 
                : 'blur';
        } else {
            $validated['style'] = 'blur';
        }

        if (isset($settings['intensity'])) {
            $validated['intensity'] = min(max(absint($settings['intensity']), 1), 50);
        } else {
            $validated['intensity'] = 15;
        }

        if (isset($settings['expand'])) {
            $validated['expand'] = min(max(absint($settings['expand']), 0), 100);
        } else {
            $validated['expand'] = 20;
        }

        if (isset($settings['sensitivity'])) {
            $validated['sensitivity'] = max(0, min(1, floatval($settings['sensitivity'])));
        } else {
            $validated['sensitivity'] = 0.5;
        }

        return $validated;
    }
}
