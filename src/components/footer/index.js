/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<footer
					className="bg-black border-b border-gray-200 w-full py-10 px-10"
					style={{
						backgroundImage:
							"linear-gradient(165deg, rgb(21, 26, 35) 85%, rgb(255, 216, 151) 85%)"
					}}
				>
					<div className="max-w-screen-xl w-full mx-auto">
						<h2 className="text-5xl font-bold text-white">About</h2>
						<p className="text-white text-xl py-5">
							CopyGradients is an online tool that will enable you to easily
							copy gradients to your clipboard then paste the code on Gutenberg
							editor or any application. You can also generate your own
							gradients using the builder provided.
						</p>
						<h2 className="text-5xl font-bold text-white pt-10">
							Using WordPress?
						</h2>
						<p className="text-white text-xl py-5">
							To easily copy and paste gradients on WordPress just install
							the&nbsp;
							<a href="https://editorskit.com" className="underline">
								EditorsKit Plugin↗
							</a>{" "}
							which is available for free. With EditorsKit, you can enable the
							copy & paste controls on the block that supports gradient like
							button and cover blocks.
						</p>
						<p className="text-white text-xl py-5 sm:mb-20">
							Made by{" "}
							<a href="https://twitter.com/phpbits" className="underline">
								Jeffrey Carandang↗
							</a>{" "}
							- creator of EditorsKit plugin for WordPress.
						</p>
					</div>
				</footer>
			</Fragment>
		);
	}
}

export default Footer;
