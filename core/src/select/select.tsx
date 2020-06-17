import React from "react";

import { IconC } from "../icon/icon";
import { outline } from "../outline/outline";
import flat from "../button/flat.module.scss";
import outset from "../button/outset.module.scss";
import s from "./select.module.scss";

type SelectStyle = string;
type SelectSize = string;

interface VisualProps {
	style?: SelectStyle;
	size?: SelectSize;
	fullWidth?: boolean;
}

const getSelectClass = (props: VisualProps) => {
	const style = props.style ?? Select.style.outset;
	const size = props.size ?? Select.size.medium;
	return [s.select, style, size].join(" ");
};

const getContainerClass = (props: VisualProps) =>
	[s.container, props.fullWidth ? s.widthFull : s.widthContent].join(" ");

export interface SelectOption<T> {
	value: T;
	label: string;
	disabled?: boolean;
}

interface Props<T> extends VisualProps {
	value: T;
	setValue: (value: T) => void;
	options: SelectOption<T>[];
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

export const Select = <T,>(props: Props<T>) => (
	<div className={getContainerClass(props)}>
		<select
			className={getSelectClass(props)}
			value={props.options.find((o) => o.value === props.value)?.label}
			onChange={onChange(props)}
		>
			{props.options.map(renderOption)}
		</select>
		<span className={s.icon}>
			<IconC icon={{ d: caret }} />
		</span>
	</div>
);

Select.style = {
	outset: `${outset.main} ${outline.outer} ${s.outset}` as SelectStyle,
	flat: `${flat.main} ${outline.inner}` as SelectStyle,
};

Select.size = {
	medium: s.medium as SelectSize,
	small: s.small as SelectSize,
};
