<?php
/**
 * Fired when the plugin is uninstalled.
 *
 * @package BlurWP
 */

// If uninstall not called from WordPress, then exit.
if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

// Check if we should keep data (option to preserve settings)
$settings = get_option('blurwp_settings', array());
$keep_data = isset($settings['keep_data_on_uninstall']) ? $settings['keep_data_on_uninstall'] : false;

if ($keep_data) {
    return;
}

// Delete plugin options
delete_option('blurwp_settings');

// Clean up transients
$transient_prefixes = array(
    'blurwp_bulk_queue_',
    'blurwp_bulk_processed_',
    'blurwp_auto_process_',
);

global $wpdb;
foreach ($transient_prefixes as $prefix) {
    $wpdb->query(
        $wpdb->prepare(
            "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s",
            $wpdb->esc_like('_transient_' . $prefix) . '%'
        )
    );
    $wpdb->query(
        $wpdb->prepare(
            "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s",
            $wpdb->esc_like('_transient_timeout_' . $prefix) . '%'
        )
    );
}

// Delete all post meta related to BlurWP
$wpdb->query(
    "DELETE FROM {$wpdb->postmeta} WHERE meta_key LIKE '_blurwp_%'"
);

// Clean up backup files
$upload_dir = wp_upload_dir();
$backup_dirs = $wpdb->get_col(
    "SELECT DISTINCT meta_value FROM {$wpdb->postmeta} 
     WHERE meta_key = '_blurwp_original_file'"
);

foreach ($backup_dirs as $backup_path) {
    if (file_exists($backup_path)) {
        wp_delete_file($backup_path);
    }
}

// Clean up empty backup directories
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($upload_dir['basedir'], RecursiveDirectoryIterator::SKIP_DOTS),
    RecursiveIteratorIterator::CHILD_FIRST
);

foreach ($iterator as $file) {
    if ($file->isDir() && strpos($file->getPathname(), 'blurwp-backups') !== false) {
        $files = array_diff(scandir($file->getPathname()), array('.', '..'));
        if (empty($files)) {
            rmdir($file->getPathname());
        }
    }
}
