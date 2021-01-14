import * as React from "react";
import s from "./pane.module.css";
import { pane } from "./style";

interface Props {
	children: React.ReactNode;
	noPadding?: boolean;
}

export const Pane = ({ children, noPadding }: Props): JSX.Element => (
	<div
		className={[pane.outset, noPadding ? "" : s.padding].join(" ")}
		children={children}
	/>
);
