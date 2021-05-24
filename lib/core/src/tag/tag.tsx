import { border } from "../border/border";
import { CategoryColor, categoryColors } from "../category/category";
import s from "./tag.module.css";

export interface TagType {
	cls: string;
}

interface Props {
	/**
	 * Value that tag holds
	 */
	children: string;
	/**
	 * Color and background color of tag
	 */
	color: CategoryColor;
}

/**
 * Tag is used to provide additional information about something.
 */
export const Tag = ({ children, color }: Props): JSX.Element => (
	<span
		className={[border.radius, s.container, color].join(" ")}
		children={children}
	/>
);

Tag.colors = categoryColors;
