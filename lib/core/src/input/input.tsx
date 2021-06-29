import React from "react";
import { border } from "../border/border";
import { Icon, IconComponent } from "../icon/icon";
import { outline } from "../outline/outline";
import { text } from "../text/text";
import { omit } from "../utils/omit";
import sFlat from "./flat.module.css";
import s from "./input.module.css";
import sOutset from "./outset.module.css";

export interface InputStyle {
	main: string;
}

export interface InputSize {
	main: string;
	mainWithIcon: string;
	icon: string;
	iconSize: number;
	mainColor: string;
}

type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export interface InputProps
	extends Omit<HTMLInputProps, "size" | "list" | "style"> {
	// We intentionally re-define some props here even though they exist in
	// HTMLInputProps so that we can have documentation for them

	/**
	 * The HTML type attribute, such as "email", "password" or "date".
	 */
	type?: HTMLInputProps["type"];
	/**
	 * Initial value of the input in uncontrolled mode.
	 */
	defaultValue?: HTMLInputProps["defaultValue"];
	/**
	 * Value of the input in controlled mode.
	 */
	value?: string;
	/**
	 * Callback to set the value in controlled mode.
	 */
	setValue?: (value: string) => void;
	/**
	 * Id of an [HTML `datalist`][1] element to be used with the Input. Can
	 * also pass an object to let the Input component create the `datalist`
	 * element for you.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
	 */
	list?: { id: string; values: string[] } | string;
	/**
	 * Icon in the input. See the [Icons guide][1] to learn more.
	 *
	 * [1]: /docs/guides-icons--primary
	 */
	icon?: IconComponent;
	/**
	 * Style of the text box. Choose one from `Input.styles`.
	 */
	style?: InputStyle;
	/**
	 * Size of the text box. Choose one from `Input.sizes`.
	 */
	size?: InputSize;
	/**
	 * DO NOT USE THIS.
	 *
	 * onChange is the raw prop, exists only for compatibility with 3rd-party
	 * libraries (those that passing props to a custom component). For direct
	 * usage, use `setValue`.
	 */
	onChange?: HTMLInputProps["onChange"];
}

// This is actually ReturnType<typeof forwardRef>, but we don't know how to
// provide the type parameter to forwardRef. This is required to re-type the
// Button component so that we can attach "Input.sizes" and "Input.styles"
type ButtonPropsWithRef = InputProps & React.RefAttributes<HTMLInputElement>;

// Re-type the Input component since React's forwardRef returned type cannot
// be extended with property like "Button.sizes"
interface InputComponent
	extends React.ForwardRefExoticComponent<ButtonPropsWithRef> {
	sizes: {
		large: InputSize;
		medium: InputSize;
		small: InputSize;
	};
	styles: {
		outset: InputStyle;
		flat: InputStyle;
	};
}

const getClass = (props: InputProps): string => {
	const style = props.style ?? Input.styles.outset;
	const styles = [s.input, outline.normal, style.main];
	const size = props.size ?? Input.sizes.medium;
	if (props.type === "color") {
		styles.push(size.mainColor);
	} else {
		styles.push(props.icon ? size.mainWithIcon : size.main);
	}
	return styles.join(" ");
};

const ERRORS = {
	onChangeSetValue: `"onChange" and "setValue" must not be defined at the same time`,
};

const validate = (props: InputProps): void => {
	if (props.onChange !== undefined && props.setValue !== undefined) {
		throw Error(ERRORS.onChangeSetValue);
	}
};

const inputRender = (
	props: InputProps,
	ref: React.ForwardedRef<HTMLInputElement>
): JSX.Element => {
	validate(props);
	const size = props.size ?? Input.sizes.medium;
	const rawProps = omit(props, ["size", "style"]);

	return (
		<div className={s.container}>
			<input
				{...rawProps}
				ref={ref}
				value={props.value}
				onChange={(event) => {
					props.onChange?.(event);
					props.setValue?.(event.currentTarget.value);
				}}
				className={getClass(props)}
				list={
					typeof props.list === "string"
						? props.list
						: props.list?.id ?? undefined
				}
			/>
			{props.icon && (
				<div className={[s.icon, text.muted, size.icon].join(" ")}>
					<Icon
						display="block"
						component={props.icon}
						size={size.iconSize}
					/>
				</div>
			)}
			{typeof props.list === "object" && (
				<datalist id={props.list.id}>
					{props.list.values.map((value) => (
						<option key={value} value={value} />
					))}
				</datalist>
			)}
		</div>
	);
};

/**
 * An input is an interactive control for users to enter data. They are usually
 * [text boxes][1], where the data is just plain text. However, there are many
 * more types of data, each with their own kind of controls.
 *
 * An input is always rendered as an [HTML `input`][2] element. They support
 * both [controlled][3] and [uncontrolled][4] usages.
 *
 * [1]: https://en.wikipedia.org/wiki/Text_box
 * [2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
 * [3]: https://reactjs.org/docs/forms.html#controlled-components
 * [4]: https://reactjs.org/docs/uncontrolled-components.html
 */
export const Input = React.forwardRef(inputRender) as InputComponent;

Input.styles = {
	outset: { main: [sOutset.main, border.radius].join(" ") },
	flat: { main: [sFlat.main].join(" ") },
};

Input.sizes = {
	large: {
		main: s.largeMain,
		mainWithIcon: s.largeMainWithIcon,
		icon: s.largeIcon,
		iconSize: 16,
		mainColor: s.largeColor,
	},
	medium: {
		main: s.mediumMain,
		mainWithIcon: s.mediumMainWithIcon,
		icon: s.mediumIcon,
		iconSize: 16,
		mainColor: s.mediumColor,
	},
	small: {
		main: s.smallMain,
		mainWithIcon: s.smallMainWithIcon,
		icon: s.smallIcon,
		iconSize: 12,
		mainColor: s.smallColor,
	},
};
