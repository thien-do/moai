import * as React from "react";
import { background } from "../../background/background";
import { border } from "../../border/border";
import { shadow } from "../../shadow/shadow";
import s from "./main.module.css";

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

export const DialogMain = (props: DialogProps): JSX.Element => (
	<div
		className={[s.container, s.fill].join(" ")}
		onKeyDown={(event) => {
			if (event.key === "Escape") props.onEsc?.();
		}}
		role="dialog"
	>
		{/* Separate so we can use opacity instead of alpha channel */}
		<div
			className={[background.weak, s.backdrop, s.fill].join(" ")}
			onClick={props.onEsc}
			data-testid="dialogBackdrop"
		/>
		<DialogPane {...props} />
	</div>
);
