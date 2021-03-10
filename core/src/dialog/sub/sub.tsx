import { border } from "../../border/border";
import { DivPx } from "../../div/div";
import { text } from "../../text/text";
import s from "./sub.module.css";

// This must be exported in order for Dialog to re-export Body, Header and
// Footer under its name (i.e. Dialog.Body = DialogBody)
export interface DialogSubProps {
	children: React.ReactNode;
}

export const DialogBody = (props: DialogSubProps): JSX.Element => (
	<div className={s.body} children={props.children} />
);

export const DialogHeader = (props: DialogSubProps): JSX.Element => (
	<div
		className={[s.header, border.weak].join(" ")}
		children={props.children}
	/>
);

export const DialogTitle = (props: DialogSubProps): JSX.Element => (
	<>
		<div
			className={[text.big, text.strong].join(" ")}
			children={props.children}
		/>
		<DivPx size={16} />
	</>
);

export const DialogFooter = (props: DialogSubProps): JSX.Element => (
	<div className={s.footer} children={props.children} />
);
