/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { CheckboxControl } from '@woocommerce/blocks-checkout';
import { getSetting } from '@woocommerce/settings';
/**
 * Internal dependencies
 */
import './style.scss';
const { optInDefaultText } = getSetting('example-block-registration_data', '');

export const Edit = ({ attributes, setAttributes }) => {
	const { text } = attributes;
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<div id="coupons_list" style={{}}>
				<h3>Available Coupons (click on a coupon to use it)</h3>
				<div id="sc-cc">
					<div id="all_coupon_container" className="sc-coupons-list">
						<div
							className="transition duration-100 ease-in-out transform border-2 rounded-sm sc-coupon hover:scale-105 apply_coupons_credits"
							style={{
								minHeight: '6rem',
								backgroundColor: 'var(--sc-color2)',
								color: 'var(--sc-color1)',
								borderColor: 'var(--sc-color2)',
							}}
							data-coupon_code="9sm6q1d9y2j8d"
						>
							<div className="inline-flex flex-row-reverse items-center mr-1">
								<span>10</span>
								<span>$</span>
							</div>
							<span>Store Credit</span>
						</div>
					</div>	
				</div>
			</div>
		</div>
	);
};

export const Save = ({ attributes }) => {
	const { text } = attributes;
	return (
		<div {...blockProps}>
			<div id="coupons_list" style={{}}>
				<h3>Available Coupons (click on a coupon to use it)</h3>
				<div id="sc-cc">
					<div id="all_coupon_container" className="sc-coupons-list">
						<div
							className="transition duration-100 ease-in-out transform border-2 rounded-sm sc-coupon hover:scale-105 apply_coupons_credits"
							style={{
								minHeight: '6rem',
								backgroundColor: 'var(--sc-color2)',
								color: 'var(--sc-color1)',
								borderColor: 'var(--sc-color2)',
							}}
							data-coupon_code="9sm6q1d9y2j8d"
						>
							<div className="inline-flex flex-row-reverse items-center mr-1">
								<span>10</span>
								<span>$</span>
							</div>
							<span>Store Credit</span>
						</div>
					</div>	
				</div>
			</div>
		</div>
	);
};