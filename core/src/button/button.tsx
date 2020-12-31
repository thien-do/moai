import React from "react";
import { DivPx, DivSize } from "../div/div";
import { Icon, IconPath, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import { ProgressCircle } from "../progress/circle";
import borderRadius from "./border-radius.module.css";
import s from "./button.module.css";
import flat from "./flat.module.css";
import outset from "./outset.module.css";

export interface ButtonStyle {
	main: string;
	selected: string;
	highlight: string;
	busy: string;
}

export type ButtonSize = {
	main: string;
	iconSize: IconSize;
	iconMargin: DivSize;
};

const getClass = (props: ButtonProps) => {
	const { highlight, selected, fill, busy, reverse, icon } = props;
	const size = props.size ?? Button.size.medium;
	const style = props.style ?? Button.style.outset;
	const classes = [s.button, size.main, style.main];
	if (fill) classes.push(s.fill);
	if (selected) classes.push(style.selected);
	if (highlight) classes.push(style.highlight);
	if (busy) classes.push(style.busy);
	if (icon && reverse) classes.push(s.reverse);
	return classes.join(" ");
};

export interface ButtonProps {
	forwardedRef?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;
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
	fill?: boolean;
	style?: ButtonStyle;
	size?: ButtonSize;
	// Children
	children?: React.ReactNode;
	icon?: IconPath;
	reverse?: boolean;
	iconLabel?: string;
	busy?: boolean;
}

export const ButtonChildren = (props: ButtonProps): JSX.Element => {
	const size = props.size ?? Button.size.medium;
	return (
		<>
			{props.busy && (
				<span className={s.busy}>
					<ProgressCircle
						size={size.iconSize}
						value={null}
						color={props.highlight ? "inverse" : "base"}
					/>
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
		(p) => p.style === Button.style.flat && p.highlight === true,
		"Flat buttons can not have highlight style",
	],
	[
		(p) => p.icon === undefined && p.children === undefined,
		'Button must have either "icon" or "children" defined so users can see it',
	],
	[
		(p) => p.iconLabel === undefined && p.children === undefined,
		'Button must have either "children" or "iconLabel" defined so screen reader can read it',
	],
];

const validateButton = (props: ButtonProps): void => {
	for (let i = 0; i < buttonTests.length; i++) {
		const failed = buttonTests[i][0](props);
		if (failed) throw Error(buttonTests[i][1]);
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
			disabled={props.disabled || props.busy}
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
		busy: outset.busy,
	} as ButtonStyle,
	flat: {
		main: [flat.main, outline.normal].join(" "),
		selected: flat.selected,
		highlight: "",
		busy: flat.busy,
	} as ButtonStyle,
};

Button.size = {
	medium: {
		main: s.medium,
		iconSize: 16,
		iconMargin: 8,
	} as ButtonSize,
	mediumIcon: {
		main: s.mediumIcon,
		iconSize: 16,
		iconMargin: 8,
	} as ButtonSize,
	small: {
		main: s.small,
		iconSize: 12,
		iconMargin: 4,
	} as ButtonSize,
	smallIcon: {
		main: s.smallIcon,
		iconSize: 12,
		iconMargin: 4,
	} as ButtonSize,
};

Button.Forwarded = React.forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>((props, ref) => <Button forwardedRef={ref} {...props} />);
