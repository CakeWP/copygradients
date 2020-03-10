/**
 * External dependencies
 */
import gradientParser from 'gradient-parser';

export function getGradientParsed(value) {
	let hasGradient = true;
	// gradientAST will contain the gradient AST as parsed by gradient-parser npm module.
	// More information of its structure available at https://www.npmjs.com/package/gradient-parser#ast.
	let gradientAST = gradientParser.parse(value);
	let gradientValue = value;

	return {
		hasGradient,
		gradientAST,
		gradientValue,
	};
}