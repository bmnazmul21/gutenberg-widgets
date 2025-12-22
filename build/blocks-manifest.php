<?php
// This file is generated. Do not modify it manually.
return array(
	'copyright-date-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/copyright-date-block',
		'version' => '0.1.0',
		'title' => 'Copyright Date Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'copyright-date-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScript' => 'file:./view.js'
	),
	'hero-section' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ns/hero-section',
		'title' => 'Custom Hero Section',
		'category' => 'text',
		'attributes' => array(
			'heading' => array(
				'type' => 'string'
			),
			'paragraph' => array(
				'type' => 'string'
			)
		),
		'editorScript' => 'file:./index.js'
	),
	'popular-post' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'ns/popular-post',
		'title' => 'Custom Popular Post',
		'category' => 'text',
		'attributes' => array(
			'heading' => array(
				'type' => 'string',
				'default' => 'Popular Posts'
			)
		),
		'styles' => array(
			array(
				'name' => 'grid-view',
				'label' => 'Grid View',
				'isDefault' => true
			),
			array(
				'name' => 'list-view',
				'label' => 'List View'
			)
		),
		'editorScript' => 'file:./index.js',
		'render' => 'file:./render.php',
		'style' => 'file:./style.css'
	)
);
