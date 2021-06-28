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
	 * The [HTML `type`][1] attribute, such as "email", "password" or "date".
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
	 */
	type?: string;

	// Uncontrolled

	/**
	 * Initial value of the input in uncontrolled mode.
	 */
	defaultValue?: string | number;

	// Controlled

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

	// Style

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

	// Attributes

	/**
	 * The [HTML `id`][1] attribute of the Input
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id
	 */
	id?: string;
	/**
	 * The [HTML `name`][1] attribute of the Input, usually used in forms
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname
	 */
	name?: string;
	/**
	 * The [HTML `disabled`][1] attribute. If true, users cannot select or
	 * change the text. See also: "readOnly".
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled
	 */
	disabled?: boolean;
	/**
	 * The [HTML `disabled`][1] attribute. If true, users can select text
	 * inside the text box but cannot change it. This is only for inputs that
	 * are rendered as text boxes.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-readonly
	 */
	readOnly?: boolean;
	/**
	 * The [HTML `placeholder`][1] attribute. A string to display inside the
	 * text box when it is empty.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-placeholder
	 */
	placeholder?: string;
	/**
	 * The [HTML `autoFocus`][1] attribute. If true, the input will have focus
	 * on its initial render.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus
	 */
	autoFocus?: boolean;
	/**
	 * A text to label the input. Should use when there is no linked HTML
	 * `label` element.
	 */
	"aria-label"?: string;
	/**
	 * Id of the element that labels the input. Useful when the labels don't
	 * use the HTML `label` element.
	 */
	"aria-labelledby"?: string;
	/**
	 * The maximum number of characters of the text.
	 */
	maxLength?: number;
	/**
	 * The [HTML `required`][1] attribute. If true, a value is required before
	 * form submission. This is based on HTML5's validation.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-required
	 */
	required?: boolean;

	// Events

	/**
	 * The [HTML `onblur`][1] event handler.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur
	 */
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	/**
	 * The [HTML `onfocus`][1] event handler.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus
	 */
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	/**
	 * The [HTML `onkeypress`][1] event handler.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress
	 */
	onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * The [HTML `onkeyup`][1] event handler.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup
	 */
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * The [HTML `onkeydown`][1] event handler.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown
	 */
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * The [HTML `onclick`][1] event handler.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
	 */
	onClick?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * The [HTML `onchange`][1] event handler.
	 *
	 * Note that you should not need to use onChange! This exists only for
	 * compatibility with 3rd-party libraries (those that passing props to a
	 * custom rendered component). You should use `setValue` most of the time.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
	 */
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// This is actually ReturnType<typeof forwardRef>, but we don't know how to
// provide the type parameter to forwardRef. This is required to re-type the
// Input component so that we can attach "Input.sizes" and "Input.styles"
type InputPropsWithRef = InputProps & React.RefAttributes<HTMLInputElement>;

// Re-type the Input component since React's forwardRef returned type cannot
// be extended with property like "Button.sizes"
interface InputComponent
	extends React.ForwardRefExoticComponent<InputPropsWithRef> {
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
