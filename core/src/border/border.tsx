import s from "./border.module.css";

export const border = {
	// Size
	px1: s.px1,
	// Grayscale
	strong: s.strong,
	weak: s.weak,
	// Colored
	blueStrong: s.blueStrong,
	blueWeak: s.blueWeak,
};

interface Props {
	color: keyof typeof border;
}

export const Border = (props: Props) => (
	<hr className={[border.px1, s.borderFull, border[props.color]].join(" ")} />
);
