import s from "./pane.module.css";
import { paneStyle } from "./style";

interface Props {
	children: React.ReactNode;
	noPadding?: boolean;
	fullHeight?: boolean;
}

export { paneStyle };

export const Pane = (props: Props): JSX.Element => (
	<div
		className={[
			paneStyle.outset,
			props.noPadding ? "" : s.padding,
			props.fullHeight ? s.fullHeight : "",
		].join(" ")}
		children={props.children}
	/>
);
