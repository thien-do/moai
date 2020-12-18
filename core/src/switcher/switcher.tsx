import React from "react";
import { ButtonGroup } from "../button-group/button-group";
import { Button, ButtonSize, ButtonStyle } from "../button/button";
import { IconPath } from "../icon/icon";

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
	fill?: boolean;
	size?: ButtonSize;
	style?: ButtonStyle;
}

export const Switcher = <T,>(props: Props<T>) => (
	<ButtonGroup fill={props.fill}>
		{props.options.map((option) => (
			<Button
				key={option.label || option.key}
				icon={option.icon}
				children={option.label}
				onClick={() => props.setValue(option.value)}
				selected={option.value === props.value}
				disabled={option.disabled}
				fill={props.fill}
				size={props.size}
				style={props.style}
			/>
		))}
	</ButtonGroup>
);
