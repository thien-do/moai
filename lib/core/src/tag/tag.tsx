import { border } from "../border/border";
import { CategoryColor, categoryColors } from "../category/category";
import s from "./tag.module.css";

export interface TagType {
	cls: string;
}

interface Props {
	/**
	 * Label of the tag.
	 */
	children: string;
	/**
	 * Color of the tag. Use one from `Tag.colors`.
	 */
	color: CategoryColor;
}

/**
 * Tags displays small amount of color-categorized data, such as statuses and
 * types. They are always rendered as [inline][1] `<span>` elements.
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
 */
export const Tag = ({ children, color }: Props): JSX.Element => (
	<span
		className={[border.radius, s.container, color].join(" ")}
		children={children}
	/>
);

Tag.colors = categoryColors;
