import s from "./pane.module.css";
import { pane } from "./style";

interface Props {
	children: React.ReactNode;
	noPadding?: boolean;
	fullHeight?: boolean;
}

export const Pane = (props: Props): JSX.Element => (
	<div
		className={[
			pane.outset,
			props.noPadding ? "" : s.padding,
			props.fullHeight ? s.fullHeight : "",
		].join(" ")}
		children={props.children}
	/>
);
