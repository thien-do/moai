import React from "react";
import s from "./border.module.scss";

type BorderColorValue = string;

type BorderColorKey = "strong" | "weak";

if (s.strong === undefined || s.weak === undefined)
	throw Error("border color is not defined");

export const borderColor: { [key in BorderColorKey]: BorderColorValue } = {
	strong: s.strong,
	weak: s.weak,
};

interface Props {
	color: BorderColorKey;
}

export const Border = (props: Props) => (
	<hr className={`${s.border} ${borderColor[props.color]}`} />
);
