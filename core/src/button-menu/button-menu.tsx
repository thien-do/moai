import React from "react";
import { Button } from "../button/button";
import { ButtonSize, ButtonStyle } from "../button/button";
import s from "./button-menu.module.scss";
import { Icon } from "../icon/icon";

export interface ButtonMenuAction {
	label: string;
	fn: () => void;
}

interface Props {
	actions: ButtonMenuAction[];
	size: ButtonSize;
	style: ButtonStyle;
}

const renderOption = ({ label }: ButtonMenuAction) => (
	<option key={label} value={label}>
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
const morePath =
	"M2 10.03a2 2 0 100-4 2 2 0 000 4zM14 10.03a2 2 0 100-4 2 2 0 000 4zM8 10.03a2 2 0 100-4 2 2 0 000 4z";

export const ButtonMenu = (props: Props) => (
	<div className={s.container}>
		<select
			value="fake"
			className={[props.style.main, s.select].join(" ")}
			onChange={onChange(props.actions)}
		>
			<option value="fake" disabled></option>
			{props.actions.map(renderOption)}
		</select>
		<div className={`${props.size.main} ${s.icon}`}>
			<Icon path={morePath} size={props.size.iconSize} />
		</div>
	</div>
);

ButtonMenu.defaultProps = {
	size: Button.size.medium,
	style: Button.style.outset,
};

ButtonMenu.size = Button.size;

ButtonMenu.style = Button.style;
