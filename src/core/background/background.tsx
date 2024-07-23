import { ReactNode } from "react";
import s from "./background.module.css";

export const background = {
	strong: s.strong as string,
	weak: s.weak as string,
};

interface Props {
	color: keyof typeof background;
	children: ReactNode;
}

export const Background = ({ color, children }: Props): JSX.Element => (
	<div className={s[color]}>{children}</div>
);
