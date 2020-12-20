import { ChangeEventHandler, ForwardedRef } from "react";
import sRadius from "../button/border-radius.module.css";
import flat from "../button/flat.module.css";
import outset from "../button/outset.module.css";
import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import s from "./select.module.css";

export type SelectStyle = {
	container: string;
	select: string;
	disabled: string;
};

export interface SelectSize {
	select: string;
	icon: string;
}

const getClassNames = <T,>(props: SelectProps<T>) => {
	const style = props.style ?? Select.style.outset;
	const size = props.size ?? Select.size.medium;
	const width = props.fill ? s.fill : "";
	return {
		select: [s.select, style.select, size.select].join(" "),
		container: [s.container, style.container, width].join(" "),
		icon: [s.icon, size.icon].join(" "),
	};
};

export interface SelectOption<T> {
	value: T;
	id: string;
	label: string;
	disabled?: boolean;
}

interface SelectProps<T> {
	options: SelectOption<T>[];
	// Uncontrolled
	defaultValue?: T;
	forwardedRef?: ForwardedRef<HTMLSelectElement>;
	// Controlled
	value?: T;
	setValue?: (value: T) => void;
	// Visual
	style?: SelectStyle;
	size?: SelectSize;
	fill?: boolean;
	disabled?: boolean;
}

const caret =
	"M12 6.5c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5 0 .13.05.24.13.33l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z";

const renderOption = <T,>(option: SelectOption<T>): JSX.Element => (
	<option
		key={option.id}
		value={option.id}
		disabled={option.disabled}
		children={option.label}
	/>
);

const findId = <T,>(props: SelectProps<T>, value?: T): string | undefined => {
	return props.options.find((o) => o.value === value)?.id;
};

const onChange = <T,>(
	props: SelectProps<T>
): ChangeEventHandler<HTMLSelectElement> => (event): void => {
	if (props.setValue === undefined) return;
	const id = event.target.value;
	const option = props.options.find((o) => o.id === id);
	if (!option) throw Error(`Option not found: "${id}"`);
	props.setValue(option.value);
};

export const Select = <T,>(props: SelectProps<T>) => {
	const cls = getClassNames(props);
	const value = findId(props, props.value);
	const defaultValue = findId(props, props.defaultValue);
	return (
		<div className={cls.container}>
			<select
				className={cls.select}
				disabled={props.disabled}
				children={props.options.map(renderOption)}
				// Uncontrolled
				defaultValue={defaultValue}
				ref={props.forwardedRef}
				// Controlled
				value={value}
				onChange={onChange(props)}
			/>
			<span
				className={cls.icon}
				children={<Icon display="block" path={caret} />}
			/>
		</div>
	);
};

Select.style = {
	outset: {
		select: [sRadius.container, outline.normal, outset.main].join(" "),
		container: "",
	} as SelectStyle,
	flat: {
		select: [flat.main, outline.normal].join(" "),
		container: s.flatContainer,
	} as SelectStyle,
};

Select.size = {
	medium: {
		select: s.mediumSelect,
		icon: s.mediumIcon,
	} as SelectSize,
	small: {
		select: s.smallSelect,
		icon: s.smallIcon,
	} as SelectSize,
};
