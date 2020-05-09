import React from "react";

import { IconC } from "../icon/icon";
import form from "../form/button.module.scss";
import outline from "../style/outline.module.scss";

import s from "./select.module.scss";

export interface SelectOption<T> {
	value: T;
	label: string;
}

type Ref = React.Ref<HTMLDivElement>;

interface Props<T> {
	value: T;
	setValue: (value: T) => void;
	options: SelectOption<T>[];
	stringify: (value: T) => string;
	parse: (str: string) => T;
	fullWidth?: boolean;
}

type FCWithRef = <T>(props: Props<T> & { ref?: Ref }) => React.ReactElement;

const caret = {
	d:
		"M12 6.5c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5 0 .13.05.24.13.33l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33z",
};

const getContainerCls = <T,>(props: Props<T>) =>
	[s.container, props.fullWidth ? s.widthFull : s.widthContent].join(" ");

const getSelectCls = <T,>(props: Props<T>) =>
	[
		`${s.select} ${form.button} ${outline.outer}`,
		props.fullWidth ? s.widthFull : s.widthContent,
	].join(" ");

const SelectWithRef = <T,>(props: Props<T>, ref?: Ref) => {
	const { value, setValue, options, stringify, parse } = props;
	return (
		<div className={getContainerCls(props)} ref={ref}>
			<select
				className={getSelectCls(props)}
				value={stringify(value)}
				onChange={(e) => setValue(parse(e.target.value))}
			>
				{options.map((opt) => (
					<option key={opt.label} value={stringify(opt.value)}>
						{opt.label}
					</option>
				))}
			</select>
			<span className={s.icon}>
				<IconC icon={caret} />
			</span>
		</div>
	);
};

// https://github.com/microsoft/TypeScript/pull/30215#issuecomment-517855786
// https://stackoverflow.com/a/58473012
export const Select = React.forwardRef(SelectWithRef) as FCWithRef;

type StringProps = Omit<Props<string>, "stringify" | "parse">;

const self = (s: string) => s;

const StringSelectWithRef = (props: StringProps, ref: Ref) => (
	<Select<string> {...props} stringify={self} parse={self} ref={ref} />
);

export const StringSelect = React.forwardRef(StringSelectWithRef);
