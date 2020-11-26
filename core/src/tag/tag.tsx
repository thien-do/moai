import React from "react";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import s from "./tag.module.css";

interface Props {
	children: string;
}

export const Tag = ({ children }: Props): JSX.Element => (
	<span
		className={[s.container, background.secondary, borderColor.weak].join(
			" "
		)}
		children={children}
	/>
);
