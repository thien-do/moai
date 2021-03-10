import * as React from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import { dialogAlert } from "./native/alert";
import { dialogConfirm } from "./native/confirm";
import { dialogPrompt } from "./native/prompt";
import s from "./dialog.module.css";
import { DialogBody, DialogHeader, DialogFooter, DialogTitle } from "./sub/sub";

export interface DialogProps {
	/**
	 * A callback that is invoked when user interaction should cause the dialog
	 * to close, such as clicking on the overlay or pressing the `esc` key.
	 *
	 * Since Dialog is a completely controlled component, it is the consumer's
	 * responsibility to decide what to handle here. They may choose to "close"
	 * the dialog by toggling the corresponding state, or choose to do nothing
	 * at all to prevent the users from closing the dialog.
	 */
	onEsc?: () => void;
	/**
	 * The method to decide width of the Dialog:
	 *
	 * - "content" will grow (or shrink) the Dialog width to fit its children
	 *
	 * - "fixed" will keep the Dialog width fixed, not depend on its content.
	 * This is the default value.
	 */
	width?: "fixed" | "content";
	/**
	 * The content to render inside the dialog. Note that out of the box there
	 * is no padding or any styles at all.
	 */
	children: React.ReactNode;
}

export const DialogPane = (props: DialogProps): JSX.Element => {
	const width = props.width === "content" ? s.widthAuto : s.widthFixed;
	const style = DialogPane.styles.outset;
	return (
		<div
			className={[s.dialog, style, width].join(" ")}
			children={props.children}
		/>
	);
};

DialogPane.styles = {
	outset: [
		border.px1,
		border.strong,
		shadow.boxStrong,
		background.strong,
	].join(" "),
};

/**
 * The component that many incorrectly call "Modal".
 * 
 * Usage notes: 
 * 
 * - https://www.nngroup.com/articles/modal-nonmodal-dialog/
 */
export const Dialog = (props: DialogProps): JSX.Element => (
	<div
		className={[s.container, s.fill].join(" ")}
		onKeyDown={(event) => {
			if (event.key === "Escape") props.onEsc?.();
		}}
	>
		{/* Separate so we can use opacity instead of alpha channel */}
		<div
			className={[background.weak, s.backdrop, s.fill].join(" ")}
			onClick={props.onEsc}
		/>
		<DialogPane {...props} />
	</div>
);

Dialog.Header = DialogHeader;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;
Dialog.Pane = DialogPane;
Dialog.alert = dialogAlert;
Dialog.confirm = dialogConfirm;
Dialog.prompt = dialogPrompt;
