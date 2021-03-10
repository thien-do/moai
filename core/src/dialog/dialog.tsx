import { DialogPane, DialogMain, DialogProps } from "./main/main";
import { DialogBody, DialogHeader, DialogFooter, DialogTitle } from "./sub/sub";
import { dialogAlert } from "./native/alert";
import { dialogConfirm } from "./native/confirm";
import { dialogPrompt } from "./native/prompt";

/**
 * The component that many incorrectly call "Modal".
 *
 * Usage notes:
 *
 * - https://www.nngroup.com/articles/modal-nonmodal-dialog/
 */
export const Dialog = (props: DialogProps): JSX.Element => (
	// DialogMain is extracted to its own folder to avoid circular dependencies
	<DialogMain {...props} />
);

// Layout components
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
Dialog.Title = DialogTitle;

// Utilities
Dialog.alert = dialogAlert;
Dialog.confirm = dialogConfirm;
Dialog.prompt = dialogPrompt;

// Not sure if we should expose these actually
Dialog.Header = DialogHeader;
Dialog.Pane = DialogPane;
