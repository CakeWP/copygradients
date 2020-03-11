/**
 * External dependencies
 */
import React, { Component, Fragment } from "react";
import { map } from "lodash";

/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { useCallback, useMemo } from "@wordpress/element";

/**
 * Internal dependencies
 */
import CustomGradientPicker from "../custom-gradient-picker";

export default function GradientPicker({
	className,
	gradients,
	onChange,
	value,
	clearable = true,
	disableCustomGradients = false
}) {
	const clearGradient = useCallback(() => onChange(undefined), [onChange]);

	return <CustomGradientPicker value={value} onChange={onChange} />;
}
