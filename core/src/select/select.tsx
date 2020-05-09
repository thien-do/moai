import React from "react";

import { IconC } from "../icon/icon";
import form from "../form/button.module.scss";
import outline from "../style/outline.module.scss";

import s from "./select.module.scss";

export interface SelectOption<T> {
	value: T;
	label: string;
}

interface Props<T> {
	value: T;
	setValue: (value: T) => void;
	options: SelectOption<T>[];
	fullWidth?: boolean;
}

const caret =
	"M12 6.5c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5 0 .13.05.24.13.33l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z";

const getWidthCls = (full?: boolean) => (full ? s.widthFull : s.widthContent);

const getContainerCls = (full?: boolean) =>
	`${s.container} ${getWidthCls(full)}`;

const getSelectCls = (full?: boolean) =>
	`${s.select} ${form.button} ${outline.outer} ${getWidthCls(full)}`;

const renderOption = <T,>(option: SelectOption<T>) => (
	<option key={option.label} value={option.label}>
		{option.label}
	</option>
);

type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

export const Select = <T,>(props: Props<T>) => {
	const { value, setValue, options, fullWidth } = props;

	const onChange = React.useCallback(
		(e: ChangeEvent) => {
			const option = options.find((o) => o.label === e.target.value);
			if (!option) throw Error(`Invalid options ${e.target.value}`);
			setValue(option.value);
		},
		[options, setValue]
	);

	return (
		<div className={getContainerCls(fullWidth)}>
			<select
				className={getSelectCls(fullWidth)}
				value={options.find((o) => o.value === value)?.label}
				onChange={onChange}
			>
				{options.map(renderOption)}
			</select>
			<span className={s.icon}>
				<IconC icon={{ d: caret }} />
			</span>
		</div>
	);
};
