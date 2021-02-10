import { border } from "../border/border";
import { CategoryColor, categoryColors } from "../category/category";
import s from "./tag.module.css";

export interface TagType {
	cls: string;
}

interface Props {
	children: string;
	color: CategoryColor;
}

export const Tag = ({ children, color }: Props): JSX.Element => (
	<span
		className={[border.radius, s.container, color].join(" ")}
		children={children}
	/>
);

Tag.colors = categoryColors;
