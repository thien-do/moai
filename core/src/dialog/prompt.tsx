import * as React from "react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Input } from "../input/input";
import { TextArea } from "../text-area/text-area";
import { Dialog } from "./dialog";
import { DialogMessage, DialogMessageC } from "./utils/message";
import { renderDialog } from "./utils/render";

interface Props {
	children: DialogMessage;
	initialText?: string;
	rows?: number;
	onOk: (text: string) => void;
	onCancel: () => void;
	width: "fixed" | number;
}

export const PromptDialog = (props: Props) => {
	const [text, setText] = React.useState<string>(props.initialText ?? "");
	return (
		<Dialog
			onEsc={props.onCancel}
			width={typeof props.width === "number" ? "content" : "fixed"}
		>
			<Dialog.Body>
				<DialogMessageC children={props.children} />
				<DivPx size={16} />
				<div
					style={{
						width: props.width === "fixed" ? "auto" : props.width,
					}}
				>
					{props.rows !== 1 ? (
						<TextArea
							autoFocus
							autoSelect
							value={text}
							setValue={setText}
							rows={props.rows}
						/>
					) : (
						<Input
							autoFocus
							autoSelect
							value={text}
							setValue={setText}
						/>
					)}
				</div>
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

type Options = Pick<Props, "width" | "rows">;

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
				rows={options?.rows ?? 1}
				initialText={initialText}
			/>
		));
	});
};
