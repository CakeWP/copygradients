/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import { map, omit } from 'lodash';
import tinycolor from 'tinycolor2';

/**
 * Internal dependencies
 */
import { getGradientParsed } from './utils';
import { serializeGradient } from './serializer';
import data from './gradients.json';
import './styles/style.scss';

class GradientsList extends Component {
	constructor() {
		super(...arguments);
		this.categorizedData = this.categorizedData.bind(this);
		
			this.state = {
				linear: {},
				radial: {},
				type: 'linear',
			};
	}

	componentDidMount(){
		this.categorizedData();
	}

	categorizedData(){
		map(data, ( gradients, type ) => {
			this.setState({ [type]: gradients });
		})
	}

	render() {
		const { type } = this.state;
		return(
			<Fragment>
				<div className="gradients-list flex flex-wrap -mx-5 sm:-mx-4 md:-mx-4">
					{
						map(this.state[type], (gradient, key) => {
							let { gradientAST, gradientValue } = getGradientParsed(gradient.css);
							let colors = serializeGradient({
								...omit(gradientAST[0], ['orientation']),
								type: type + '-gradient'
							});
							
							return(
								<div key={key} className="my-5 px-5 w-full sm:my-4 sm:px-4 sm:w-1/2 md:my-4 md:px-4 md:w-1/4 lg:w-1/5 xl:w-1/6">
									<div className="max-w-sm rounded shadow-md hover:shadow-xl overflow-hidden gradient--inner flex flex-wrap">
										<div className="gradient" style={{ backgroundImage: gradient.css }}></div>
										<div className="px-6 py-4 text-xs text-gray-500 gradient--colors break-words flex flex-wrap content-between">
											<span>
												{ map(colors, (color, pos) => {
													return(
														<Fragment>
															<span className="inline-block">{ tinycolor(color).toHexString() }</span>
															{ pos !== colors.length-1 ? <span className="inline-block arrow">⟶</span> : null }
														</Fragment>
													);
												}) }
											</span>
											
											<button class="text-gray-800 py-2 mt-2 rounded inline-flex items-center">
												<svg class="fill-current w-4 h-4 mr-2"  xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"/></svg>
												<span>Copy CSS</span>
											</button>
										</div>
									</div>
									
								</div>
							);
						})
					}
				</div>
			</Fragment>
		);
	}
}

export default GradientsList;
