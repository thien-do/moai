import { forwardRef } from "react";
import { IconType } from "react-icons";
import { border } from "../border/border";
import { DivPx, DivSize } from "../div/div";
import { Icon, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import { ProgressCircle, ProgressCircleColor } from "../progress/circle";
import s from "./button.module.css";
import flat from "./flat.module.css";
import outset from "./outset.module.css";

interface ButtonBusyStyle {
	className: string;
	color: ProgressCircleColor;
	highlightColor: ProgressCircleColor;
}

export interface ButtonStyle {
	main: string;
	selected: string;
	highlight: string;
	busy: ButtonBusyStyle;
}

export interface ButtonSize {
	main: string;
	iconSize: IconSize;
	iconMargin: DivSize;
}

const getClass = (props: ButtonProps) => {
	const size = props.size ?? Button.sizes.medium;
	const style = props.style ?? Button.styles.outset;
	const classes = [s.button, size.main, style.main, outline.normal];
	if (props.fill) classes.push(s.fill);
	if (props.minWidth) classes.push(s.minWidth);
	if (props.selected) classes.push(style.selected);
	if (props.highlight) classes.push(style.highlight);
	if (props.busy) classes.push(style.busy.className);
	if (props.icon && props.reverse) classes.push(s.reverse);
	return classes.join(" ");
};

export interface ButtonProps {
	forwardedRef?: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>;
	// target - button
	/**
	 * Type of the button. Choose one from "submit", "button", "reset"
	 */
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

	/**
	 *
	 */
	selected?: boolean;

	/**
	 * Whether the selected option is "highlighted" with a primary color. If not set, the selected option is dimmed, which is the default behaviour.
	 */
	highlight?: boolean;

	/**
	 * Whether the button should fill its container's space (similar to width: 100%)
	 */
	fill?: boolean;

	/**
	 * Style of the button. Choose one from Button.styles.
	 */
	style?: ButtonStyle;

	/**
	 * Style of the button. Choose one from Button.size.
	 */
	size?: ButtonSize;

	/**
	 * Too short buttons look ugly when placed next to long ones, especially in
	 * dialog (e.g. try "Cancel" and "Ok" pair). This prop ensures a min-width
	 * for buttons so they are not too short.
	 */
	minWidth?: boolean;

	// Children
	/**
	 * The content to render inside the button. Note that out of the box there is no padding or any styles at all.
	 */
	children?: React.ReactNode;

	icon?: IconType;
	reverse?: boolean;
	iconLabel?: string;

	/**
	 * Whether the selected option is "busy",	the button will show its spinner icon.
	 */
	busy?: boolean;
}

const getProgressColor = (props: ButtonProps): ProgressCircleColor => {
	const style = props.style ?? Button.styles.outset;
	return props.highlight ? style.busy.highlightColor : style.busy.color;
};

export const ButtonChildren = (props: ButtonProps): JSX.Element => {
	const size = props.size ?? Button.sizes.medium;
	return (
		<>
			{props.busy && (
				<span className={s.busy}>
					<ProgressCircle
						size={size.iconSize}
						value="indeterminate"
						color={getProgressColor(props)}
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
		(p) => p.minWidth === true && isIconSize(p.size),
		'Icon-sized buttons cannot have "minWidth" set',
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

/**
 * The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 */
export const Button = (props: ButtonProps): JSX.Element => {
	validateButton(props);
	const common = {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

Button.styles = {
	outset: {
		main: [border.radius, outset.main].join(" "),
		selected: outset.selected,
		highlight: outset.highlight,
		busy: {
			className: outset.busy,
			color: ProgressCircle.colors.neutral,
			highlightColor: ProgressCircle.colors.inverse,
		},
	} as ButtonStyle,
	flat: {
		main: [flat.main].join(" "),
		selected: flat.selected,
		highlight: flat.highlight,
		busy: {
			className: flat.busy,
			color: ProgressCircle.colors.neutral,
			highlightColor: ProgressCircle.colors.highlight,
		},
	} as ButtonStyle,
};

Button.sizes = (() => {
	const largeIcon = { iconSize: 20, iconMargin: 12 };
	const mediumIcon = { iconSize: 16, iconMargin: 8 };
	const smallIcon = { iconSize: 12, iconMargin: 4 };
	return {
		large: { main: s.large, ...largeIcon } as ButtonSize,
		largeIcon: { main: s.largeIcon, ...largeIcon } as ButtonSize,
		medium: { main: s.medium, ...mediumIcon } as ButtonSize,
		mediumIcon: { main: s.mediumIcon, ...mediumIcon } as ButtonSize,
		small: { main: s.small, ...smallIcon } as ButtonSize,
		smallIcon: { main: s.smallIcon, ...smallIcon } as ButtonSize,
	};
})();

const isIconSize = (s?: ButtonSize): boolean =>
	s === Button.sizes.largeIcon ||
	s === Button.sizes.mediumIcon ||
	s === Button.sizes.smallIcon;

Button.Forwarded = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	ButtonProps
>((props, ref) => <Button forwardedRef={ref} {...props} />);
