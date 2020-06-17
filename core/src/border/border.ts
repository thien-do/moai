import s from "./border.module.scss";

type BorderColor = string;

export const borderColor = {
	strong: s.strong as BorderColor,
	weak: s.weak as BorderColor,
};
