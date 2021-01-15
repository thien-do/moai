import { ReactNode } from "react";
import s from "./background.module.css";

export const background = {
	// Grayscale
	strong: s.strong as string,
	weak: s.weak as string,
	inverse: s.inverse as string,
	// Colored
	blueStrong: s.blueStrong as string,
	blueWeak: s.blueWeak as string,
	greenStrong: s.greenStrong as string,
	greenWeak: s.greenWeak as string,
	redStrong: s.redStrong as string,
	redWeak: s.redWeak as string,
};

interface Props {
	color: keyof typeof background;
	children: ReactNode;
}

export const Background = ({ color, children }: Props): JSX.Element => (
	<div className={s[color]}>{children}</div>
);
