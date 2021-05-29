import { Meta } from "@storybook/react";
import * as Fm from "formik";
import { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { Button, Dialog, DivPx, Input } from "../../../core/src";
import { GalleryInput1 } from "../../../gallery/src/input-1";
import { GalleryInput2 } from "../../../gallery/src/input-2";
import { Utils } from ".../utils/utils";

const meta: Meta = {
	title: "Components/Input",
	component: Input,
	argTypes: {
		type: Utils.arg(
			["text", "number", "email", "password", "url", "color"],
			"Visual"
		),
		style: Utils.arg(Input.styles, "Visual"),
		size: Utils.arg(Input.sizes, "Visual"),
		placeholder: Utils.arg("string", "Visual"),
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

Utils.page.component(meta, {
	primary: "sticky",
	shots: [<GalleryInput1 key="1" />, <GalleryInput2 key="2" />],
});

export default meta;

interface Props {
	type?: string;
	style?: string;
	size?: string;
	maxLength?: number;
	disabled?: boolean;
	readOnly?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<div style={{ width: 200 }}>
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
	</div>
);

export const Basic = (): JSX.Element => {
	const [text, setText] = useState<string>("Hello");
	return (
		<div style={{ width: 200 }}>
			<label htmlFor="basic-input">Basic example</label>
			<Input id="basic-input" value={text} setValue={setText} />
		</div>
	);
};

Utils.story(Basic, { desc: `
Input is a [controlled][1] component. You should have a [state][2] to store
the text value, and give its control to an Input via its \`value\` and
\`setValue\` props. At the moment, these props work with \`string\` values
only.

To have good accessibility, ensure that your Inputs have their matching labels.
You can do it in many ways: wrap the Input inside a \`label\`, or explicitly
[link][3] it to one (like in the example below), or via the \`aria-label\` and
\`aria-labelledby\` props.

Note that Moai's Inputs don't have the [confusing][4] default width. Instead,
Inputs always fill 100% of their container width. This means you should control
the width of an Input via its container.

[1]: https://reactjs.org/docs/forms.html#controlled-components
[2]: https://reactjs.org/docs/hooks-state.html
[3]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
[4]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-size
`});

export const Suggestion = (): JSX.Element => (
	<div style={{ width: 200 }}>
		<Input
			aria-label="suggestion-input"
			list={{ id: "suggestion-list", values: ["red", "green", "blue"] }}
		/>
	</div>
);

Utils.story(Suggestion, { desc: `
Inputs follow the [standard approach][1] to support suggestion. You should
define your suggestion as a \`datalist\` element, then give its \`id\` to an
Input via the \`list\` prop.

As a convenient shortcut, you can also define your suggestion directly via the
\`list\` prop. You'll still need an explicit \`id\` for the list:

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
`});

export const Form = (): JSX.Element => (
	// "Fm" is the Formik's namespace
	<Fm.Formik
		initialValues={{ email: "" }}
		onSubmit={(values) => Dialog.alert(values.email)}
	>
		<Fm.Form style={{ width: 200 }}>
			<label htmlFor="form-email">Email</label>
			<Fm.Field id="form-email" type="email" name="email" as={Input} />
			<DivPx size={8} />
			<Button type="submit" highlight children="Submit" />
		</Fm.Form>
	</Fm.Formik>
);

Utils.story(Form, { desc: `
Inputs support both [controlled][1] and [uncontrolled][2] usages, making it
easy to use them with form builders like [Formik][3] and [React Hook Form][4],
right out of the box. See our [Form guide][5] to learn more.

[1]: https://reactjs.org/docs/forms.html#controlled-components
[2]: https://reactjs.org/docs/uncontrolled-components.html
[3]: https://formik.org
[4]: https://react-hook-form.com
[5]: /docs/guides-icons--primary
`});

export const Icon = (): JSX.Element => (
	// The icon is imported from the "react-icons" external library, like
	// import { HiPhone } from "react-icons/hi";
	<div style={{ width: 200 }}>
		<Input
			icon={HiPhone}
			placeholder="(888) 000-9999"
			aria-label="Enter phone"
		/>
	</div>
);

Utils.story(Icon, { desc: `
Inputs can have icons defined via the \`icon\` prop. This follows our [Icon
standard][1], which supports all SVG icons. See the [Icon guide][1] to learn
more.

[1]: /docs/guides-icons--primary
`});
