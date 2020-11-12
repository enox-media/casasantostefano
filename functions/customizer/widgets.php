<?php
/**
 * Register Custom Widgets Settings
 *
 * @param $wp_customize
 * @return void
 * @author Brian O'Toole <brian@progressivedental.com>
 *
 */

// Add Section - Widgets, "section_widgets"
Kirki::add_section( 'section_widgets', array(
  'title'          => esc_html__( 'Widgets', 'kirki' ),
  'description'    => esc_html__( 'Configure custom widget settings.', 'kirki' ),
  'panel'          => 'panel_theme',
  'priority'       => 2,
) );


// Video: Caption Background Color
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'widgets_video_caption_bg',
	'label'          => __( 'Video: Caption Background', 'kirki' ),
	'section'        => 'section_widgets',
	'default'        => Kirki::get_option( 'nav_bg' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.video-caption--v-centered p'),
			'property'   => 'background',
			//'suffix'   => ' !important',
		),
	),
] );

// Video: Caption Text Color
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'widgets_video_caption_text',
	'label'          => __( 'Video: Caption Text Color', 'kirki' ),
	'section'        => 'section_widgets',
	'default'        => Kirki::get_option( 'nav_link_color' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.video-caption--v-centered p'),
			'property'   => 'color',
			//'suffix'   => ' !important',
		),
	),
] );

// Video: Play Button Color
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'widgets_video_play',
	'label'          => __( 'Video: Play Button Color', 'kirki' ),
	'section'        => 'section_widgets',
	'default'        => Kirki::get_option( 'widgets_video_caption_text' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.video-thumbnail .item-icon-wrap i + i:before'),
			'property'   => 'color',
			//'suffix'   => ' !important',
		),
	),
] );

// Contact Form Accent
Kirki::add_field( 'pd_theme', [
	'type'           => 'color',
	'settings'       => 'widgets_contact_color',
	'label'          => __( 'Contact Form: Input Accents', 'kirki' ),
	'section'        => 'section_widgets',
	'default'        => Kirki::get_option( 'widgets_video_play' ),
	'transport'      => 'auto',
	'choices'        => array(
		'alpha'        => true,
	),
	'output'         => array(
		array(
			'element'    => array('.wpcf7-radio .wpcf7-list-item label input[type="radio"]:checked + span', '.wpcf7-checkbox .wpcf7-list-item label input[type="checkbox"]:checked + span'),
			'property'   => 'background',
			//'suffix'   => ' !important',
    ),
    array(
			'element'    => array('.contact-form input:focus', '.contact-form select:focus', '.contact-form textarea:focus'),
			'property'   => 'border-color',
			//'suffix'   => ' !important',
		),
	),
] );