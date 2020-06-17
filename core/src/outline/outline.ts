import s from "./outline.module.scss";

type OutlineStyle = string;

export const outline = {
	inner: s.inner as OutlineStyle,
	outer: s.outer as OutlineStyle,
};
