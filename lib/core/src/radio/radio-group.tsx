import React from "react";
import { Radio } from "./radio";
import s from "./radio-group.module.css";

export interface RadioOption<T> {
	value: T;
	id: string;
	label: React.ReactNode;
}

interface Props<T> {
	isHorizontal?: boolean;
	name: string;
	value: T;
	setValue: (value: T) => void;
	options: RadioOption<T>[];
}

type Foo<T> = Props<T> & { option: RadioOption<T> };

const SingleRadio = <T,>({ name, value, setValue, option }: Foo<T>) => (
	<Radio
		name={name}
		checked={value === option.value}
		children={option.label}
		value={option.id}
		setValue={() => setValue(option.value)}
	/>
);

export const RadioGroup = <T,>(props: Props<T>): JSX.Element => (
	<div
		className={[
			s.container,
			props.isHorizontal === true ? s.hor : s.ver,
		].join(" ")}
	>
		{props.options.map((option) => (
			<div className={s.item} key={option.id}>
				<SingleRadio {...props} option={option} />
			</div>
		))}
	</div>
);
