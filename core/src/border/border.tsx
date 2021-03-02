import s from "./border.module.css";

export const border = {
	// Radius
	radius: s.radius,
	// Size
	px1: s.px1,
	// Grayscale
	strong: s.strong,
	weak: s.weak,
	// Colored
	highlightStrong: s.highlightStrong,
	highlightWeak: s.highlightWeak,
};

interface Props {
	color: keyof typeof border;
}

export const Border = (props: Props) => (
	<hr className={[border.px1, s.borderFull, border[props.color]].join(" ")} />
);
