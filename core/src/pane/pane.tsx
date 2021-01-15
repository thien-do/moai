import { background } from "../background/background";
import { border } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import s from "./pane.module.css";

interface Props {
	children: React.ReactNode;
	noPadding?: boolean;
	fullHeight?: boolean;
}

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
	outset: [border.px1, background.strong, border.strong, boxShadow.weak].join(
		" "
	),
};
