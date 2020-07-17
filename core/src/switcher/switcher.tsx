import React from "react";
import { Button, ButtonSize } from "../button/button";
import { IconPath } from "../icon/icon";
import s from "./switcher.module.scss";

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
	isFullWidth?: boolean;
	size?: ButtonSize;
}

export const Switcher = <T,>(props: Props<T>) => (
	<div className={`${s.container} ${props.isFullWidth ? s.full : ""}`}>
		{props.options.map((option) => (
			<div className={s.option} key={option.label || option.key}>
				<Button
					icon={option.icon}
					children={option.label}
					onClick={() => props.setValue(option.value)}
					selected={option.value === props.value}
					disabled={option.disabled}
					isFullWidth={props.isFullWidth}
					size={props.size}
				/>
			</div>
		))}
	</div>
);
