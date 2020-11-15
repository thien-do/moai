import * as React from "react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Input } from "../input/input";
import { TextArea } from "../text-area/text-area";
import { Dialog, DialogProps } from "./dialog";
import { DialogMessage, DialogMessageC } from "./utils/message";
import { renderDialog } from "./utils/render";

interface Props {
	children: DialogMessage;
	initialText?: string;
	useTextArea?: boolean;
	onOk: (text: string) => void;
	onCancel: () => void;
	width: DialogProps["width"];
}

export const PromptDialog = (props: Props) => {
	const [text, setText] = React.useState<string>(props.initialText ?? "");
	return (
		<Dialog onEsc={props.onCancel} width={props.width}>
			<Dialog.Body>
				<DialogMessageC children={props.children} />
				<DivPx size={16} />
				{props.useTextArea ? (
					<TextArea
						autoFocus
						autoSelect
						value={text}
						setValue={setText}
						rows={3}
					/>
				) : (
					<Input
						autoFocus
						autoSelect
						value={text}
						setValue={setText}
					/>
				)}
			</Dialog.Body>
			<Dialog.Footer>
				<Button onClick={props.onCancel} children="Cancel" />
				<DivPx size={16} />
				<Button
					highlight
					onClick={() => props.onOk(text)}
					children="OK"
				/>
			</Dialog.Footer>
		</Dialog>
	);
};

interface Options {
	width?: DialogProps["width"];
	useTextArea?: boolean;
}

/**
 * Moai's alternative to window.prompt
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
 */
export const prompt = (
	message: DialogMessage,
	initialText?: string,
	options?: Options
): Promise<boolean> => {
	return new Promise((resolve) => {
		renderDialog((unmount) => (
			<PromptDialog
				onCancel={() => {
					resolve(false);
					unmount();
				}}
				onOk={() => {
					resolve(true);
					unmount();
				}}
				children={message}
				width={options?.width ?? "fixed"}
				useTextArea={options?.useTextArea}
				initialText={initialText}
			/>
		));
	});
};
