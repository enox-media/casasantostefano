<?php

/**
 * Remove Emoji Junk From Head
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

/**
 * Remove annoying autoformatting
 */

//foreach ( array( 'the_content', 'the_title', 'the_excerpt' ) as $hook ) {
//  remove_filter( $hook, 'wptexturize' );
//  remove_filter( $hook, 'wpautop' );
//}

?>