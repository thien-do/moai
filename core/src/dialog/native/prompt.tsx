import { useState } from "react";
import { Button } from "../../button/button";
import { DivPx } from "../../div/div";
import { Input } from "../../input/input";
import { TextArea } from "../../text-area/text-area";
import { Dialog, DialogProps } from "../dialog";
import { renderDialog } from "./native";

interface Props {
	children: React.ReactNode;
	onOk: (text: string) => void;
	onCancel: () => void;
	// Options
	initialText?: string;
	rows?: number;
	width?: DialogProps["width"];
}

export const PromptDialog = (props: Props) => {
	const [text, setText] = useState<string>(props.initialText ?? "");
	const base = {
		value: text,
		setValue: setText,
		autoFocus: true,
		autoSelect: true,
	};
	const rows = props.rows ?? 1;
	return (
		<Dialog onEsc={props.onCancel} width={props.width}>
			<form onSubmit={() => props.onOk(text)}>
				<Dialog.Body>
					{props.children}
					<DivPx size={16} />
					{rows !== 1 ? (
						<TextArea {...base} rows={rows} />
					) : (
						<Input {...base} />
					)}
				</Dialog.Body>
				<Dialog.Footer>
					<Button minWidth onClick={props.onCancel}>
						Cancel
					</Button>
					<DivPx size={16} />
					<Button minWidth type="submit" highlight>
						OK
					</Button>
				</Dialog.Footer>
			</form>
		</Dialog>
	);
};

/**
 * Moai's alternative to window.prompt
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
 */
export const dialogPrompt = (
	message: React.ReactNode,
	initialText?: string,
	options?: {
		width?: Props["width"];
		rows?: Props["rows"];
	}
): Promise<string | null> => {
	return new Promise((resolve) => {
		renderDialog((unmount) => (
			<PromptDialog
				onCancel={() => {
					resolve(null);
					unmount();
				}}
				onOk={(text) => {
					resolve(text);
					unmount();
				}}
				children={message}
				width={options?.width}
				rows={options?.rows}
				initialText={initialText}
			/>
		));
	});
};
