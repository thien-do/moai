import { background } from "../background/background";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import s from "./pane.module.css";

interface Props {
	/**
	 * The content inside the pane.
	 */
	children: React.ReactNode;
	/**
	 * If true, the default padding is removed.
	 */
	noPadding?: boolean;
	/**
	 * If true, the pane's height is 100% of its container's height.
	 */
	fullHeight?: boolean;
	/**
	 * If true, the pane's width is [intrinsic][1], which means it depends
	 * on the pane's content.
	 * 
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content
	 */
	contentWidth?: boolean;
}

/**
 * A pane is a container that holds other elements. Panes are perfect for
 * displaying notes, dropdown menus, pop-up notifications, and other
 * information that need to be emphasized.
 */
export const Pane = (props: Props): JSX.Element => (
	<div
		className={[
			Pane.styles.outset,
			props.noPadding ? "" : s.padding,
			props.contentWidth ? s.contentWidth : "",
			props.fullHeight ? s.fullHeight : "",
		].join(" ")}
		children={props.children}
	/>
);

Pane.styles = {
	outset: [border.px1, background.strong, border.strong, shadow.boxWeak].join(
		" "
	),
};
