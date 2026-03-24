<?php

defined('ABSPATH') || exit;

class BlurWP_Media {
    private static $instance = null;

    public static function get_instance(): self {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_filter('media_row_actions', array($this, 'add_row_action'), 10, 2);
        
        add_filter('bulk_actions-upload', array($this, 'add_bulk_action'));
        add_filter('handle_bulk_actions-upload', array($this, 'handle_bulk_action'), 10, 3);
        
        add_action('attachment_submitbox_misc_actions', array($this, 'add_modal_button'));
        
        add_action('add_attachment', array($this, 'track_new_upload'));
        add_filter('wp_handle_upload', array($this, 'handle_upload'), 10, 2);
        
        add_action('delete_attachment', array($this, 'cleanup_backup'));
        
        // Media scripts are now bundled in blurwp.iife.js
        
        add_action('wp_ajax_blurwp_restore', array($this, 'ajax_restore_image'));
        
        // Add cache-busting for anonymized images
        add_filter('wp_get_attachment_image_src', array($this, 'add_cache_busting'), 10, 3);
        add_filter('wp_get_attachment_url', array($this, 'add_cache_busting_to_url'), 10, 2);
    }

    public function add_row_action(array $actions, WP_Post $post): array {
        if ($post->post_type !== 'attachment' || !current_user_can('upload_files')) {
            return $actions;
        }

        if (!wp_attachment_is_image($post->ID)) {
            return $actions;
        }

        $is_anonymized = get_post_meta($post->ID, '_blurwp_anonymized', true);
        $has_backup = get_post_meta($post->ID, '_blurwp_original_file', true);
        
        $image_url = wp_get_attachment_url($post->ID);

        $actions['blurwp'] = sprintf(
            '<a href="#" aria-label="%s" onclick="window.blurwpOpenEditor(%d, \'%s\'); return false;">%s</a>',
            esc_attr(sprintf(__('Anonymize faces in %s', 'blurwp'), $post->post_title)),
            $post->ID,
            esc_url($image_url),
            __('Anonymize Faces', 'blurwp')
        );

        if ($is_anonymized && $has_backup) {
            $restore_url = wp_nonce_url(
                add_query_arg(array(
                    'action' => 'blurwp_restore',
                    'attachment_id' => $post->ID,
                ), admin_url('admin-ajax.php')),
                'blurwp_restore_' . $post->ID
            );

            $actions['blurwp_restore'] = sprintf(
                '<a href="%s" aria-label="%s" onclick="return confirm(\'%s\');">%s</a>',
                esc_url($restore_url),
                esc_attr(sprintf(__('Restore original %s', 'blurwp'), $post->post_title)),
                esc_attr(__('Are you sure you want to restore the original image?', 'blurwp')),
                __('Restore Original', 'blurwp')
            );
        }

        return $actions;
    }

    public function add_bulk_action(array $actions): array {
        $actions['blurwp_anonymize'] = __('Anonymize Faces', 'blurwp');
        return $actions;
    }

    public function handle_bulk_action(string $redirect_url, string $action, array $media_ids): string {
        if ($action !== 'blurwp_anonymize') {
            return $redirect_url;
        }
        
        if (!current_user_can('upload_files')) {
            return $redirect_url;
        }
        
        set_transient('blurwp_bulk_queue_' . get_current_user_id(), $media_ids, 3600);
        
        $redirect_url = add_query_arg('blurwp_bulk', count($media_ids), $redirect_url);
        
        return $redirect_url;
    }

    public function add_modal_button(WP_Post $post): void {
        if (!wp_attachment_is_image($post->ID)) {
            return;
        }
        
        if (!current_user_can('upload_files')) {
            return;
        }

        $is_anonymized = get_post_meta($post->ID, '_blurwp_anonymized', true);
        $has_backup = get_post_meta($post->ID, '_blurwp_original_file', true);
        $image_url = wp_get_attachment_url($post->ID);
        ?>
        <div class="misc-pub-section blurwp-section">
            <?php if ($is_anonymized && $has_backup) : 
                $restore_url = wp_nonce_url(
                    admin_url('admin-ajax.php?action=blurwp_restore&attachment_id=' . $post->ID),
                    'blurwp_restore_' . $post->ID
                );
            ?>
                <a href="<?php echo esc_url($restore_url); ?>" 
                   class="button blurwp-restore-button"
                   onclick="return confirm('<?php echo esc_js(__('Are you sure you want to restore the original image?', 'blurwp')); ?>');">
                    <?php esc_html_e('Restore Original', 'blurwp'); ?>
                </a>
            <?php else : ?>
                <button type="button" class="button blurwp-anonymize-button" 
                        data-attachment-id="<?php echo esc_attr($post->ID); ?>"
                        data-image-url="<?php echo esc_url($image_url); ?>">
                    <?php esc_html_e('Anonymize Faces', 'blurwp'); ?>
                </button>
            <?php endif; ?>
        </div>
        <?php
    }

    public function ajax_restore_image(): void {
        $attachment_id = isset($_GET['attachment_id']) ? absint($_GET['attachment_id']) : 0;
        
        if (!$attachment_id) {
            wp_die(__('Invalid attachment ID.', 'blurwp'));
        }
        
        check_admin_referer('blurwp_restore_' . $attachment_id);
        
        if (!current_user_can('upload_files')) {
            wp_die(__('You do not have permission to restore this image.', 'blurwp'));
        }
        
        $request = new WP_REST_Request('POST', '/blurwp/v1/restore/' . $attachment_id);
        $request->set_param('id', $attachment_id);
        $result = BlurWP_REST_API::get_instance()->restore_image($request);
        
        if (is_wp_error($result)) {
            wp_die($result->get_error_message());
        }
        
        wp_redirect(admin_url('upload.php?blurwp_restored=1'));
        exit;
    }

    public function track_new_upload(int $post_ID): void {
        if (!BlurWP_Settings::get_instance()->get_setting('auto_process')) {
            return;
        }
        
        // Only track images
        if (!wp_attachment_is_image($post_ID)) {
            return;
        }

        set_transient('blurwp_new_upload_' . get_current_user_id(), $post_ID, 300);
    }

    public function handle_upload(array $upload, string $context = 'upload'): array {
        if ($context !== 'upload') {
            return $upload;
        }

        $settings = BlurWP_Settings::get_instance()->get_settings();

        if (!$settings['auto_process']) {
            return $upload;
        }

        set_transient('blurwp_auto_process_' . md5($upload['file']), true, 300);

        return $upload;
    }

    public function cleanup_backup(int $attachment_id): void {
        $backup_path = get_post_meta($attachment_id, '_blurwp_original_file', true);

        if ($backup_path && file_exists($backup_path)) {
            wp_delete_file($backup_path);
        }
    }

    /**
     * Add cache-busting parameter to image src for anonymized images
     */
    public function add_cache_busting($image, $attachment_id, $size): array {
        if (!$image) {
            return $image;
        }

        // Check if image has been anonymized
        $version = get_post_meta($attachment_id, '_blurwp_version', true);
        if ($version) {
            // Add cache-busting version parameter
            $image[0] = add_query_arg('blurwp_v', $version, $image[0]);
        }

        return $image;
    }

    /**
     * Add cache-busting parameter to attachment URL for anonymized images
     */
    public function add_cache_busting_to_url($url, $attachment_id): string {
        // Check if image has been anonymized
        $version = get_post_meta($attachment_id, '_blurwp_version', true);
        if ($version) {
            // Add cache-busting version parameter
            $url = add_query_arg('blurwp_v', $version, $url);
        }

        return $url;
    }
}
