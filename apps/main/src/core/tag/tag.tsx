import { ForwardedRef } from "react";
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
  /**
   * Size of the tag. Use one from `Tag.sizes`.
   */
  size?: string;
  /**
   * A [reference][1] to the underlying `span` element. Usually useful in
   * uncontrolled mode.
   *
   * [1]: https://reactjs.org/docs/forwarding-refs.html
   */
  forwardedRef?: ForwardedRef<HTMLSpanElement>;
}

/**
 * Tags displays small amount of color-categorized data, such as statuses and
 * types. They are always rendered as [inline][1] `<span>` elements.
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
 */
export const Tag = ({
  children,
  color,
  size,
  forwardedRef,
}: Props): JSX.Element => (
  <span
    className={[border.radius, s.container, color, size].join(" ")}
    children={children}
    ref={forwardedRef}
  />
);

Tag.colors = categoryColors;
Tag.sizes = {
  medium: s.mediumTag,
  small: s.smallTag,
};
