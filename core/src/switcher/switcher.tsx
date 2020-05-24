import React from "react";

import { outline } from "../outline/outline";
import s from "./switcher.module.scss";

export interface SwitcherOption<T> {
	value: T;
	label: string;
}

interface Props<T> {
	value: T;
	setValue: (value: T) => void;
	options: SwitcherOption<T>[];
}

const getClassName = <T,>(value: T, option: SwitcherOption<T>) => {
	const curr = value === option.value ? s.bold : s.soft;
	return `${s.button} ${curr} ${outline.outer}`;
};

// @TODO: not a11y ready
export const Switcher = <T,>({ value, setValue, options }: Props<T>) => (
	<div className={s.container}>
		{options.map((option) => (
			<button
				key={option.label}
				className={getClassName(value, option)}
				onClick={() => setValue(option.value)}
			>
				{option.label}
			</button>
		))}
	</div>
);
