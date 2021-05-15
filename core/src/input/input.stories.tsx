import { useState } from "react";
import { Button } from "../button/button";
import { Dialog } from "../dialog/dialog";
import { DivPx } from "../div/div";
import { FormField } from "../form/field";
import { _Story } from "../_story";
import { Input } from "./input";
import { HiPhone } from "react-icons/hi";

export default {
	title: "Components/Input",
	component: Input,
	argTypes: {
		type: _Story.arg(
			["text", "number", "email", "password", "url", "color"],
			"Visual"
		),
		style: _Story.arg(Input.styles, "Visual"),
		size: _Story.arg(Input.sizes, "Visual"),
		placeholder: _Story.arg(null, "Visual"),
		icon: _Story.arg(null, "Visual"),
		defaultValue: _Story.arg(null, "Uncontrolled"),
		value: _Story.arg(null, "Controlled"),
		setValue: _Story.arg(null, "Controlled"),
		id: _Story.arg(null, "Attributes"),
		name: _Story.arg("string", "Attributes"),
		list: _Story.arg(null, "Attributes"),
		maxLength: _Story.arg("number", "Attributes"),
		disabled: _Story.arg("boolean", "Attributes"),
		required: _Story.arg("boolean", "Attributes"),
		readOnly: _Story.arg("boolean", "Attributes"),
		autoFocus: _Story.arg(null, "Attributes"),
		"aria-label": _Story.arg(null, "Attributes"),
		"aria-labelledby": _Story.arg(null, "Attributes"),

		onBlur: _Story.arg(null, "Events"),
		onFocus: _Story.arg(null, "Events"),
		onKeyPress: _Story.arg(null, "Events"),
		onKeyUp: _Story.arg(null, "Events"),
		onKeyDown: _Story.arg(null, "Events"),
		onClick: _Story.arg(null, "Events"),
		onChange: _Story.arg(null, "Events"),
	},
	parameters: { docs: { page: _Story.page.stickyPrimary } },
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
			style={Input.styles[props.style]}
			size={Input.sizes[props.size]}
			maxLength={props.maxLength}
			disabled={props.disabled}
			readOnly={props.readOnly}
			aria-label="Default input"
		/>
	);
};

_Story.fixPrimary(Primary);

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

_Story.desc(Value)(`
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

_Story.desc(Icon)(`
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

_Story.desc(Form)(`
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

_Story.desc(Events_Handling)(`
Input accepts many events props like \`onKeyDown\`, \`onFocus\`,... which is 
fired whenever the relate to event was triggered.

Let's see an example below. Moai not using \`onChange\` to update value state.
\`onChange\` event exists only for compatibility with 3rd-party libraries 
(those that passing props to a custom rendered component).

Moai prefer use \`setValue\` prop to handling input change value event.
`);
