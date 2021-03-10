import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { Dialog, DialogProps } from "../dialog";
import { renderDialog } from "./native";

interface Props {
	children: React.ReactNode;
	onOk: () => void;
	onCancel: () => void;
	width?: DialogProps["width"];
}

export const ConfirmDialog = (props: Props) => (
	<Dialog onEsc={props.onCancel} width={props.width}>
		<Dialog.Body children={props.children} />
		<Dialog.Footer>
			<Button minWidth onClick={props.onCancel} children="Cancel" />
			<DivPx size={16} />
			<Button
				minWidth
				autoFocus
				highlight
				onClick={props.onOk}
				children="OK"
			/>
		</Dialog.Footer>
	</Dialog>
);

/**
 * Moai's alternative to window.confirm
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
 */
export const dialogConfirm = (
	message: React.ReactNode,
	options?: {
		width?: DialogProps["width"];
	}
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
				width={options?.width}
			/>
		));
	});
};
