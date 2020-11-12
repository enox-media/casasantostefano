<?php

/**
 * Load Theme Scripts and Styles
 */

// setup version filetimes
$v_css = filemtime( get_template_directory() . '/dist/css/main.css' );
$v_js = filemtime( get_template_directory() . '/dist/js/main.js');

function elementor_hello_theme_scripts_styles() {
	// enqueue main css
	wp_enqueue_style( 'elementor-hello-theme-style', get_stylesheet_directory_uri() . '/dist/css/main.css', array(), '1.0' );
	// enqueue main js
	wp_enqueue_script( 'elementor-hello-theme-script', get_theme_file_uri( '/dist/js/main.js' ), array('jquery'), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'elementor_hello_theme_scripts_styles' );

?>