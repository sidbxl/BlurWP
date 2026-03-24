<?php

defined('ABSPATH') || exit;

class BlurWP_Settings {
    private static $instance = null;
    private $option_name = 'blurwp_settings';
    private $default_settings = array(
        'default_style' => 'blur',
        'default_intensity' => 30,
        'default_expand' => 20,
        'default_model' => 'ssdMobilenetv1',
        'auto_process' => false,
        'keep_originals' => false,
    );

    public static function get_instance(): self {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action('admin_menu', array($this, 'add_menu'));
        add_action('admin_init', array($this, 'register_settings'));
        add_action('admin_init', array($this, 'handle_backup_actions'));
    }

    /**
     * Handle backup management actions
     */
    public function handle_backup_actions(): void {
        if (!isset($_POST['blurwp_action']) || $_POST['blurwp_action'] !== 'purge_backups') {
            return;
        }

        if (!current_user_can('manage_options')) {
            add_settings_error(
                'blurwp_backup',
                'blurwp_backup_error',
                __('You do not have permission to manage backups.', 'blurwp'),
                'error'
            );
            return;
        }

        if (!wp_verify_nonce($_POST['blurwp_purge_nonce'], 'blurwp_purge_backups')) {
            add_settings_error(
                'blurwp_backup',
                'blurwp_backup_error',
                __('Security check failed. Please try again.', 'blurwp'),
                'error'
            );
            return;
        }

        $result = $this->purge_all_backups();

        if ($result['success']) {
            add_settings_error(
                'blurwp_backup',
                'blurwp_backup_success',
                sprintf(
                    __('Successfully deleted %d backup files (%s).', 'blurwp'),
                    $result['count'],
                    size_format($result['size'])
                ),
                'success'
            );
        } else {
            add_settings_error(
                'blurwp_backup',
                'blurwp_backup_error',
                $result['message'],
                'error'
            );
        }
    }

