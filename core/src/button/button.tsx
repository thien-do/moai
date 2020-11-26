import React from "react";
import { DivPx, DivSize } from "../div/div";
import { Icon, IconPath, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import { ProgressCircle } from "../progress/circle";
import borderRadius from "./border-radius.module.scss";
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
	iconMargin: DivSize;
};

const getClass = (props: ButtonProps) => {
	const { highlight, selected, isFullWidth, isBusy, disabled } = props;
	const size = props.size ?? Button.size.medium;
	const style = props.style ?? Button.style.outset;
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
	iconLabel?: string;
	size?: ButtonSize;
	isBusy?: boolean;
}

export interface ButtonProps extends ChildrenProps {
	forwardedRef?: React.LegacyRef<HTMLAnchorElement | HTMLButtonElement>;
	// target - button
	type?: "submit" | "button" | "reset";
	disabled?: boolean;
	onClick?: React.MouseEventHandler;
	onFocus?: React.FocusEventHandler;
	onBlur?: React.FocusEventHandler;
	autoFocus?: boolean;
	dangerouslySetTabIndex?: number;
	// target - link
	target?: string;
	href?: string;
	// visual
	selected?: boolean;
	highlight?: boolean;
	isFullWidth?: boolean;
	style?: ButtonStyle;
	size?: ButtonSize;
}

export const ButtonChildren = (props: ChildrenProps) => {
	const size = props.size ?? Button.size.medium;
	return (
		<>
			{props.isBusy && (
				<span className={s.busy}>
					<ProgressCircle size={16} value={null} />
				</span>
			)}
			{props.icon && (
				<span className={s.icon}>
					<Icon
						size={size.iconSize}
						path={props.icon}
						display="block"
					/>
				</span>
			)}
			{props.icon && props.children && <DivPx size={size.iconMargin} />}
			{props.children && <span className={s.text}>{props.children}</span>}
		</>
	);
};

const buttonTests: [(props: ButtonProps) => boolean, string][] = [
	[
		(p) => p.icon !== undefined || p.children !== undefined,
		'Button must have either "icon" or "children" defined so users can see it',
	],
	[
		(p) => p.iconLabel !== undefined || p.children !== undefined,
		'Button must have either "children" or "iconLabel" defined so screen reader can read it',
	],
];

const validateButton = (props: ButtonProps): void => {
	for (let i = 0; i < buttonTests.length; i++) {
		const passed = buttonTests[i][0](props);
		if (passed === false) throw Error(buttonTests[i][1]);
	}
};

export const Button = (props: ButtonProps): JSX.Element => {
	validateButton(props);
	const common = {
		ref: props.forwardedRef as any,
		className: getClass(props),
		children: <ButtonChildren {...props} />,
		"aria-label": props.iconLabel,
	};
	return props.href ? (
		<a
			{...common}
			href={props.href}
			target={props.target}
			rel="noopener noreferrer"
		/>
	) : (
		<button
			{...common}
			onClick={props.onClick}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			disabled={props.disabled || props.isBusy}
			autoFocus={props.autoFocus}
			type={props.type ?? "button"}
			tabIndex={props.dangerouslySetTabIndex}
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
		disabled: flat.disabled,
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

Button.Forwarded = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>((props, ref) => <Button forwardedRef={ref} {...props} />);
