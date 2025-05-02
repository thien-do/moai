import s from "./icon.module.css";
import { IconType } from "react-icons";

export type IconComponent = IconType;

export interface IconProps {
  /**
   * A functional component that returns the SVG icon to be display. Should
   * use [react-icons][1].
   *
   * [1]: http://react-icons.github.io/react-icons/
   */
  component: IconComponent;
  /**
   * Size of the icon, in pixels. Default to 16 pixels.
   */
  size?: number;
  /**
   * Whether the icon should be a [block or inline element][1]. This only
   * applies the correct CSS. The icon is always rendered as an SVG element.
   * Default to "block".
   *
   * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#inline_vs._block-level_elements_a_demonstration
   */
  display?: "block" | "inline";
}

// TODO: Fix the link [1] once the docs is ready
/**
 * Icons are a great tool to visualize and emphasize the content where you
 * want users' attention. Moai's Icon component supports any SVG icons, which
 * means you can use it with popular icon sets like [FontAwesome][2] and
 * [Material Icons][3], or even [your own icons][4].
 *
 * The Icon component is used to display icons on their own, where you can
 * control their sizes and colors. For using icons inside other components
 * (such as in buttons and inputs), see the [Icon Pattern][1] guide.
 *
 * [1]: /docs/patterns-icon--primary
 * [2]: https://fontawesome.com
 * [3]: https://fonts.google.com/icons
 * [4]: #advanced
 */
export const Icon = (props: IconProps): JSX.Element => {
  const size = props.size ?? 16;
  return props.component({
    // react-icons support "size" option but avoid that because we want to
    // support all generic components
    style: { width: size, height: size },
    className: props.display === "block" ? s.block : s.inline,
  });
};
