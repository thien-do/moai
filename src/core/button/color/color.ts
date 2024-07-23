import { ProgressCircle, ProgressCircleColor } from "../../progress/circle";
import { ButtonProps } from "../button";
import sFailure from "./failure.module.css";
import sHighlight from "./highlight.module.css";
import sNone from "./none.module.css";

/**
 * ButtonColorStyle defines the colors of a specific style (e.g. "outset")
 */
export interface ButtonColorStyle {
	/** The class to be applied to the button tag when it is selected */
	selectedClassName: string;
	/** The class to be applied to the button tag */
	mainClassName: string;
	/** The color of the ProgressCircle */
	progressCircleColor: ProgressCircleColor;
}

/**
 * ButtonColor defines a button color in different styles (e.g. "outset",
 * "flat"). This does not set the color of button directly, but instead will be
 * used by ButtonStyle to apply the correct style.
 */
export interface ButtonColor {
	flat: ButtonColorStyle;
	outset: ButtonColorStyle;
}

const highlight: ButtonColor = {
	outset: {
		selectedClassName: sHighlight.selected,
		mainClassName: sHighlight.outset,
		progressCircleColor: ProgressCircle.colors.inverse,
	},
	flat: {
		selectedClassName: sHighlight.selected,
		mainClassName: sHighlight.flat,
		progressCircleColor: ProgressCircle.colors.highlight,
	},
};

const failure: ButtonColor = {
	outset: {
		mainClassName: sFailure.outset,
		selectedClassName: sFailure.selected,
		progressCircleColor: ProgressCircle.colors.inverse,
	},
	flat: {
		selectedClassName: sFailure.selected,
		mainClassName: sFailure.flat,
		progressCircleColor: ProgressCircle.colors.highlight,
	},
};

const none: ButtonColor = {
	outset: {
		mainClassName: sNone.outset,
		selectedClassName: sNone.selected,
		progressCircleColor: ProgressCircle.colors.neutral,
	},
	flat: {
		mainClassName: sNone.flat,
		selectedClassName: sNone.selected,
		progressCircleColor: ProgressCircle.colors.neutral,
	},
};

export const buttonColors = { none, highlight, failure };

export const getButtonColor = (props: ButtonProps): ButtonColor => {
	if (props.highlight === true) return buttonColors.highlight;
	if (props.color === undefined) return buttonColors.none;
	return props.color;
};
