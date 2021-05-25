import { background } from "../background/background";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import s from "./pane.module.css";

interface Props {
	children: React.ReactNode;
	noPadding?: boolean;
	fullHeight?: boolean;
	contentWidth?: boolean;
}

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
