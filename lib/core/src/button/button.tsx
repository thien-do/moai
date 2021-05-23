import React, { forwardRef } from "react";
import { IconType } from "react-icons";
import { border } from "../border/border";
import { DivPx } from "../div/div";
import { Icon } from "../icon/icon";
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
	iconSize: number;
	iconMargin: number;
}

export interface ButtonProps {
	// Props in case of "button" tag
	/**
	 * The [type][1] of the button in HTML
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type
	 */
	type?: "submit" | "button" | "reset";
	disabled?: boolean;
	onClick?: React.MouseEventHandler;
	onFocus?: React.FocusEventHandler;
	onBlur?: React.FocusEventHandler;
	autoFocus?: boolean;
	/**
	 * Manually set a tab index for the button. This is dangerous because:
	 *
	 * > Avoid using tabindex values greater than 0. Doing so makes it difficult
	 * > for people who rely on assistive technology to navigate and operate page
	 * > content. Instead, write the document with the elements in a logical sequence.
	 * > - Quoted from [MDN][1]
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
	 */
	dangerouslySetTabIndex?: number;

	// Props in case of "a" tag
	/**
	 * The [URL][1] to link the button to. Setting this means an "a" tag will
	 * be used instead of a "button".
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href
	 */
	href?: string;
	/**
	 * The [target][1] of the button in case of using the "a" tag
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
	 */
	target?: string;

	// Visual props for both cases
	/**
	 * Make the button looks like pressed, e.g. with a darker background
	 */
	selected?: boolean;
	/**
	 * Highlight the button, e.g. with a primary color
	 */
	highlight?: boolean;
	/**
	 * Let the button fills its container's space (i.e. width: 100%)
	 */
	fill?: boolean;
	/**
	 * Style of the button. Choose one from Button.styles. "outset" buttons
	 * stand out from others, while "flat" ones do not.
	 */
	style?: ButtonStyle;
	/**
	 * Size of the button. Choose one from Button.size. The ones with "icon"
	 * suffix makes icon-only buttons squares.
	 */
	size?: ButtonSize;
	/**
	 * Too short buttons look ugly when placed next to long ones, especially in
	 * dialog (e.g. try "Cancel" and "Ok" pair). This prop ensures a min-width
	 * for buttons so they are not too short.
	 */
	minWidth?: boolean;
	/**
	 * The content to render inside the button
	 */
	children?: React.ReactNode;
	/**
	 * Icon of the button. See the [Icons guide][1] to learn more.
	 *
	 * [1]: /docs/guides-icons--primary
	 */
	icon?: IconType;
	/**
	 * Place the icon on the right side of the button
	 */
	iconRight?: boolean;
	/**
	 * The accessible label of the icon. This is required when there is no
	 * "children" (i.e. icon-only buttons) to help screen readers read the
	 * button correctly.
	 */
	iconLabel?: string;
	/**
	 * Render a loading icon on top of the button
	 */
	busy?: boolean;
}

// Button can renders both "button" and "a"
type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

// This is actually ReturnType<typeof forwardRef>, but we don't know how to
// provide the type parameter to forwardRef. This is required to re-type the
// Button component so that we can attach "Button.sizes" and "Button.styles"
type ButtonPropsWithRef = ButtonProps & React.RefAttributes<ButtonElement>;

// Re-type the Button component since React's forwardRef returned type cannot
// be extended with property like "Button.sizes"
interface ButtonComponent
	extends React.ForwardRefExoticComponent<ButtonPropsWithRef> {
	sizes: {
		large: ButtonSize;
		largeIcon: ButtonSize;
		medium: ButtonSize;
		mediumIcon: ButtonSize;
		small: ButtonSize;
		smallIcon: ButtonSize;
	};
	styles: {
		outset: ButtonStyle;
		flat: ButtonStyle;
	};
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
	if (props.icon && props.iconRight) classes.push(s.iconRight);
	return classes.join(" ");
};

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
						component={props.icon}
						display="block"
					/>
				</span>
			)}
			{props.icon && props.children && <DivPx size={size.iconMargin} />}
			{props.children && <span className={s.text}>{props.children}</span>}
		</>
	);
};

const isIconSize = (s?: ButtonSize): boolean =>
	s === Button.sizes.largeIcon ||
	s === Button.sizes.mediumIcon ||
	s === Button.sizes.smallIcon;

const buttonTests: [(props: ButtonProps) => boolean, string][] = [
	[
		(p) => p.minWidth === true && isIconSize(p.size),
		'Buttons that are icon-sized cannot have "minWidth" set',
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

// This is the main implementation of Button, but not the exported interface
// since it's missing the ref. See Button for the exported component.
const buttonRender = (
	props: ButtonProps,
	ref: React.ForwardedRef<ButtonElement>
): JSX.Element => {
	validateButton(props);
	const common = {
		// We need "any" because we can't type check the parameter type of
		// ref to yield error if an anchor ref is passed to a button :(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		ref: ref as any,
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

/**
 * Buttons trigger actions or events, such as submitting forms, opening
 * dialogs or canceling operations. Moai's Buttons can also be used as
 * [links][1] (e.g. to navigate pages).
 *
 * [1]: #link
 */
export const Button = forwardRef(buttonRender) as ButtonComponent;

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
	},
	flat: {
		main: [flat.main].join(" "),
		selected: flat.selected,
		highlight: flat.highlight,
		busy: {
			className: flat.busy,
			color: ProgressCircle.colors.neutral,
			highlightColor: ProgressCircle.colors.highlight,
		},
	},
};

Button.sizes = (() => {
	const largeIcon = { iconSize: 20, iconMargin: 12 };
	const mediumIcon = { iconSize: 16, iconMargin: 8 };
	const smallIcon = { iconSize: 12, iconMargin: 4 };
	return {
		large: { main: s.large, ...largeIcon },
		largeIcon: { main: s.largeIcon, ...largeIcon },
		medium: { main: s.medium, ...mediumIcon },
		mediumIcon: { main: s.mediumIcon, ...mediumIcon },
		small: { main: s.small, ...smallIcon },
		smallIcon: { main: s.smallIcon, ...smallIcon },
	};
})();
