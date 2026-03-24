<?php
/**
 * Plugin Name: BlurWP - Face Anonymization
 * Plugin URI: https://github.com/user/blurwp
 * Description: Anonymize human faces in images with blur or pixelate effects
 * Version: 1.2.5
 * Author: BlurWP Team
 * License: GPL v2 or later
 * Text Domain: blurwp
 * Domain Path: /languages
 * Requires at least: 5.0
 * Requires PHP: 8.0
 */

defined('ABSPATH') || exit;

define('BLURWP_VERSION', '1.2.5');
define('BLURWP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('BLURWP_PLUGIN_URL', plugin_dir_url(__FILE__));
define('BLURWP_PLUGIN_BASENAME', plugin_basename(__FILE__));

if (version_compare(PHP_VERSION, '8.0', '<')) {
    add_action('admin_notices', function() {
        echo '<div class="error"><p>';
        echo esc_html__('BlurWP requires PHP 8.0 or higher.', 'blurwp');
        echo '</p></div>';
    });
    return;
}

require_once BLURWP_PLUGIN_DIR . 'includes/class-blurwp.php';
require_once BLURWP_PLUGIN_DIR . 'includes/class-settings.php';
require_once BLURWP_PLUGIN_DIR . 'includes/class-rest-api.php';
require_once BLURWP_PLUGIN_DIR . 'includes/class-media.php';
require_once BLURWP_PLUGIN_DIR . 'blocks/block.php';

function blurwp_init() {
    return BlurWP::get_instance();
}

add_action('plugins_loaded', 'blurwp_init');

/**
 * Plugin activation hook
 * Creates secure backup folder
 */
function blurwp_activate(): void {
    // Ensure backup folder is created and secured on activation
    if (class_exists('BlurWP_REST_API')) {
        BlurWP_REST_API::ensure_backup_folder_secure();
    }
}
register_activation_hook(__FILE__, 'blurwp_activate');
