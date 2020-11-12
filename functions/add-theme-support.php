<?php

/**
 * Setup
 */
function elementor_hello_theme_setup() {
	add_theme_support( 'menus' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
	/*add_theme_support( 'custom-logo', array(
		'height' => 70,
		'width' => 350,
		'flex-height' => true,
		'flex-width' => true,
	) );*/
	add_theme_support( 'woocommerce' );
	load_theme_textdomain( 'elementor-hello-theme', get_template_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'elementor_hello_theme_setup' );


/**
 * Register Locations
 */
function elementor_hello_theme_register_elementor_locations( $elementor_theme_manager ) {
	$elementor_theme_manager->register_all_core_location();
};
add_action( 'elementor/theme/register_locations', 'elementor_hello_theme_register_elementor_locations' );

// Remove WP Embed
function elementor_hello_theme_deregister_scripts() {
	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_footer', 'elementor_hello_theme_deregister_scripts' );


/**
 * Register SVG Support
 */
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {
	global $wp_version; if( $wp_version == '4.7' || ( (float) $wp_version < 4.7 ) ) { return $data; }
	$filetype = wp_check_filetype( $filename, $mimes );
	return [ 'ext' => $filetype['ext'], 'type' => $filetype['type'], 'proper_filename' => $data['proper_filename'] ];
	}, 10, 4 );
	function cc_mime_types( $mimes ){ $mimes['svg'] = 'image/svg+xml'; return $mimes; } add_filter( 'upload_mimes', 'cc_mime_types' );
	function fix_svg() { echo '<style>.attachment-266x266, .thumbnail img { width: 100% !important; height: auto !important; }</style>'; } add_action( 'admin_head', 'fix_svg' );



/**
 * Add ACF Options Page
 */
/*
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
}
*/

?>