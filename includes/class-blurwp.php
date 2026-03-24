<?php

defined('ABSPATH') || exit;

class BlurWP {
    private static $instance = null;
    private $version;

    public static function get_instance(): self {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        $this->version = BLURWP_VERSION;
        $this->init_hooks();
    }

    private function init_hooks(): void {
        add_action('init', array($this, 'load_textdomain'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));
        
        // Initialize settings
        add_action('plugins_loaded', function() {
            BlurWP_Settings::get_instance();
        }, 20);
        
        // Initialize REST API
        add_action('rest_api_init', function() {
            BlurWP_REST_API::get_instance();
        });
        
        // Initialize media integration
        add_action('plugins_loaded', function() {
            BlurWP_Media::get_instance();
        }, 20);
    }

    public function load_textdomain(): void {
        load_plugin_textdomain(
            'blurwp',
            false,
            dirname(BLURWP_PLUGIN_BASENAME) . '/languages'
        );
    }

    public function enqueue_admin_assets($hook): void {
        // Enqueue styles
        wp_enqueue_style(
            'blurwp-admin',
            BLURWP_PLUGIN_URL . 'assets/css/blurwp-admin.css',
            array(),
            $this->version
        );

        wp_enqueue_style(
            'blurwp-editor',
            BLURWP_PLUGIN_URL . 'assets/css/blurwp-editor.css',
            array(),
            $this->version
        );

        // Single bundled JavaScript file
        wp_enqueue_script(
            'blurwp',
            BLURWP_PLUGIN_URL . 'assets/js/blurwp.iife.js',
            array(),
            $this->version,
            true
        );

        // Alias for block dependency
        wp_register_script('blurwp-editor', '', array('blurwp'), $this->version, true);


        // Get default model from settings
        $blurwp_settings = BlurWP_Settings::get_instance();
        $default_model = $blurwp_settings->get_setting('default_model') ?: 'ssdMobilenetv1';

        // Check for new uploads that need auto-processing
        $auto_process = null;
        $new_upload_id = get_transient('blurwp_new_upload_' . get_current_user_id());
        if ($new_upload_id) {
            $auto_process = array(
                'id' => (int) $new_upload_id,
                'url' => wp_get_attachment_url($new_upload_id)
            );
            delete_transient('blurwp_new_upload_' . get_current_user_id());
        }

        // Check for bulk processing queue
        $bulk_queue = get_transient('blurwp_bulk_queue_' . get_current_user_id());
        if ($bulk_queue) {
            delete_transient('blurwp_bulk_queue_' . get_current_user_id());
        }

        wp_localize_script(
            'blurwp',
            'blurwpEditor',
            array(
                'ajaxUrl' => admin_url('admin-ajax.php'),
                'restUrl' => rest_url('blurwp/v1'),
                'nonce' => wp_create_nonce('wp_rest'),
                'modelUrl' => BLURWP_PLUGIN_URL . 'assets/models',
                'defaultModel' => $default_model,
                'autoProcessSetting' => (bool) $blurwp_settings->get_setting('auto_process'),
                'autoProcess' => $auto_process,
                'bulkQueue' => $bulk_queue ?: array(),
                'i18n' => array(
                    'editorTitle' => __('BlurWP Face Blur Editor', 'blurwp'),
                    'close' => __('Close', 'blurwp'),
                    'sensitivity' => __('Detection Sensitivity', 'blurwp'),
                    'style' => __('Blur Style', 'blurwp'),
                    'blur' => __('Gaussian Blur', 'blurwp'),
                    'pixelate' => __('Pixelate', 'blurwp'),
                    'intensity' => __('Intensity', 'blurwp'),
                    'expand' => __('Expand Area', 'blurwp'),
                    'addFace' => __('Add Face', 'blurwp'),
                    'removeFace' => __('Remove Selected', 'blurwp'),
                    'redetect' => __('Re-detect', 'blurwp'),
                    'facesDetected' => __('Faces detected', 'blurwp'),
                    'preview' => __('Preview', 'blurwp'),
                    'downloadPreview' => __('Download Preview', 'blurwp'),
                    'saveAndReplace' => __('Save & Replace', 'blurwp'),
                    'cancel' => __('Cancel', 'blurwp'),
                    'confirmReplace' => __('Are you sure you want to replace the original image?', 'blurwp'),
                    'unsavedChanges' => __('You have unsaved changes. Are you sure you want to close?', 'blurwp'),
                    'loadError' => __('Failed to load image', 'blurwp'),
                    'detectionError' => __('Failed to detect faces', 'blurwp'),
                    'saveError' => __('Failed to save image', 'blurwp'),
                    'saved' => __('Image saved successfully!', 'blurwp'),
                    'saving' => __('Saving...', 'blurwp'),
                    'detecting' => __('Detecting faces...', 'blurwp'),
                    'previewTitle' => __('Preview Comparison', 'blurwp'),
                    'original' => __('Original', 'blurwp'),
                    'processed' => __('Processed', 'blurwp'),
                    'originalWillBeKept' => __('The original image will be kept for 5 minutes and can be restored.', 'blurwp'),
                    'originalWillBeLost' => __('Warning: The original image will be permanently replaced.', 'blurwp'),
                    'downloadedAndVerified' => __('I have downloaded and verified the preview', 'blurwp'),
                    'replace' => __('Replace Image', 'blurwp'),
                    'undo' => __('Undo', 'blurwp'),
                    'restored' => __('Image restored successfully!', 'blurwp'),
                    'restoreError' => __('Failed to restore image', 'blurwp'),
                    'confirmTitle' => __('Confirm Image Replacement', 'blurwp'),
                    'networkError' => __('Network error. Please check your connection.', 'blurwp'),
                    'invalidAttachment' => __('Invalid attachment or permission denied.', 'blurwp'),
                    'invalidImage' => __('Invalid image format.', 'blurwp'),
                    'fileNotFound' => __('File not found.', 'blurwp'),
                    'saveFailed' => __('Failed to save image.', 'blurwp'),
                    'noBackup' => __('No backup available for restore.', 'blurwp'),
                    'restoreFailed' => __('Failed to restore image.', 'blurwp'),
                    'unknownError' => __('An unknown error occurred.', 'blurwp'),
                    'browserNotSupported' => __('Your browser does not support all required features.', 'blurwp'),
                    'imageTooLarge' => __('Image is too large. Maximum size is 50 megapixels.', 'blurwp'),
                    'unsupportedFormat' => __('Unsupported image format. Please use JPEG, PNG, or WebP.', 'blurwp'),
                    'detectionTimeout' => __('Face detection timed out. Please try again.', 'blurwp')
                )
            )
        );
    }

    public function get_version(): string {
        return $this->version;
    }
}
