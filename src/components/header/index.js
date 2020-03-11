/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

/**
 * Internal dependencies
 */
import GradientBuilder from "../builder";
import GradientSubmit from "../submit";

class Header extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			isOpen: false,
			showSubmit: false
		};
	}
	render() {
		return (
			<Fragment>
				<header className="bg-white border-b border-gray-200">
					<nav className="flex items-center justify-between flex-wrap p-6 max-w-screen-xl w-full mx-auto">
						<div className="flex items-center flex-shrink-0 text-blue-900 mr-6">
							<a href="" className="font-semibold text-xl tracking-tight">
								Copy Gradients
							</a>
						</div>
						<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
							<div className="text-sm lg:flex-grow">
								<a
									href="https://twitter.com/copygradients"
									className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500 mr-3"
								>
									<TwitterIcon style={{ width: "1.25rem" }} />
								</a>
								<a
									href="https://github.com/phpbits/copygradients"
									className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500 mr-3"
								>
									<GitHubIcon style={{ width: "1.25rem" }} />
								</a>
							</div>
							<div>
								<button
									className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4"
									onClick={() => {
										this.setState({ isOpen: true });
									}}
								>
									Gradients Builder
								</button>
								<button
									className="bg-transparent hover:bg-blue-700 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
									onClick={() => {
										this.setState({ showSubmit: true });
									}}
								>
									Submit Gradients
								</button>
							</div>
						</div>
					</nav>
				</header>
				{this.state.isOpen && (
					<GradientBuilder
						onClose={e => {
							if (!e.target.classList.contains("components-clipboard-button")) {
								this.setState({ isOpen: false });
							}
						}}
					/>
				)}
				{this.state.showSubmit && (
					<GradientSubmit
						onClose={e => {
							this.setState({ showSubmit: false });
						}}
					/>
				)}
			</Fragment>
		);
	}
}

export default Header;
