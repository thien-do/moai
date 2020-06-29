import React from "react";

import { Icon, IconPath, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import { DivPx } from "../div/div";

import s from "./button.module.scss";
import flat from "./flat.module.scss";
import outset from "./outset.module.scss";

export interface ButtonStyle {
	main: string;
	selected: string;
	disabled: string;
	highlight: string;
}

export type ButtonSize = {
	main: string;
	iconSize: IconSize;
};

const getClass = (props: Props) => {
	const { highlight, selected, size, style, isFullWidth, disabled } = props;
	if (highlight === true && selected === true)
		throw Error("Button cannot have both highlight and selected (yet).");
	const classes = [s.button, size.main, style.main];
	if (isFullWidth) classes.push(s.fullWidth);
	if (selected) classes.push(style.selected);
	if (highlight) classes.push(style.highlight);
	if (disabled) classes.push(style.disabled, s.disabled);
	return classes.join(" ");
};

interface Props {
	onClick: () => void;
	children?: React.ReactNode;
	icon?: IconPath;
	disabled?: boolean;
	// visual
	selected?: boolean;
	highlight?: boolean;
	isFullWidth?: boolean;
	// visual with default
	style: ButtonStyle;
	size: ButtonSize;
}

export const Button = (props: Props) => (
	<button
		onClick={props.onClick}
		className={getClass(props)}
		disabled={props.disabled}
	>
		{props.icon && (
			<span className={s.icon}>
				<Icon size={props.size.iconSize} path={props.icon} />
			</span>
		)}
		{props.icon && props.children && <DivPx size={8} />}
		{props.children && <span className={s.text}>{props.children}</span>}
	</button>
);

Button.style = {
	outset: {
		main: `${s.outset} ${outset.main} ${outline.outer}`,
		selected: outset.selected,
		highlight: outset.highlight,
		disabled: outset.disabled,
	} as ButtonStyle,
	flat: {
		main: `${flat.main} ${outline.inner}`,
		selected: flat.selected,
		highlight: "",
		disabled: "",
	} as ButtonStyle,
};

Button.size = {
	medium: {
		main: s.medium,
		iconSize: 16,
	} as ButtonSize,
	small: {
		main: s.small,
		iconSize: 12,
	} as ButtonSize,
};

Button.defaultProps = {
	style: Button.style.outset,
	size: Button.size.medium,
};
