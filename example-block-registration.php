<?php
/**
 * Plugin Name:     Example Block Registration
 * Version:         0.1.0
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     example-block-registration
 *
 * @package         create-block
 */
add_action('woocommerce_blocks_loaded', function() {
    require_once __DIR__ . '/example-block-registration-blocks-integration.php';
	add_action(
		'woocommerce_blocks_cart_block_registration', //hook provided by WC IntegrationRegistry
		function( $integration_registry ) {
			$integration_registry->register( new ExampleBlockRegistration_Blocks_Integration() );
		}
	);
	add_action(
		'woocommerce_blocks_checkout_block_registration',
		function( $integration_registry ) {
			$integration_registry->register( new ExampleBlockRegistration_Blocks_Integration() );
		}
	);
});

/**
 * Registers the slug as a block category with WordPress.
 */
function register_ExampleBlockRegistration_block_category( $categories ) { //adds a new category can be removed.
    return array_merge(
        $categories,
        [
            [
                'slug'  => 'example-block-registration',
                'title' => __( 'ExampleBlockRegistration Blocks', 'example-block-registration' ),
            ],
        ]
    );
}
add_action( 'block_categories_all', 'register_ExampleBlockRegistration_block_category', 10, 2 );
