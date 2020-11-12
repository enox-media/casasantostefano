<?php
/**
 * Register Kirki Config
 *
 * @param $wp_customize
 * @return void
 * @author Brian O'Toole <brian@progressivedental.com>
 *
 */

// Add Config
Kirki::add_config( 'pd_theme', array(
	'capability'    => 'edit_theme_options',
	'option_type'   => 'theme_mod',
) );

// Add Panel - Theme Settings
Kirki::add_panel( 'panel_theme', array(
  'priority'    => 10,
  'title'       => esc_html__( 'Theme Settings', 'kirki' ),
  'description' => esc_html__( 'Configure theme settings', 'kirki' ),
) );