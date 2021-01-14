import s from "./border.module.css";

export const borderColor = {
	strong: s.strong,
	weak: s.weak,
	blueStrong: s.blueStrong,
	blueWeak: s.blueWeak,
};

interface Props {
	color: keyof typeof borderColor;
}

export const Border = (props: Props) => (
	<hr className={`${s.border} ${borderColor[props.color]}`} />
);
