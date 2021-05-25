import { border } from "../border/border";
import { CategoryColor, categoryColors } from "../category/category";
import s from "./tag.module.css";

export interface TagType {
	cls: string;
}

interface Props {
	/**
	 * The information that tag holds.
	 */
	children: string;
	/**
	 * The color and background color of tag.
	 */
	color: CategoryColor;
}

/**
 * Users use a tag to provide additional information about something. That is why tags are used with another component. Thus, tags are supported with different style of tag base on the color that user provide.
 */
export const Tag = ({ children, color }: Props): JSX.Element => (
	<span
		className={[border.radius, s.container, color].join(" ")}
		children={children}
	/>
);

Tag.colors = categoryColors;
