/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import { map, omit } from "lodash";
import tinycolor from "tinycolor2";
import FileCopy from "@material-ui/icons/FileCopy";
import { Tooltip, ClipboardButton } from "@wordpress/components";

/**
 * Internal dependencies
 */
import { getGradientParsed } from "./utils";
import { serializeGradient } from "./serializer";
import SimpleSnackbar from "../snackbar";
import data from "./gradients.json";
import "./styles/style.scss";

class GradientsList extends Component {
	constructor() {
		super(...arguments);
		this.categorizedData = this.categorizedData.bind(this);

		this.state = {
			linear: {},
			radial: {},
			type: "linear",
			date: "",
			message: "",
			copied: false
		};
	}

	componentDidMount() {
		this.categorizedData();
	}

	categorizedData() {
		map(data, (gradients, type) => {
			gradients.sort(function() {
				return 0.5 - Math.random();
			});
			this.setState({ [type]: gradients });
		});
	}

	render() {
		const { type, copied, date, message } = this.state;
		return (
			<Fragment>
				<div className="max-w-screen-xl w-full mx-auto">
					<div className="gradients-list flex flex-wrap py-10 px-5 -mx-5 sm:-mx-4 md:-mx-4">
						{map(this.state[type], (gradient, key) => {
							const { gradientAST, gradientValue } = getGradientParsed(
								gradient.css
							);
							const colors = serializeGradient({
								...omit(gradientAST[0], ["orientation"]),
								type: type + "-gradient"
							});

							return (
								<div
									key={key}
									className="my-5 px-5 w-full sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/4 lg:w-1/4 xl:w-1/5"
								>
									<div className="rounded shadow-md hover:shadow-xl overflow-hidden gradient--inner flex flex-wrap">
										<div
											className="gradient"
											style={{ backgroundImage: gradient.css }}
										></div>
										<div className="px-6 py-4 text-xs text-gray-500 gradient--colors break-words flex flex-wrap content-between">
											<span className="block">
												{map(colors, (color, pos) => {
													return (
														<Fragment key={pos}>
															<span className="inline-block">
																{tinycolor(color).toHexString()}
															</span>
															{pos !== colors.length - 1 ? (
																<span className="inline-block arrow">→</span>
															) : null}
														</Fragment>
													);
												})}
											</span>
											<ClipboardButton
												className="text-gray-700 hover:text-black py-2 px-0 mt-2 rounded inline-flex items-center hover:underline"
												text={gradient.css}
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
								</div>
							);
						})}
					</div>
				</div>
				{copied ? <SimpleSnackbar key={date} status={message} /> : null}
			</Fragment>
		);
	}
}

export default GradientsList;
