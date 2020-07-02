import React from "react";

import { outline } from "../outline/outline";
import { borderColor } from "../border/border";
import { background } from "../background/background";
import s from "./input.module.scss";
import { text } from "../text/text";

interface InputStyle {
	main: string;
	disabled: string;
}

type InputSize = string;

interface VisualProps {
	style?: InputStyle;
	size?: InputSize;
	disabled?: boolean;
}

const getClass = (props: VisualProps) => {
	const style = props.style ?? Input.style.outset;
	const size = props.size ?? Input.size.medium;
	const styles = [s.input, outline.inner, style.main, size]
	if (props.disabled) styles.push(style.disabled);
	return styles.join(" ");
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const onChange = <T,>(props: Props<T>) => (e: ChangeEvent) => {
	if (props.setValue === undefined || props.value === undefined) return;
	const { currentTarget: target } = e;
	const isNumber = typeof props.value === "number";
	props.setValue(isNumber ? target.valueAsNumber : (target.value as any));
};

interface Props<T> extends VisualProps {
	defaultValue?: T;
	value?: T;
	setValue?: (value: T) => void;
	list?: { id: string; values: T[] };
	readOnly?: boolean;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	placeholder?: string;
}

const getType = (props: Props<any>): string => {
	const target = props.value ?? props.defaultValue;
	switch (typeof target) {
		case "string":
			return "text";
		case "number":
			return "number";
		default:
			throw Error(`Unknown input type: "${typeof target}"`);
	}
};

export const Input = <T extends number | string>(props: Props<T>) => (
	<>
		<input
			// value
			type={getType(props)}
			defaultValue={props.defaultValue}
			value={props.value}
			onChange={onChange(props)}
			// event handlers
			onBlur={props.onBlur}
			onFocus={props.onFocus}
			// properties
			className={getClass(props)}
			list={props.list?.id ?? undefined}
			readOnly={props.readOnly}
			disabled={props.disabled}
			placeholder={props.placeholder}
		/>
		{props.list && (
			<datalist id={props.list.id}>
				{props.list.values.map((value) => (
					<option key={value} value={value} />
				))}
			</datalist>
		)}
	</>
);

Input.style = {
	outset: {
		main: [s.outset, borderColor.strong, background.primary].join(" "),
		disabled: "",
	} as InputStyle,
	flat: {
		main: s.flat,
		disabled: text.muted,
	} as InputStyle,
};

Input.size = {
	medium: s.medium as InputSize,
	small: s.small as InputSize,
};
