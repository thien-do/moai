import React from "react";
import flat from "../button/flat.module.scss";
import outset from "../button/outset.module.scss";
import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import { text } from "../text/text";
import s from "./select.module.scss";
import borderRadius from "../button/border-radius.module.scss";

type SelectStyle = {
	container: string;
	select: string;
	disabled: string;
};

export interface SelectSize {
	select: string;
	icon: string;
}

interface VisualProps {
	style?: SelectStyle;
	size?: SelectSize;
	fullWidth?: boolean;
	disabled?: boolean;
}

const getClassNames = (props: VisualProps) => {
	const style = props.style ?? Select.style.outset;
	const size = props.size ?? Select.size.medium;
	const width = props.fullWidth ? s.widthFull : s.widthContent;
	const disabled = props.disabled ? style.disabled : "";
	return {
		select: [s.select, style.select, disabled, size.select].join(" "),
		container: [s.container, style.container, width].join(" "),
		icon: [s.icon, size.icon, disabled].join(" "),
	};
};

export interface SelectOption<T> {
	value: T;
	label: string;
	disabled?: boolean;
}

interface Props<T> extends VisualProps {
	value: T;
	setValue: (value: T) => void;
	options: SelectOption<T>[];
	title?: string;
}

const caret =
	"M12 6.5c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5 0 .13.05.24.13.33l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z";

const renderOption = <T,>({ label, disabled }: SelectOption<T>) => (
	<option key={label} value={label} disabled={disabled}>
		{label}
	</option>
);

type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

const onChange = <T,>(props: Props<T>) => (event: ChangeEvent) => {
	const label = event.target.value;
	const option = props.options.find((o) => o.label === label);
	if (!option) throw Error(`Option not found: "${label}"`);
	props.setValue(option.value);
};

export const Select = <T,>(props: Props<T>) => {
	const cls = getClassNames(props);
	const value = props.options.find((o) => o.value === props.value)?.label;
	return (
		<div className={cls.container}>
			<select
				className={cls.select}
				value={value}
				onChange={onChange(props)}
				disabled={props.disabled}
				title={props.title}
			>
				{props.options.map(renderOption)}
			</select>
			<span className={cls.icon}>
				<Icon path={caret} />
			</span>
		</div>
	);
};

Select.style = {
	outset: {
		select: [borderRadius.container, outline.normal, outset.main].join(" "),
		disabled: "",
		container: "",
	} as SelectStyle,
	flat: {
		select: [flat.main, outline.normal].join(" "),
		disabled: text.muted,
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
