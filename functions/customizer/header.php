<?php
/**
 * Register Header Settings
 *
 * @param $wp_customize
 * @return void
 * @author Brian O'Toole <brian@progressivedental.com>
 *
 */

// Add Section - Header, "section_header"
Kirki::add_section( 'section_header', array(
  'title'          => esc_html__( 'Header', 'kirki' ),
  'description'    => esc_html__( 'Configure theme header settings.', 'kirki' ),
  'panel'          => 'panel_theme',
  'priority'       => 1,
) );


// Logo, added to default "title_tagline" section
Kirki::add_field( 'theme_pd', [
	'type'        => 'image',
	'settings'    => 'header_logo',
	'label'       => esc_html__( 'Logo', 'kirki' ),
	'section'     => 'title_tagline',
	'default'     => '',
] );

// Top Bar Background
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'header_topbar_bg',
	'label'          => __( 'Top Bar Background', 'kirki' ),
	'section'        => 'section_header',
	'default'        => '#111',
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.header__topbar'),
			'property'   => 'background',
		),
	),
] );

// Header Background
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'header_bg',
	'label'          => __( 'Header Background', 'kirki' ),
	'section'        => 'section_header',
	'default'        => '#333',
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.header__logobar'),
			'property'   => 'background',
			'suffix'   => ' !important',
		),
	),
] );

// Header CTA Text
Kirki::add_field( 'pd_theme', [
	'type'     => 'text',
	'settings' => 'header_cta_text',
	'label'    => esc_html__( 'Header CTA Text', 'kirki' ),
	'section'  => 'section_header',
	'default'  => esc_html__( 'Book Now', 'kirki' ),
] );

// Header CTA Link
Kirki::add_field( 'pd_theme', array(
	'type'     => 'select',
	'settings' => 'header_cta_link',
	'label'    => esc_html__( 'Header CTA Link', 'kirki' ),
	'section'  => 'section_header',
	'default'  => 'Contact',
	'choices'  => Kirki_Helper::get_posts(
		array(
			'posts_per_page' => -1,
			'post_type'      => 'page'
  )),
) );


?>