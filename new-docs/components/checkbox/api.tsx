import { ReactElement } from "react";
import { APIData, APIReference } from "../../utils/api/api";

export function CheckboxAPI(): ReactElement {
	return <APIReference data={api} />;
}

const api: APIData[] = [
	{
		prop: "checked",
		description: {
			type: "boolean",
			description: "Whether the checkbox is checked in controlled mode.",
		},
	},
	{
		prop: "setChecked",
		description: {
			type: "(checked: boolean) => void",
			description:
				"Callback to set the checked state in controlled mode.",
		},
	},
	{
		prop: "indeterminate",
		description: {
			type: "boolean",
			description: (
				<>
					Define the{" "}
					<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate">
						indeterminate
					</a>{" "}
					state of the checkbox. Can only be used in controlled mode.
				</>
			),
		},
	},
	{
		prop: "defaultChecked",
		description: {
			type: "boolean",
			description:
				"The default checked state of checkbox in uncontrolled mode.",
		},
	},
	{
		prop: "forwardedRef",
		description: {
			type: "React.ForwardedRef<HTMLInputElement>",
			description: (
				<>
					<a href="https://reactjs.org/docs/forwarding-refs.html">
						Reference
					</a>{" "}
					to the HTML `input` element. This is useful in uncontrolled
					mode.
				</>
			),
		},
	},
	{
		prop: "children",
		description: {
			type: "Exclude<React.ReactNode, null | false | undefined>",
			description: (
				<>
					The label of the checkbox. This accepts ReactNode so you can
					have custom markup. We intentionally exclude the falsy
					values here (e.g. &quot;null&quot;, &quot;false&quot;). To
					ensure good accessibility, always define a label for your
					checkbox, even if you don&lsquo;t want to display it (see
					the &quot;hideLabel&quot; prop).
				</>
			),
		},
		required: true,
	},
	{
		prop: "hideLabel",
		description: {
			type: "boolean",
			description: (
				<>
					Hide the label visually, but still leaving it accessible for
					screen readers. For sighted users, this displays just the
					box. For unsighted, it works like a normal checkbox. See the{" "}
					<a href="/docs/components-table--selectable-multiple">
						selectable
					</a>{" "}
					prop of the Table component for a real-life example.
				</>
			),
		},
	},
	{
		prop: "disabled",
		description: {
			type: "boolean",
			description: (
				<>
					The{" "}
					<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled">
						HTML `disabled`
					</a>{" "}
					attribute of the underlying input element. If set to `true`,
					this prevents users from interacting with the checkbox. *
				</>
			),
		},
	},
];
