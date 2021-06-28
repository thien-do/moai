import { ForwardedRef, forwardRef } from "react";
import { Input, InputStyle } from "../input/input";
import { outline } from "../outline/outline";
import s from "./text-area.module.css";

export interface TextAreaSize {
	main: string;
}

const getClass = (props: TextAreaProps) => {
	const style = props.style ?? TextArea.styles.outset;
	const size = props.size ?? TextArea.sizes.medium;
	return [s.container, outline.normal, style.main, size.main].join(" ");
};

export interface TextAreaProps {
	// Uncontrolled
	/**
	 * Initial value of the input
	 */
	defaultValue?: string;

	// Controlled

	/**
	 * Value of the input in controllerd mode
	 */
	value?: string;

	/**
	 * Handler to set the value in controlled mode
	 */
	setValue?: (value: string) => void;

	/**
	 * Style of the text box. Choose one from `TextArea.styles` for example: `TextArea.styles.flat`. Same default as the "Input" component.
	 */
	style?: InputStyle;

	/**
	 * Size of the text box. Choose one from `TextArea.sizes` for example: `TextArea.size.medium`. Same default as the "Input" component.
	 */
	size?: TextAreaSize;

	// Attributes
	/**
	 * Number of row you will see in text area.
	 */
	rows?: number;
	id?: string;
	name?: string;
	disabled?: boolean;
	readOnly?: boolean;
	placeholder?: string;
	autoFocus?: boolean;
	/**
	 * The "required" attribute in HTML
	 */
	required?: boolean;
	// Events
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
	onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	/**
	 * The [HTML `onchange`][1] event handler.
	 *
	 * Note that you should not need to use onChange! This exists only for
	 * compatibility with 3rd-party libraries (those that passing props to a
	 * custom rendered component). You should use `setValue` most of the time.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange
	 */
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

// This is actually ReturnType<typeof forwardRef>, but we don't know how to
// provide the type parameter to forwardRef. This is required to re-type the
// Input component so that we can attach "Input.sizes" and "Input.styles"
type TextAreaPropsWithRef = TextAreaProps &
	React.RefAttributes<HTMLTextAreaElement>;

// Re-type the Input component since React's forwardRef returned type cannot
// be extended with property like "Button.sizes"
interface TextAreaComponent
	extends React.ForwardRefExoticComponent<TextAreaPropsWithRef> {
	sizes: { medium: TextAreaSize; small: TextAreaSize };
	styles: { outset: InputStyle; flat: InputStyle };
}

const renderTextArea = (
	props: TextAreaProps,
	ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => (
	<textarea
		ref={ref}
		// value
		defaultValue={props.defaultValue}
		value={props.value}
		onChange={(event) => {
			props.onChange?.(event);
			props.setValue?.(event.currentTarget.value);
		}}
		// event handlers
		onBlur={props.onBlur}
		onFocus={props.onFocus}
		onKeyDown={props.onKeyDown}
		onKeyPress={props.onKeyPress}
		onKeyUp={props.onKeyUp}
		// properties
		id={props.id}
		name={props.name}
		className={getClass(props)}
		rows={props.rows}
		readOnly={props.readOnly}
		disabled={props.disabled}
		placeholder={props.placeholder}
		autoFocus={props.autoFocus}
		required={props.required}
	/>
);

export const TextArea = forwardRef(renderTextArea) as TextAreaComponent;

TextArea.styles = {
	outset: Input.styles.outset,
	flat: Input.styles.flat,
};

TextArea.sizes = {
	medium: { main: s.medium } as TextAreaSize,
	small: { main: s.small } as TextAreaSize,
};
