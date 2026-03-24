<?php
/**
 * BlurWP Gutenberg Block
 * 
 * Registers the BlurWP block for Gutenberg editor.
 *
 * @package BlurWP
 */

defined('ABSPATH') || exit;

/**
 * Register BlurWP block
 */
function blurwp_register_block() {
    // Check if Gutenberg is available
    if (!function_exists('register_block_type')) {
        return;
    }

    // Register block script
    // Note: It depends on 'blurwp' script which contains the Editor class
    wp_register_script(
        'blurwp-block',
        BLURWP_PLUGIN_URL . 'blocks/block.js',
        array('wp-blocks', 'wp-element', 'wp-components', 'wp-block-editor', 'wp-i18n', 'wp-data', 'blurwp'),
        BLURWP_VERSION,
        true
    );

    // Register block style
    wp_register_style(
        'blurwp-block',
        BLURWP_PLUGIN_URL . 'blocks/block.css',
        array(),
        BLURWP_VERSION
    );

    // Register block type
    register_block_type('blurwp/image', array(
        'editor_script'   => 'blurwp-block',
        'editor_style'    => 'blurwp-block',
        'render_callback' => 'blurwp_render_block',
        'attributes'      => array(
            'id' => array(
                'type'    => 'number',
                'default' => 0,
            ),
            'url' => array(
                'type'    => 'string',
                'default' => '',
            ),
            'alt' => array(
                'type'    => 'string',
                'default' => '',
            ),
            'caption' => array(
                'type'    => 'string',
                'default' => '',
            ),
            'anonymized' => array(
                'type'    => 'boolean',
                'default' => false,
            ),
            'hasBackup' => array(
                'type'    => 'boolean',
                'default' => false,
            ),
        ),
    ));
}
add_action('init', 'blurwp_register_block');

/**
 * Render callback for the block
 *
 * @param array $attributes Block attributes.
 * @return string HTML output.
 */
function blurwp_render_block($attributes) {
    if (empty($attributes['id'])) {
        return '';
    }

    $attachment_id = intval($attributes['id']);
    // Try to get large version
    $image_src = wp_get_attachment_image_src($attachment_id, 'large');
    
    if (!$image_src) {
        // Fallback to full
        $image_src = wp_get_attachment_image_src($attachment_id, 'full');
    }
    
    if (!$image_src) {
        return '';
    }

    $url = $image_src[0];
    $alt = !empty($attributes['alt']) ? $attributes['alt'] : get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
    $caption = !empty($attributes['caption']) ? $attributes['caption'] : '';
    $is_anonymized = get_post_meta($attachment_id, '_blurwp_anonymized', true);

    $class = 'wp-block-blurwp-image';
    if ($is_anonymized) {
        $class .= ' is-anonymized';
    }

    $output = '<figure class="' . esc_attr($class) . '">';
    $output .= '<img src="' . esc_url($url) . '" alt="' . esc_attr($alt) . '" />';
    
    if (!empty($caption)) {
        $output .= '<figcaption>' . wp_kses_post($caption) . '</figcaption>';
    }
    
    $output .= '</figure>';

    return $output;
}
