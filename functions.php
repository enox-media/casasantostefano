<?php
/**
 * Theme Settings
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; 
}


/**
 * Include Partials Function
 *
 * @param $filename
 *
 */
function include_function($filename) {
  return require_once( dirname( __FILE__ ) . '/functions/' . $filename . '.php' );
}


/**
 * Load Theme Functions
 */

include_function('add-styles-scripts');
include_function('add-theme-support');
include_function('add-nav-support');
include_function('customizer');
include_function('remove-head-junk');