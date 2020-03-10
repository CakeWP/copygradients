/**
 * External dependencies
 */
import gradientParser from "gradient-parser";

export function getGradientParsed(value) {
  const hasGradient = true;
  // gradientAST will contain the gradient AST as parsed by gradient-parser npm module.
  // More information of its structure available at https://www.npmjs.com/package/gradient-parser#ast.
  const gradientAST = gradientParser.parse(value);
  const gradientValue = value;

  return {
    hasGradient,
    gradientAST,
    gradientValue
  };
}
