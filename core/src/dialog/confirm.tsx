import * as React from "react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Dialog, DialogProps } from "./dialog";
import { DialogMessage, DialogMessageC } from "./utils/message";
import { renderDialog } from "./utils/render";

interface Props {
	children: DialogMessage;
	onOk: () => void;
	onCancel: () => void;
	width: DialogProps["width"];
}

export const ConfirmDialog = (props: Props) => (
	<Dialog onEsc={props.onCancel} width={props.width}>
		<Dialog.Body>
			<DialogMessageC children={props.children} />
		</Dialog.Body>
		<Dialog.Footer>
			<Button onClick={props.onCancel} children="Cancel" />
			<DivPx size={16} />
			<Button autoFocus highlight onClick={props.onOk} children="OK" />
		</Dialog.Footer>
	</Dialog>
);

/**
 * Moai's alternative to window.confirm
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
 */
export const confirm = (
	message: DialogMessage,
	width: DialogProps["width"] = "fixed"
): Promise<boolean> => {
	return new Promise((resolve) => {
		renderDialog((unmount) => (
			<ConfirmDialog
				onCancel={() => {
					resolve(false);
					unmount();
				}}
				onOk={() => {
					resolve(true);
					unmount();
				}}
				children={message}
				width={width}
			/>
		));
	});
};
