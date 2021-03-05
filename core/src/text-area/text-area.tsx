import React, { ForwardedRef } from "react";
import { Input, InputStyle } from "../input/input";
import { outline } from "../outline/outline";
import s from "./text-area.module.css";

export interface TextAreaSize {
	main: string;
}

const getClass = (props: TextAreaProps) => {
	const style = props.style ?? TextArea.styles.outset;
	const size = props.size ?? TextArea.sizes.medium;
	return [s.container, outline.always, style.main, size.main].join(" ");
};

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

const onChange = (props: TextAreaProps) => (e: ChangeEvent) => {
	if (props.setValue === undefined || props.value === undefined) return;
	props.setValue(e.currentTarget.value);
};

export interface TextAreaProps {
	// Uncontrolled
	/**
	 * Initial value of the input
	 */
	defaultValue?: string;

	/**
	 * Usually useful in uncontrolled mode.
	 * Read [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html) for details.
	 */
	forwardedRef?: ForwardedRef<HTMLTextAreaElement>;

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

	disabled?: boolean;
	readOnly?: boolean;
	placeholder?: string;
	autoFocus?: boolean;
	autoSelect?: boolean;
	// Events
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
	onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

export const TextArea = (props: TextAreaProps) => {
	const ref = React.useRef<HTMLTextAreaElement>(null);

	React.useEffect(() => {
		const fRef = props.forwardedRef;
		if (!fRef) return;
		if (typeof fRef === "function") return void fRef(ref.current);
		fRef.current = ref.current;
	}, [props.forwardedRef]);

	React.useEffect(() => {
		if (!props.autoSelect) return;
		const element = ref.current;
		if (element === null) throw Error("ref is null");
		element.select();
	}, []);

	return (
		<textarea
			ref={ref}
			// value
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={onChange(props)}
			// event handlers
			onBlur={props.onBlur}
			onFocus={props.onFocus}
			onKeyDown={props.onKeyDown}
			onKeyPress={props.onKeyPress}
			onKeyUp={props.onKeyUp}
			// properties
			className={getClass(props)}
			rows={props.rows}
			readOnly={props.readOnly}
			disabled={props.disabled}
			placeholder={props.placeholder}
			autoFocus={props.autoFocus}
		/>
	);
};

TextArea.styles = {
	outset: Input.styles.outset,
	flat: Input.styles.flat,
};

TextArea.sizes = {
	medium: { main: s.medium } as TextAreaSize,
	small: { main: s.small } as TextAreaSize,
};
