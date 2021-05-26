import { background } from "../background/background";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import s from "./pane.module.css";

interface Props {
	/**
	 * The content inside pane.
	 */
	children: React.ReactNode;
	/**
	 * Define if pane padding is removed.
	 */
	noPadding?: boolean;
	/**
	 * Define if pane height is inherited from parents component.
	 */
	fullHeight?: boolean;
}

/**
 * Pane is a container that holds other component. Pane is perfect for
 * displaying notes, dropdown menu, pop up notifications and other information
 * that need to be emphasized.
 */
export const Pane = (props: Props): JSX.Element => (
	<div
		className={[
			Pane.styles.outset,
			props.noPadding ? "" : s.padding,
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
