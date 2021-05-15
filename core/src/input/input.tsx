import React from "react";
import { border } from "../border/border";
import { Icon, IconComponent } from "../icon/icon";
import { outline } from "../outline/outline";
import { text } from "../text/text";
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

export interface InputProps {
	/**
	 * Type of input. For example: email, password, number, etc... See [MDN reference][1]
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype
	 */
	type?: string;

	// Uncontrolled

	/**
	 * Initial value of the input in uncontrolled mode
	 */
	defaultValue?: string | number;

	// Controlled

	/**
	 * Value of the Input in controlled mode
	 */
	value?: string;

	/**
	 * Callback to set the value in controlled mode
	 */
	setValue?: (value: string) => void;

	/**
	 * Id of a [datalist][1] element to be used. Can pass an object with values for
	 * the Input component to create the [datalist][1].
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
	 */
	list?: { id: string; values: string[] } | string;

	// Style

	/**
	 * Icon appear in an input. See the [Icons guide][1] to learn more.
	 * [1]: /docs/guides-icons--primary
	 */
	icon?: IconComponent;
	/**
	 * Style of the text box. Choose one from `Input.styles`
	 */
	style?: InputStyle;
	/**
	 * Size of the text box. Choose one from `Input.sizes`
	 */
	size?: InputSize;

	// Attributes

	/**
	 * The element's identifier. See [MDN reference][1]
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
	 */
	id?: string;
	/**
	 * The name of the input, used when submitting HTML form. See [MDN reference][1]
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname
	 */
	name?: string;
	/**
	 * Define whether the input is disabled or not.
	 */
	disabled?: boolean;
	/**
	 * Define whether the input can be selected but not changed by the user.
	 */
	readOnly?: boolean;
	/**
	 * Placeholder text to display in the input whenever it is empty.
	 */
	placeholder?: string;
	/**
	 * Define the element should receive focus on render or not.
	 */
	autoFocus?: boolean;
	/**
	 * A string value that labels the current element.
	 */
	"aria-label"?: string;
	/**
	 * Identifies the element that labels the current element.
	 */
	"aria-labelledby"?: string;
	/**
	 * The maximum number of characters of value
	 */
	maxLength?: number;
	/**
	 * A value is required before form submission
	 */
	required?: boolean;

	// Events

	/**
	 * Handler that called when the element outfocus
	 */
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	/**
	 * Handler that called when the element got focused
	 */
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	/**
	 * Handler that called when the user presses a key (on the keyboard)
	 */
	onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * Handler that is called when a key is released
	 */
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * Handler that is called when a key is pressed
	 */
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * Handler that is called when click to an input
	 */
	onClick?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * Handler that is called when the value changes.
	 *
	 * You should not need to use onChange! This exists only for compatibility
	 * with 3rd-party libraries (those that passing props to a custom rendered
	 * component)
	 */
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
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
	return (
		<div className={s.container}>
			<input
				ref={ref}
				// Value
				type={props.type}
				defaultValue={props.defaultValue}
				value={props.value}
				onChange={(event) => {
					props.onChange?.(event);
					props.setValue?.(event.currentTarget.value);
				}}
				// Event handlers
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				onKeyDown={props.onKeyDown}
				onKeyPress={props.onKeyPress}
				onKeyUp={props.onKeyUp}
				// Properties
				id={props.id}
				name={props.name}
				className={getClass(props)}
				list={
					typeof props.list === "string"
						? props.list
						: props.list?.id ?? undefined
				}
				readOnly={props.readOnly}
				disabled={props.disabled}
				placeholder={props.placeholder}
				autoFocus={props.autoFocus}
				aria-label={props["aria-label"]}
				aria-labelledby={props["aria-labelledby"]}
				maxLength={props.maxLength}
				required={props.required}
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
 * Input (or text field) is text input that allow users to write or edit text entries.
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
