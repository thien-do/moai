import React from "react";
import { IconPath } from "../icon/icon";
import s from "./switcher.module.scss";
import { Button } from "../button/button";

export interface SwitcherOption<T> {
	value: T;
	label?: string;
	icon?: IconPath;
	key?: string;
	disabled?: boolean;
}

interface Props<T> {
	value: T;
	setValue: (value: T) => void;
	options: SwitcherOption<T>[];
}

export const Switcher = <T,>(props: Props<T>) => (
	<div className={s.container}>
		{props.options.map((option) => (
			<div className={s.option} key={option.label || option.key}>
				<Button
					icon={option.icon}
					children={option.label}
					onClick={() => props.setValue(option.value)}
					selected={option.value === props.value}
					disabled={option.disabled}
				/>
			</div>
		))}
	</div>
);
