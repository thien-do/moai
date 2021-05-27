import { ReactNode } from "react";
import s from "./background.module.css";

export const background = {
	// Grayscale
	strong: s.strong as string,
	weak: s.weak as string,
	inverse: s.inverse as string,
	// Colored
	highlight: s.highlight as string,
	highlightStrong: s.highlightStrong as string,
	highlightWeak: s.highlightWeak as string,
	successStrong: s.successStrong as string,
	successWeak: s.successWeak as string,
	failureStrong: s.failureStrong as string,
	failureWeak: s.failureWeak as string,
};

interface Props {
	color: keyof typeof background;
	children: ReactNode;
}

export const Background = ({ color, children }: Props): JSX.Element => (
	<div className={s[color]}>{children}</div>
);
