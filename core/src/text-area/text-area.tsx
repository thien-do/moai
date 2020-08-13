import React from "react";
import { Input, InputStyle } from "../input/input";
import { outline } from "../outline/outline";
import s from "./text-area.module.scss";

export interface TextAreaSize {
	main: string;
}

const getClass = (props: Props) => {
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

const onChange = (props: Props) => (e: ChangeEvent) => {
	if (props.setValue === undefined || props.value === undefined) return;
	props.setValue(e.currentTarget.value);
};

interface Props {
	// Value
	defaultValue?: string;
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
	// Events
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
	onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
}

export const TextArea = (props: Props) => (
	<textarea
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

TextArea.style = {
	outset: Input.style.outset,
	flat: Input.style.flat,
};

TextArea.size = {
	medium: { main: s.medium } as TextAreaSize,
	small: { main: s.small } as TextAreaSize,
};

TextArea.defaultProps = {
	style: TextArea.style.outset,
	size: TextArea.size.medium,
};
