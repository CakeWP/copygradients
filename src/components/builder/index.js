/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import FileCopy from "@material-ui/icons/FileCopy";
import {
	Modal,
	ClipboardButton
	//   __experimentalCustomGradientPicker as GradientPicker
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./styles/style.scss";
import GradientPicker from "../gradient-picker";
import SimpleSnackbar from "../snackbar";

class GradientBuilder extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			copied: false,
			value: "linear-gradient(90deg,rgb(0,198,255) 0%,rgb(0,114,255) 100%)",
			date: null,
			message: ""
		};
	}
	render() {
		const { onClose } = this.props;
		const { copied, value, date, message } = this.state;

		return (
			<Fragment>
				<Modal
					className="w-full h-full max-w-xl rounded-sm"
					title="Gradients Builder"
					onRequestClose={onClose}
				>
					<div className="flex flex-wrap h-full w-full gradient-builder content-start">
						<div className="w-full md:w-3/4 h-12 md:h-full mb-5 md:mb-0 md:pr-10 gradient-preview">
							<div
								className="h-full w-full rounded-md"
								style={{ backgroundImage: value }}
							></div>
						</div>
						<div className="w-full md:w-1/4">
							<GradientPicker
								value={value}
								onChange={newValue => {
									this.setState({ value: newValue });
								}}
							/>
							<p className="text-xs text-gray-500">
								Click on the colorbar to add/edit colors.
							</p>
							<div className="bg-gray-800 py-3 px-4 mt-12 rounded-md text-green-300 text-xs code">
								<span className="text-orange-300 ">{value.split("(")[0]}</span>
								{value.replace(value.split("(")[0], "")}
							</div>
							<ClipboardButton
								text={value}
								onCopy={() => {
									this.setState({
										copied: true,
										date: new Date(),
										message: "Copied gradient CSS to your clipboard."
									});
								}}
							>
								<FileCopy
									className="fill-current w-4 h-4 mr-2"
									style={{ width: "1rem", height: "1rem" }}
								/>
								<span>Copy Gradient</span>
							</ClipboardButton>
						</div>
					</div>
				</Modal>
				{copied ? <SimpleSnackbar key={date} status={message} /> : null}
			</Fragment>
		);
	}
}

export default GradientBuilder;
