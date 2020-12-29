import * as React from "react";
import { background } from "../background/background";
import { Border, borderColor } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import { DivPx } from "../div/div";
import s from "./dialog.module.css";
import { DialogMessage } from "./utils/message";

interface ChildrenProps {
	children: React.ReactNode;
}

export interface DialogProps extends ChildrenProps {
	onEsc?: () => void;
	width?: "fixed" | "content";
}

export const DialogPane = (props: DialogProps) => (
	<div
		className={[
			background.primary,
			borderColor.strong,
			boxShadow.strong,
			s.dialog,
			props.width === "fixed" ? s.widthFixed : s.widthAuto,
		].join(" ")}
		children={props.children}
	/>
);

export const Dialog = (props: DialogProps) => (
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
		<DialogPane {...props} />
	</div>
);

Dialog.defaultProps = {
	width: "fixed",
};

Dialog.Header = (props: ChildrenProps) => (
	<>
		<div className={s.header} children={props.children} />
		<Border color="weak" />
	</>
);

Dialog.Body = (props: ChildrenProps) => (
	<div className={s.body} children={props.children} />
);

Dialog.Footer = (props: ChildrenProps) => (
	<div className={s.footer}>
		<div className={s.footerBody} children={props.children} />
		<DivPx size={24} />
	</div>
);

Dialog.Message = DialogMessage;
