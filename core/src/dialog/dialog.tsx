import * as React from "react";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import { DivPx } from "../div/div";
import s from "./dialog.module.scss";

interface ChildrenProps {
	children: React.ReactNode;
}

interface Props extends ChildrenProps {
	onEsc?: () => void;
}

export const Dialog = (props: Props) => (
	<div
		className={[s.container, s.fill].join(" ")}
		onKeyDown={(event) => {
			if (event.key === "Escape") props.onEsc?.();
		}}
	>
		{/* Separate so we can use opacity instead of alpha channel */}
		<div
			className={[background.secondary, s.backdrop, s.fill].join(" ")}
			onClick={props.onEsc}
		/>
		<div
			className={[
				background.primary,
				borderColor.strong,
				boxShadow.strong,
				s.dialog,
			].join(" ")}
			children={props.children}
		/>
	</div>
);

Dialog.Body = (props: ChildrenProps) => (
	<div className={s.body} children={props.children} />
);

Dialog.Footer = (props: ChildrenProps) => (
	<div className={s.footer}>
		<div className={s.footerBody} children={props.children} />
		<DivPx size={16} />
	</div>
);
