import { ReactElement } from "react";
import { APIData, APIReference } from "../../utils/api/api";

export function TextareaAPI(): ReactElement {
	return <APIReference data={api} />;
}

const api: APIData[] = [
	{
		prop: "style",
		description: {
			type: "InputStyle",
			description: (
				<>
					Style of the text box. Choose one from{" "}
					<code>TextArea.styles</code>
					for example: <code>TextArea.styles.flat.</code> Same default
					as the &quot;Input&quot; component.
				</>
			),
		},
	},
	{
		prop: "size",
		description: {
			type: "TextAreaSize",
			description: (
				<>
					Size of the text box. Choose one from{" "}
					<code>TextArea.sizes</code> for example:{" "}
					<code>TextArea.size.medium</code>. Same default as the
					&quot;Input&quot; component.
				</>
			),
		},
	},
	{
		prop: "disabled",
		description: {
			type: "boolean",
			description: "",
		},
	},
	{
		prop: "readOnly",
		description: {
			type: "boolean",
			description: "",
		},
	},
	{
		prop: "defaultValue",
		description: {
			type: "string",
			description: "Initial value of the input in uncontrolled mode.",
		},
	},
	{
		prop: "value",
		description: {
			type: "string",
			description: "Value of the input in controlled mode",
		},
	},
	{
		prop: "setValue",
		description: {
			type: "((value: string) => void)",
			description: "Handler to set the value in controlled mode",
		},
	},
	{
		prop: "onChange",
		description: {
			type: "ChangeEventHandler<HTMLTextAreaElement>",
			description: (
				<>
					The{" "}
					<a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange">
						HTML `onchange`
					</a>{" "}
					event handler. Note that you should not need to use
					onChange! This exists only for compatibility with 3rd-party
					libraries (those that passing props to a custom rendered
					component). You should use
					<code>setValue</code> most of the time.
				</>
			),
		},
	},
];
