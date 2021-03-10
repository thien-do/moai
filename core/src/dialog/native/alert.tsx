import { Button } from "../../button/button";
import { Dialog, DialogProps } from "../dialog";
import { renderDialog } from "./native";

interface Props {
	children: React.ReactNode;
	onOk: () => void;
	width?: DialogProps["width"];
}

export const AlertDialog = (props: Props) => (
	<Dialog onEsc={props.onOk} width={props.width}>
		<Dialog.Body children={props.children} />
		<Dialog.Footer>
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
 * Moai's alternative to window.alert
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
 */
export const dialogAlert = (
	message: React.ReactNode,
	options?: {
		width?: DialogProps["width"];
	}
): Promise<void> => {
	return new Promise((resolve) => {
		renderDialog((unmount) => (
			<AlertDialog
				onOk={() => {
					resolve();
					unmount();
				}}
				children={message}
				width={options?.width}
			/>
		));
	});
};
