import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { Dialog } from "../dialog";
import { DialogMessage, DialogMessageC } from "../message/message";
import s from "./confirm.module.scss";

interface Props {
	children: DialogMessage;
	onOk: () => void;
	onCancel: () => void;
}

export const ConfirmDialog = (props: Props) => (
	<Dialog onEsc={props.onCancel}>
		<div className={s.container}>
			<Dialog.Body>
				<DialogMessageC children={props.children} />
			</Dialog.Body>
			<Dialog.Footer>
				<Button onClick={props.onCancel} children="Cancel" />
				<DivPx size={16} />
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
	if (result === false) throw Error("No confirm to unmount");
};

export const showConfirm = (message: DialogMessage): Promise<boolean> => {
	return new Promise((resolve) => {
		const dialog = (
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
			/>
		);
		ReactDOM.render(dialog, container);
	});
};
