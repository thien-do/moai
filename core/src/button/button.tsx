import React from "react";
import { DivPx, DivSize } from "../div/div";
import { Icon, IconPath, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import s from "./button.module.scss";
import flat from "./flat.module.scss";
import outset from "./outset.module.scss";
import borderRadius from "./border-radius.module.scss";
import { ProgressCircle } from "../progress/circle";

export interface ButtonStyle {
	main: string;
	selected: string;
	disabled: string;
	highlight: string;
}

export type ButtonSize = {
	main: string;
	iconSize: IconSize;
	iconMargin: DivSize;
};

const getClass = (props: Props) => {
	const { highlight, selected, size, style, isFullWidth } = props;
	const { isBusy, disabled } = props;
	if (highlight === true && selected === true)
		throw Error("Button cannot have both highlight and selected (yet).");
	const classes = [s.button, size.main, style.main];
	if (isFullWidth) classes.push(s.fullWidth);
	if (selected) classes.push(style.selected);
	if (highlight) classes.push(style.highlight);
	if (disabled || isBusy) classes.push(style.disabled, s.disabled);
	return classes.join(" ");
};

interface ChildrenProps {
	children?: React.ReactNode;
	icon?: IconPath;
	size: ButtonSize;
	isBusy?: boolean;
}

interface Props extends ChildrenProps {
	// target - button
	disabled?: boolean;
	onClick?: () => void;
	autoFocus?: boolean;
	// target - link
	target?: string;
	href?: string;
	// visual
	selected?: boolean;
	highlight?: boolean;
	isFullWidth?: boolean;
	// visual with default
	style: ButtonStyle;
	size: ButtonSize;
}

const validateProps = (props: Props) => {
	if (props.onClick === undefined && props.href === undefined)
		throw Error("onClick and href are undefined");
};

export const ButtonChildren = (props: ChildrenProps) => (
	<>
		{props.isBusy && (
			<span className={s.busy}>
				<ProgressCircle size={16} value={null} />
			</span>
		)}
		{props.icon && (
			<span className={s.icon}>
				<Icon size={props.size.iconSize} path={props.icon} />
			</span>
		)}
		{props.icon && props.children && <DivPx size={props.size.iconMargin} />}
		{props.children && <span className={s.text}>{props.children}</span>}
	</>
);

export const Button = (props: Props) => {
	validateProps(props);
	return props.href ? (
		<a
			className={getClass(props)}
			href={props.href}
			target={props.target}
			rel="noopener noreferrer"
			children={<ButtonChildren {...props} />}
		/>
	) : (
		<button
			className={getClass(props)}
			onClick={props.onClick}
			disabled={props.disabled || props.isBusy}
			autoFocus={props.autoFocus}
			children={<ButtonChildren {...props} />}
		/>
	);
};

Button.style = {
	outset: {
		main: [borderRadius.container, outset.main, outline.normal].join(" "),
		selected: outset.selected,
		highlight: outset.highlight,
		disabled: outset.disabled,
	} as ButtonStyle,
	flat: {
		main: [flat.main, outline.normal].join(" "),
		selected: flat.selected,
		highlight: "",
		disabled: "",
	} as ButtonStyle,
};

Button.size = {
	medium: {
		main: s.medium,
		iconSize: 16,
		iconMargin: 8,
	} as ButtonSize,
	small: {
		main: s.small,
		iconSize: 12,
		iconMargin: 4,
	} as ButtonSize,
};

Button.defaultProps = {
	style: Button.style.outset,
	size: Button.size.medium,
};
