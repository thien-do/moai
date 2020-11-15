import * as React from "react";
import { Button } from "../button/button";
import { Dialog, DialogProps } from "./dialog";
import { DialogMessage, DialogMessageC } from "./utils/message";
import { renderDialog } from "./utils/render";

interface Props {
	children: DialogMessage;
	onOk: () => void;
	width: DialogProps["width"];
}

export const AlertDialog = (props: Props) => (
	<Dialog onEsc={props.onOk} width={props.width}>
		<Dialog.Body>
			<DialogMessageC children={props.children} />
		</Dialog.Body>
		<Dialog.Footer>
			<Button autoFocus highlight onClick={props.onOk} children="OK" />
		</Dialog.Footer>
	</Dialog>
);

/**
 * Moai's alternative to window.alert
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */
export const alert = (
	message: DialogMessage,
	width: DialogProps["width"] = "fixed"
): Promise<boolean> => {
	return new Promise((resolve) => {
		renderDialog((unmount) => (
			<AlertDialog
				onOk={() => {
					resolve();
					unmount();
				}}
				children={message}
				width={width}
			/>
		));
	});
};
