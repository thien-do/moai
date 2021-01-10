import React, { ForwardedRef } from "react";
import { Input, InputStyle } from "../input/input";
import { outline } from "../outline/outline";
import s from "./text-area.module.css";

export interface TextAreaSize {
	main: string;
}

const getClass = (props: TextAreaProps) => {
	const styles = [
		s.container,
		outline.normal,
		props.style.main,
		props.size.main,
	];
	if (props.disabled) styles.push(props.style.disabled);
	return styles.join(" ");
};

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

const onChange = (props: TextAreaProps) => (e: ChangeEvent) => {
	if (props.setValue === undefined || props.value === undefined) return;
	props.setValue(e.currentTarget.value);
};

export interface TextAreaProps {
	// Uncontrolled
	defaultValue?: string;
	forwardedRef?: ForwardedRef<HTMLTextAreaElement>;
	// Controlled
	value?: string;
	setValue?: (value: string) => void;
	// Style
	style: InputStyle;
	size: TextAreaSize;
	// Attributes
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

TextArea.defaultProps = {
	style: TextArea.styles.outset,
	size: TextArea.sizes.medium,
};
