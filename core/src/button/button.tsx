import React from "react";

import { Icon, IconPath, IconSize } from "../icon/icon";
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

type ButtonSize = {
	main: string;
	iconSize: IconSize;
};

interface VisualProps {
	selected: boolean;
	highlight: boolean;
	style: ButtonStyle;
	size: ButtonSize;
	isFullWidth: boolean;
}

const getClass = (props: VisualProps) => {
    const { highlight, selected, size, style, isFullWidth } = props;
	if (highlight === true && selected === true)
		throw Error("Button cannot have both highlight and selected (yet).");
	const classes = [s.button, size.main, style.main];
	if (isFullWidth) classes.push(s.fullWidth);
	if (selected) classes.push(style.selected);
	if (highlight) classes.push(style.highlight);
	return classes.join(" ");
};

interface Props extends VisualProps {
	onClick: () => void;
	children?: React.ReactNode;
	icon?: IconPath;
}

export const Button = ({ icon, children, onClick, ...style }: Props) => (
	<button onClick={onClick} className={getClass(style)}>
		{icon && (
			<span className={s.icon}>
				<Icon size={style.size.iconSize} path={icon} />
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
	medium: {
		main: s.medium,
		iconSize: 16,
	} as ButtonSize,
	small: {
		main: s.small,
		iconSize: 12,
	} as ButtonSize,
};

Button.defaultProps = {
	selected: false,
	highlight: false,
	style: Button.style.outset,
	size: Button.size.medium,
	isFullWidth: false,
};
