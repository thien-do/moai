import { border } from "../border/border";
import { CategoryColor, categoryColors } from "../category/category";
import s from "./tag.module.css";

export interface TagType {
	cls: string;
}

interface Props {
	/**
	 * Label of the tag
	 */
	children: string;
	/**
	 * Color of the tag (use one from Tag.colors)
	 */
	color: CategoryColor;
}

/**
 * Users use tags to provide additional information. You can also use it for category contents by using Tag.colors.
 */
export const Tag = ({ children, color }: Props): JSX.Element => (
	<span
		className={[border.radius, s.container, color].join(" ")}
		children={children}
	/>
);

Tag.colors = categoryColors;
