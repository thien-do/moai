import * as React from "react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Input } from "../input/input";
import { TextArea } from "../text-area/text-area";
import { Dialog } from "./dialog";
import { DialogMessageChildren, DialogMessage } from "./utils/message";
import { renderDialog } from "./utils/render";

interface Props {
	children: DialogMessageChildren;
	initialText?: string;
	rows?: number;
	onOk: (text: string) => void;
	onCancel: () => void;
	width: "fixed" | number;
}

export const PromptDialog = (props: Props) => {
	const [text, setText] = React.useState<string>(props.initialText ?? "");
	const base = {
		value: text,
		setValue: setText,
		autoFocus: true,
		autoSelect: true,
	};
	const width = props.width === "fixed" ? "auto" : props.width;
	return (
		<Dialog
			onEsc={props.onCancel}
			width={typeof props.width === "number" ? "content" : "fixed"}
		>
			<form onSubmit={() => props.onOk(text)}>
				<Dialog.Body>
					<DialogMessage children={props.children} />
					<DivPx size={16} />
					<div style={{ width }}>
						{props.rows !== 1 ? (
							<TextArea {...base} rows={props.rows} />
						) : (
							<Input {...base} />
						)}
					</div>
				</Dialog.Body>
				<Dialog.Footer>
					<Button onClick={props.onCancel} children="Cancel" />
					<DivPx size={16} />
					<Button type="submit" highlight children="OK" />
				</Dialog.Footer>
			</form>
		</Dialog>
	);
};

type Options = Pick<Props, "width" | "rows">;

/**
 * Moai's alternative to window.prompt
 * See https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
 */
export const dialogPrompt = (
	message: DialogMessageChildren,
	initialText?: string,
	options?: Options
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
				width={options?.width ?? "fixed"}
				rows={options?.rows ?? 1}
				initialText={initialText}
			/>
		));
	});
};
