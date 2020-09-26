import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../../button/button";
import { Dialog } from "../dialog";
import { DialogMessage, DialogMessageC } from "../message/message";
import s from "./alert.module.scss";

interface Props {
	children: DialogMessage;
	onOk: () => void;
}

export const AlertDialog = (props: Props) => (
	<Dialog onEsc={props.onOk}>
		<div className={s.container}>
			<Dialog.Body>
				<DialogMessageC children={props.children} />
			</Dialog.Body>
			<Dialog.Footer>
				<Button
					autoFocus
					highlight
					onClick={props.onOk}
					children="OK"
				/>
			</Dialog.Footer>
		</div>
	</Dialog>
);

const container = document.createElement("div");
document.body.appendChild(container);

const unmount = () => {
	const result = ReactDOM.unmountComponentAtNode(container);
	if (result === false) throw Error("No alert to unmount");
};

export const showAlert = (message: DialogMessage): Promise<void> => {
	return new Promise((resolve) => {
		const dialog = (
			<AlertDialog
				onOk={() => {
					resolve();
					unmount();
				}}
				children={message}
			/>
		);
		ReactDOM.render(dialog, container);
	});
};
