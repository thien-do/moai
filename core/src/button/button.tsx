import React from "react";

import { IconC, Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import { DivPx } from "../div/div";

import s from "./button.module.scss";
import flat from "./flat.module.scss";
import outset from "./outset.module.scss";

interface ButtonStyle {
	main: string;
	selected: string;
	highlight: string;
}

type ButtonSize = string;

interface VisualProps {
	selected?: boolean;
	highlight?: boolean;
	style?: ButtonStyle;
	size?: ButtonSize;
}

const getClass = ({ highlight, selected, ...props }: VisualProps) => {
	if (highlight === true && selected === true)
		throw Error("Button cannot have both highlight and selected (yet).");
	const style = props.style ?? Button.style.outset;
	const size = props.size ?? Button.size.medium;
	const classes = [s.button, size, style.main];
	if (selected) classes.push(style.selected);
	if (highlight) classes.push(style.highlight);
	return classes.join(" ");
};

interface Props extends VisualProps {
	onClick: () => void;
	children?: React.ReactNode;
	icon?: Icon;
}

export const Button = ({ icon, children, onClick, ...style }: Props) => (
	<button onClick={onClick} className={getClass(style)}>
		{icon && (
			<span className={s.icon}>
				<IconC icon={icon} />
			</span>
		)}
		{icon && children && <DivPx size={8} />}
		{children && <span className={s.text}>{children}</span>}
	</button>
);

Button.style = {
	outset: {
		main: `${s.outset} ${outset.main} ${outline.outer}`,
		selected: outset.selected,
		highlight: outset.highlight,
	} as ButtonStyle,
	flat: {
		main: `${flat.main} ${outline.inner}`,
		selected: flat.selected,
		highlight: "",
	} as ButtonStyle,
};

Button.size = {
	medium: s.medium as ButtonSize,
	small: s.small as ButtonSize,
};
