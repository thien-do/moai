import s from "./border.module.css";

export const border = {
	// Radius
	radius: s.radius,
	// Size
	px1: s.px1,
	// Grayscale
	strong: s.strong,
	weak: s.weak,
};

interface Props {
	color: keyof typeof border;
}

export const Border = (props: Props): JSX.Element => (
	<hr className={[border.px1, s.borderFull, border[props.color]].join(" ")} />
);
