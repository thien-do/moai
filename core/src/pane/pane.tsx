import * as React from "react";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import s from "./pane.module.css";

interface Props {
	children: React.ReactNode;
	noPadding?: boolean;
}

export const Pane = ({ children, noPadding }: Props): JSX.Element => (
	<div
		className={[
			s.container,
			background.primary,
			boxShadow.strong,
			borderColor.weak,
			noPadding ? "" : s.padding,
		].join(" ")}
		children={children}
	/>
);
