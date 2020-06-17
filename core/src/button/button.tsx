import React from "react";

import { IconC, Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import { DivPx } from "../div/div";
import s from "./button.module.scss";
import sNone from "../none.module.scss";
import sOutset from "../outset.module.scss";

interface ButtonStyle {
	main: string;
	selected: string;
	highlight: string;
	outline: string;
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
	const style = props.style ?? Button.style.none;
	const size = props.size ?? Button.size.medium;
	const classes = [s.button, size, style.main, style.outline];
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
	outset: { ...sOutset, outline: outline.outer } as ButtonStyle,
	none: { ...sNone, outline: outline.inner } as ButtonStyle,
};

Button.size = {
	medium: s.medium as ButtonSize,
	small: s.small as ButtonSize,
};
