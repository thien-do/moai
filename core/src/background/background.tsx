import React from "react";

import { validateStyles } from "../utils/utils";
import s from "./background.module.css";

const { primary, secondary, inverse } = s;

export const background = { primary, secondary, inverse };

validateStyles(background);

interface Props {
	color: "primary" | "secondary" | "inverse";
	children: React.ReactNode;
}

export const Background: React.FC<Props> = ({ color, children }) => (
	<div className={s[color]}>{children}</div>
);
