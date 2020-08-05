import React from "react";
import * as Button from "../button/button";
import { IconPath } from "../icon/icon";
import s from "./button-menu.module.scss";

export interface ButtonMenuAction {
	label: string;
	fn: () => void;
	disabled?: boolean;
}

interface Props {
	actions: ButtonMenuAction[];
	// Like Button:
	children?: React.ReactNode;
	icon?: IconPath;
	// Styles
	size: Button.ButtonSize;
	style: Button.ButtonStyle;
}

const renderOption = ({ label, disabled }: ButtonMenuAction) => (
	<option disabled={disabled} key={label} value={label}>
		{label}
	</option>
);

type ChangeEvent = React.ChangeEvent<HTMLSelectElement>;

const onChange = (actions: ButtonMenuAction[]) => (event: ChangeEvent) => {
	const label = event.target.value;
	const action = actions.find((action) => action.label === label);
	if (action === undefined) throw Error(`Action not found: "${label}"`);
	action.fn();
};

export const ButtonMenu = (props: Props) => (
	<div className={s.container}>
		<select
			value="fake"
			// Should not use props.size here because there is no content
			// inside this tag. Select's size should instead follow the fake
			// button below
			className={[props.style.main, s.select].join(" ")}
			onChange={onChange(props.actions)}
		>
			<option value="fake" disabled></option>
			{props.actions.map(renderOption)}
		</select>
		<div className={[props.size.main, s.button].join(" ")}>
			<Button.ButtonChildren {...props} />
		</div>
	</div>
);

ButtonMenu.defaultProps = {
	size: Button.Button.defaultProps.size,
	style: Button.Button.defaultProps.style,
};

ButtonMenu.size = Button.Button.size;
ButtonMenu.style = Button.Button.style;