    /**
     * Purge all backup files
     */
    private function purge_all_backups(): array {
        $upload_dir = wp_upload_dir();
        $backup_dir = $upload_dir['basedir'] . '/blurwp-backups';

        if (!is_dir($backup_dir)) {
            return array(
                'success' => true,
                'count' => 0,
                'size' => 0,
                'message' => __('No backup folder found.', 'blurwp'),
            );
        }

        $files = glob($backup_dir . '/backup-*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
        if ($files === false) {
            return array(
                'success' => false,
                'count' => 0,
                'size' => 0,
                'message' => __('Failed to list backup files.', 'blurwp'),
            );
        }

        $count = 0;
        $size = 0;
        $errors = array();

        foreach ($files as $file) {
            if (!is_file($file)) {
                continue;
            }

            $file_size = filesize($file);
            if (@unlink($file)) {
                $count++;
                $size += $file_size;
            } else {
                $errors[] = basename($file);
            }
        }

        if (!empty($errors)) {
            return array(
                'success' => false,
                'count' => $count,
                'size' => $size,
                'message' => sprintf(
                    __('Deleted %d files, but failed to delete: %s', 'blurwp'),
                    $count,
                    implode(', ', $errors)
                ),
            );
        }

        return array(
            'success' => true,
            'count' => $count,
            'size' => $size,
            'message' => '',
        );
    }

    public function get_settings(): array {
        $settings = get_option($this->option_name, array());
        return wp_parse_args($settings, $this->default_settings);
    }

    public function get_setting(string $key): mixed {
        $settings = $this->get_settings();
        return isset($settings[$key]) ? $settings[$key] : null;
    }

    public function add_menu(): void {
        add_options_page(
            __('BlurWP Settings', 'blurwp'),
            __('BlurWP', 'blurwp'),
            'manage_options',
            'blurwp-settings',
            array($this, 'render_settings_page')
        );
    }

    public function register_settings(): void {
        register_setting($this->option_name, $this->option_name, array(
            'sanitize_callback' => array($this, 'sanitize_settings'),
        ));

        add_settings_section(
            'blurwp_main',
            __('Face Anonymization Settings', 'blurwp'),
            null,
            'blurwp-settings'
        );

        add_settings_field(
            'default_style',
            __('Default Style', 'blurwp'),
            array($this, 'render_style_field'),
            'blurwp-settings',
            'blurwp_main'
        );

        add_settings_field(
            'default_intensity',
            __('Default Intensity', 'blurwp'),
            array($this, 'render_intensity_field'),
            'blurwp-settings',
            'blurwp_main'
        );

        add_settings_field(
            'default_expand',
            __('Default Expand Range (%)', 'blurwp'),
            array($this, 'render_expand_field'),
            'blurwp-settings',
            'blurwp_main'
        );

        add_settings_field(
            'default_model',
            __('Default Detection Model', 'blurwp'),
            array($this, 'render_model_field'),
            'blurwp-settings',
            'blurwp_main'
        );

        add_settings_field(
            'auto_process',
            __('Auto-process on Upload', 'blurwp'),
            array($this, 'render_auto_process_field'),
            'blurwp-settings',
            'blurwp_main'
        );

        add_settings_field(
            'keep_originals',
            __('Keep Original Images', 'blurwp'),
            array($this, 'render_keep_originals_field'),
            'blurwp-settings',
            'blurwp_main'
        );
    }

    public function sanitize_settings(array $input): array {
        $sanitized = array();

        if (isset($input['default_style']) && in_array($input['default_style'], array('blur', 'pixelate'))) {
            $sanitized['default_style'] = $input['default_style'];
        }

        if (isset($input['default_intensity'])) {
            $sanitized['default_intensity'] = absint($input['default_intensity']);
            $sanitized['default_intensity'] = min(max($sanitized['default_intensity'], 1), 50);
        }

        if (isset($input['default_expand'])) {
            $sanitized['default_expand'] = absint($input['default_expand']);
            $sanitized['default_expand'] = min(max($sanitized['default_expand'], 0), 100);
        }

        if (isset($input['default_model']) && in_array($input['default_model'], array('tinyFaceDetector', 'ssdMobilenetv1'))) {
            $sanitized['default_model'] = $input['default_model'];
        } else {
            $sanitized['default_model'] = 'ssdMobilenetv1';
        }

        $sanitized['auto_process'] = !empty($input['auto_process']);
        $sanitized['keep_originals'] = !empty($input['keep_originals']);

        return $sanitized;
    }

    public function render_settings_page(): void {
        // Check backup security
        $security_check = BlurWP_REST_API::check_backup_security();
        
        // Get backup stats
        $backup_stats = $this->get_backup_stats();
        ?>
        <div class="wrap">
            <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
            
            <?php settings_errors('blurwp_backup'); ?>
            
            <?php if (!$security_check['security_ok']) : ?>
            <div class="notice notice-info">
                <p><strong><?php _e('ℹ️ Optional: Enhanced Backup Security', 'blurwp'); ?></strong></p>
                <p><?php _e('Your backups are already protected by randomized, unguessable filenames. This provides zero-config security that works on all servers.', 'blurwp'); ?></p>
                <?php if ($security_check['is_nginx']) : ?>
                <p><?php _e('For enhanced security (optional), you can add server-level protection. Add this to your Nginx configuration:', 'blurwp'); ?></p>
                <pre style="background: #f0f0f0; padding: 10px; margin: 10px 0; overflow-x: auto;">
location ^~ /wp-content/uploads/blurwp-backups/ {
    deny all;
    return 403;
}</pre>
                <p><?php _e('After adding this configuration, reload Nginx to enable enhanced protection.', 'blurwp'); ?></p>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            
            <form action="options.php" method="post">
                <?php
                settings_fields('blurwp_settings');
                do_settings_sections('blurwp-settings');
                submit_button(__('Save Settings', 'blurwp'));
                ?>
            </form>
            
            <hr style="margin: 30px 0;">
            
            <h2><?php _e('Backup Management', 'blurwp'); ?></h2>
            
            <table class="form-table">
                <tr>
                    <th scope="row"><?php _e('Backup Storage', 'blurwp'); ?></th>
                    <td>
                        <p>
                            <strong><?php echo esc_html($backup_stats['count']); ?></strong> <?php _e('backup files', 'blurwp'); ?><br>
                            <strong><?php echo esc_html($backup_stats['size_formatted']); ?></strong> <?php _e('total size', 'blurwp'); ?>
                        </p>
                        <?php if ($backup_stats['count'] > 0) : ?>
                        <p class="description">
                            <?php _e('Backups are stored in: ', 'blurwp'); ?>
                            <code><?php echo esc_html($backup_stats['path']); ?></code>
                        </p>
                        <?php endif; ?>
                    </td>
                </tr>
                <?php if ($backup_stats['count'] > 0) : ?>
                <tr>
                    <th scope="row"><?php _e('Purge Backups', 'blurwp'); ?></th>
                    <td>
                        <form method="post" action="" onsubmit="return confirm('<?php echo esc_js(__('WARNING: This will permanently delete all backup files. This action cannot be undone. Are you sure?', 'blurwp')); ?>');">
                            <?php wp_nonce_field('blurwp_purge_backups', 'blurwp_purge_nonce'); ?>
                            <input type="hidden" name="blurwp_action" value="purge_backups">
                            <?php submit_button(__('Delete All Backups', 'blurwp'), 'delete', 'submit', false); ?>
                            <p class="description" style="color: #d63638;">
                                <?php _e('⚠️ This will permanently delete all backup files and cannot be undone.', 'blurwp'); ?>
                            </p>
                        </form>
                    </td>
                </tr>
                <?php endif; ?>
            </table>
        </div>
        <?php
    }

    /**
     * Get backup statistics
     */
    private function get_backup_stats(): array {
        $upload_dir = wp_upload_dir();
        $backup_dir = $upload_dir['basedir'] . '/blurwp-backups';
        
        $stats = array(
            'path' => $backup_dir,
            'count' => 0,
            'size' => 0,
            'size_formatted' => '0 B',
        );
        
        if (!is_dir($backup_dir)) {
            return $stats;
        }
        
        $files = glob($backup_dir . '/backup-*.{jpg,jpeg,png,gif,webp}', GLOB_BRACE);
        if ($files === false) {
            return $stats;
        }
        
        $stats['count'] = count($files);
        
        foreach ($files as $file) {
            if (is_file($file)) {
                $stats['size'] += filesize($file);
            }
        }
        
        // Format size
        $stats['size_formatted'] = size_format($stats['size']);
        
        return $stats;
    }

    public function render_style_field(): void {
        $settings = $this->get_settings();
        $value = $settings['default_style'];
        ?>
        <select name="blurwp_settings[default_style]">
            <option value="blur" <?php selected($value, 'blur'); ?>>
                <?php _e('Blur', 'blurwp'); ?>
            </option>
            <option value="pixelate" <?php selected($value, 'pixelate'); ?>>
                <?php _e('Pixelate', 'blurwp'); ?>
            </option>
        </select>
        <p class="description"><?php _e('Default anonymization style for new images.', 'blurwp'); ?></p>
        <?php
    }

    public function render_intensity_field(): void {
        $settings = $this->get_settings();
        $value = $settings['default_intensity'];
        ?>
        <input type="number" name="blurwp_settings[default_intensity]" 
               value="<?php echo esc_attr($value); ?>" min="1" max="50" step="1">
        <p class="description"><?php _e('Blur strength (1-50) or pixel size for pixelate.', 'blurwp'); ?></p>
        <?php
    }

    public function render_expand_field(): void {
        $settings = $this->get_settings();
        $value = $settings['default_expand'];
        ?>
        <input type="number" name="blurwp_settings[default_expand]" 
               value="<?php echo esc_attr($value); ?>" min="0" max="100" step="1">
        <p class="description"><?php _e('Expand the face area by this percentage.', 'blurwp'); ?></p>
        <?php
    }

    public function render_model_field(): void {
        $settings = $this->get_settings();
        $value = $settings['default_model'];
        ?>
        <select name="blurwp_settings[default_model]">
            <option value="ssdMobilenetv1" <?php selected($value, 'ssdMobilenetv1'); ?>>
                <?php _e('SSD MobileNet v1 - Accurate (5.4MB)', 'blurwp'); ?>
            </option>
            <option value="tinyFaceDetector" <?php selected($value, 'tinyFaceDetector'); ?>>
                <?php _e('Tiny Face Detector - Fast (190KB)', 'blurwp'); ?>
            </option>
        </select>
        <p class="description"><?php _e('Default face detection model. SSD MobileNet is recommended for best accuracy.', 'blurwp'); ?></p>
        <?php
    }

    public function render_auto_process_field(): void {
        $settings = $this->get_settings();
        $checked = $settings['auto_process'];
        ?>
        <label>
            <input type="checkbox" name="blurwp_settings[auto_process]" value="1" 
                   <?php checked($checked, true); ?>>
            <?php _e('Automatically detect and anonymize faces when uploading images', 'blurwp'); ?>
        </label>
        <?php
    }

    public function render_keep_originals_field(): void {
        $settings = $this->get_settings();
        $checked = $settings['keep_originals'];
        ?>
        <label>
            <input type="checkbox" name="blurwp_settings[keep_originals]" value="1" 
                   <?php checked($checked, true); ?>>
            <?php _e('Keep original (un-anonymized) images as backup', 'blurwp'); ?>
        </label>
        <?php
    }
}
