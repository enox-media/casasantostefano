<?php

/**
 * Register Customize Options if Kirki plugin exists
 *
 * @param $wp_customize
 * @return void
 * @author Brian O'Toole <brian@progressivedental.com>
 *
 */
if ( class_exists( 'Kirki' ) ) {
	// config
	require_once('customizer/config.php');
	// header settings
	require_once('customizer/header.php');
	// nav settings
	require_once('customizer/nav.php');
	// widgets settings
	require_once('customizer/widgets.php');
}
?>