/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import { Modal } from "@wordpress/components";

/**
 * Internal dependencies
 */
// import "./styles/style.scss";

class GradientSubmit extends Component {
	render() {
		const { onClose } = this.props;

		return (
			<Fragment>
				<Modal
					className="rounded-sm"
					title="Add New Gradient"
					onRequestClose={onClose}
				>
					<div className="flex flex-wrap gradient-submit">
						<p className="text-md">
							Adding a gradient is easy. All you need to do is to create a
							Github issue and add the gradient value. You can also submit Pull
							Request with the updated gradients.json file containing the
							gradients you want to submit.
						</p>
						<a
							href="https://github.com/phpbits/copygradients#contributing"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4 mt-5"
						>
							Tell me more ↗
						</a>
					</div>
				</Modal>
			</Fragment>
		);
	}
}

export default GradientSubmit;
