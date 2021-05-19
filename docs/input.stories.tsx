import { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { Button, Dialog, DivPx, FormField, Input } from "../core/src";
import { Utils } from "./utils";

export default {
	title: "Components/Input",
	component: Input,
	argTypes: {
		type: Utils.arg(
			["text", "number", "email", "password", "url", "color"],
			"Visual"
		),
		style: Utils.arg(Input.styles, "Visual"),
		size: Utils.arg(Input.sizes, "Visual"),
		placeholder: Utils.arg(null, "Visual"),
		icon: Utils.arg(null, "Visual"),
		defaultValue: Utils.arg(null, "Uncontrolled"),
		value: Utils.arg(null, "Controlled"),
		setValue: Utils.arg(null, "Controlled"),
		id: Utils.arg(null, "Attributes"),
		name: Utils.arg("string", "Attributes"),
		list: Utils.arg(null, "Attributes"),
		maxLength: Utils.arg("number", "Attributes"),
		disabled: Utils.arg("boolean", "Attributes"),
		required: Utils.arg("boolean", "Attributes"),
		readOnly: Utils.arg("boolean", "Attributes"),
		autoFocus: Utils.arg(null, "Attributes"),
		"aria-label": Utils.arg(null, "Attributes"),
		"aria-labelledby": Utils.arg(null, "Attributes"),

		onBlur: Utils.arg(null, "Events"),
		onFocus: Utils.arg(null, "Events"),
		onKeyPress: Utils.arg(null, "Events"),
		onKeyUp: Utils.arg(null, "Events"),
		onKeyDown: Utils.arg(null, "Events"),
		onClick: Utils.arg(null, "Events"),
		onChange: Utils.arg(null, "Events"),
	},
	parameters: { docs: { page: Utils.page.stickyPrimary } },
};

interface Props {
	type?: string;
	style?: string;
	size?: string;
	maxLength?: number;
	disabled?: boolean;
	readOnly?: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		<Input
			type={props.type}
			// eslint-disable-next-line
			style={(Input.styles as any)[props.style!]}
			// eslint-disable-next-line
			size={(Input.sizes as any)[props.size!]}
			maxLength={props.maxLength}
			disabled={props.disabled}
			readOnly={props.readOnly}
			aria-label="Default input"
		/>
	);
};

Utils.fixPrimary(Primary);

export const Value = (): JSX.Element => {
	const [name, setName] = useState<string>("moaijs");

	return (
		<div>
			<FormField
				label="Name (controlled)"
				useLabelTag={true}
				labelWidth={180}
			>
				<Input value={name} setValue={setName} />
			</FormField>
			<DivPx size={8} />
			<FormField
				label="Name (uncontrolled)"
				useLabelTag={true}
				labelWidth={180}
			>
				<Input defaultValue="moaijs" />
			</FormField>
		</div>
	);
};

Utils.desc(Value)(`
Input's \`value\` attribute is empty as default. But uncontrolled value can 
be provided by the \`defaultValue\` prop. Similar, controlled value can be 
provided using the \`value\` prop.
`);

export const Icon = (): JSX.Element => {
	return (
		<label>
			Phone number
			<DivPx size={4} />
			<Input icon={HiPhone} placeholder="(888) 000-9999" />
		</label>
	);
};

Utils.desc(Icon)(`
You can using Input with icon via the \`icon\` prop. Moai supports *any* 
SVG-based icons. See the [Icon guide][icon-guide] to learn more.

[icon-guide]: /docs/guides-icons--primary
`);

export const Form = (): JSX.Element => {
	const [text, setText] = useState("");
	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					Dialog.alert(`You entered: ${text}`);
				}}
			>
				<FormField label="Name" useLabelTag={true}>
					<Input setValue={setText} value={text} />
				</FormField>
				<DivPx size={8} />
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<Button
						type="submit"
						disabled={!text ? true : false}
						highlight
					>
						Submit
					</Button>
				</div>
			</form>
		</>
	);
};

Utils.desc(Form)(`
Simply example when using Input with form. For advanced, see [Form][form] section.

[form]: /docs/patterns-form--primary
`);

export const Events_Handling = (): JSX.Element => {
	const [text, setText] = useState<string>("");
	return (
		<div>
			<Input placeholder="Type something here..." setValue={setText} />
			<DivPx size={8} />
			Your input: {text || <code>null</code>}
		</div>
	);
};

Utils.desc(Events_Handling)(`
Input accepts many events props like \`onKeyDown\`, \`onFocus\`,... which is 
fired whenever the relate to event was triggered.

Let's see an example below. Moai not using \`onChange\` to update value state.
\`onChange\` event exists only for compatibility with 3rd-party libraries 
(those that passing props to a custom rendered component).

Moai prefer use \`setValue\` prop to handling input change value event.
`);
