<?php
/**
 * Register Header Settings
 *
 * @param $wp_customize
 * @return void
 * @author Brian O'Toole <brian@progressivedental.com>
 *
 */

// Add Section - Nav, "section_nav"
Kirki::add_section( 'section_nav', array(
  'title'          => esc_html__( 'Nav', 'kirki' ),
  'description'    => esc_html__( 'Configure theme header settings.', 'kirki' ),
  'panel'          => 'panel_theme',
  'priority'       => 2,
) );


// Nav Background
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'nav_bg',
	'label'          => __( 'Nav Background', 'kirki' ),
	'section'        => 'section_nav',
	'default'        => '#555',
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.header', '.header-mobile'),
			'property'   => 'background',
			'suffix'   => ' !important',
		),
	),
] );

// Nav Link Color
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'nav_link_color',
	'label'          => __( 'Nav Links Color', 'kirki' ),
	'section'        => 'section_nav',
	'default'        => '#FFF',
	//'default'      => Kirki::get_option( 'button_bg_color' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.nav__inner li a', '.header-mobile > div', '.header-mobile > div a', '.nav-mobile .menu-item a', '.nav-mobile li.menu-item-has-children i'),
			'property'   => 'color',
			'suffix'   => ' !important',
		),
		array(
			'element'    => array('.nav-toggle > div'),
			'property'   => 'background',
			'suffix'   => ' !important',
		),
	),
] );

// Nav Link Color: Hover
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'nav_link_color_hover',
	'label'          => __( 'Nav Links Color: Hover', 'kirki' ),
	'section'        => 'section_nav',
	//'default'      => Kirki::get_option( 'button_bg_color' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.nav__inner li a:hover'),
			'property'   => 'color',
			'suffix'   => ' !important',
		),
	),
] );

// Nav Link Dropdown Background
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'nav_dropdown_bg',
	'label'          => __( 'Nav Dropdown Background', 'kirki' ),
	'section'        => 'section_nav',
	'default'        => Kirki::get_option( 'nav_bg' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.nav-desktop .sub-menu', '.dropdown'),
			'property'   => 'background',
			'suffix'   => ' !important',
		),
	),
] );

// Nav Link Dropdown Background:Hover
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'nav_dropdown_bg_hover',
	'label'          => __( 'Nav Dropdown Background: Hover', 'kirki' ),
	'section'        => 'section_nav',
	'default'        => Kirki::get_option( 'nav_bg' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.nav-desktop .sub-menu li a:hover'),
			'property'   => 'background',
			'suffix'   => ' !important',
		),
	),
] );

// MOBILE

// Mobile: Nav Background Opened
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'nav_menu_bg',
	'label'          => __( 'Mobile: Menu Background', 'kirki' ),
	'description'    => esc_html__( 'When the hamburger menu is opened.', 'kirki' ),
	'section'        => 'section_nav',
	'default'      => Kirki::get_option( 'header_bg' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.nav-mobile', '.nav-mobile .sub-menu'),
			'property'   => 'background',
			'suffix'   => ' !important',
		),
	),
] );

// Nav Mobile Menu (Quick Links)
Kirki::add_field( 'pd_theme', [
	'type'          => 'repeater',
	'label'         => esc_html__( 'Mobile: Navbar Quick Links', 'kirki' ),
	'section'       => 'section_nav',
	'row_label'     => [
		'type'        => 'text',
		'value'       => esc_html__('Item', 'kirki' ),
	],
	'button_label'  => esc_html__('Add Item', 'kirki' ),
	'settings'      => 'nav_mobile_links',
	'default'       => [
		[
			'link_text' => esc_html__( 'fa-smile', 'kirki' ),
			'link_type' => 'internal',
		],
		[
			'link_text' => esc_html__( 'fa-map-marker', 'kirki' ),
			'link_type' => 'internal',
		],
	],
	'fields' => [
		'link_text' => [
			'type'        => 'text',
			'label'       => esc_html__( 'Icon', 'kirki' ),
			'description' => esc_html__( 'Find icon code at: https://fontawesome.com/icons?d=gallery Ex. fa-map-marker', 'kirki' ),
		],
		'link_url'  => [
			'type'        => 'select',
			'label'       => esc_html__( 'Page', 'kirki' ),
			'choices'  => Kirki_Helper::get_posts(
				array(
					'posts_per_page' => -1,
					'post_type'      => 'page'
			)),
		],
		'link_type_external' => [
			'type'        => 'text',
			'label'       => esc_html__( 'External link', 'kirki' ),
		],
	],
] );


// Nav Mobile: Click to Call
Kirki::add_field( 'pd_theme', [
	'type'          => 'repeater',
	'label'         => esc_html__( 'Mobile: Click to Call', 'kirki' ),
	'section'       => 'section_nav',
	'row_label'     => [
		'type'        => 'text',
		'value'       => esc_html__('Phone Number', 'kirki' ),
	],
	'button_label'  => esc_html__('Add Phone Number', 'kirki' ),
	'settings'      => 'nav_mobile_phones',
	'default'       => [
		[
			'phone_text' => esc_html__( 'Location', 'kirki' ),
			'phone_link' => esc_html__( '555-555-5555', 'kirki' ),
		]
	],
	'fields' => [
		'phone_text' => [
			'type'        => 'text',
			'label'       => esc_html__( 'Phone Text', 'kirki' ),
			'default'     => 'Location',
			'description' => 'If multiple locations, enter the location or pratice name'
		],
		'phone_link' => [
			'type'        => 'text',
			'label'       => esc_html__( 'Phone Number', 'kirki' ),
			'default'     => '555-555-5555',
			'description' => 'Do not enter the tel:+1. This is already added.'
		],
	],
] );


?>