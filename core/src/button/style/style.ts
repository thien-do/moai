import { border } from "../../border/border";
import { ButtonProps } from "../button";
import { ButtonColor, ButtonColorStyle } from "../color/color";
import sFlat from "./flat.module.css";
import sOutset from "./outset.module.css";

export interface ButtonStyle {
	mainClassName: string;
	// To avoid using disabled style when button is disabled by busy
	busyClassName: string;
	color: (color: ButtonColor) => ButtonColorStyle;
}

const flat: ButtonStyle = {
	mainClassName: sFlat.main,
	busyClassName: sFlat.busy,
	color: (color) => color.flat,
};

const outset: ButtonStyle = {
	mainClassName: [border.radius, sOutset.main].join(" "),
	busyClassName: sOutset.busy,
	color: (color) => color.outset,
};

export const buttonStyles = { flat, outset };

export const getButtonStyle = (props: ButtonProps): ButtonStyle => {
	return props.style ?? buttonStyles.outset;
};
