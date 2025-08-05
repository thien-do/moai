import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import { Paragraph } from "../text/text";
import s from "./tooltip.module.css";

type Children = TippyProps["children"];
type Placement = TippyProps["placement"];

export interface TooltipProps {
  /**
   * The content inside the tooltip.
   */
  content: React.ReactNode;
  /**
   * The element that shows tooltip on hover
   */
  children: Children;
  /**
   * The preferred placement of the tooltip content, relative to the
   * `children` element. This is [Tippy.js' `placement`][1] option.
   *
   * [1]: https://atomiks.github.io/tippyjs/v6/all-props/#placement
   */
  placement?: Placement;
}

interface PaneProps {
  children: TooltipProps["content"];
  attrs?: Record<string, unknown>;
}

export const TooltipPane = (props: PaneProps): JSX.Element => (
  <div className="dark">
    <div
      className={[s.content, shadow.boxStrong, border.radius].join(" ")}
      tabIndex={-1}
      {...props.attrs}
    >
      {props.attrs && (
        <div data-popper-arrow className={s.arrowWrapper}>
          <div className={[s.arrow].join(" ")} />
        </div>
      )}
      <Paragraph children={props.children} />
    </div>
  </div>
);

/**
 * A tooltip displays additional information about an element, such as the
 * full text of an abbreviation or the meaning of an icon. It is shown when
 * users hover on the element or focus on it via keyboard. Moai's Tooltip is
 * built on top of [Tippy.js][1].
 *
 * [1]: https://atomiks.github.io/tippyjs/
 */
export const Tooltip = (props: TooltipProps): JSX.Element => (
  <Tippy
    children={props.children}
    placement={props.placement ?? "top"}
    render={(attrs) => <TooltipPane children={props.content} attrs={attrs} />}
  />
);
