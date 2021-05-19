import { Meta } from "@storybook/react/types-6-0";
import { GoPlus, GoSearch } from "react-icons/go";
import {
	Button,
	ButtonGroup,
	Dialog,
	DivPx,
	Input,
	Select,
} from "../core/src";
import { Utils } from "./utils";

export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		busy: Utils.arg("boolean", "Visual"),
		disabled: Utils.arg("boolean", "Visual"),
		fill: Utils.arg("boolean", "Visual"),
		highlight: Utils.arg("boolean", "Visual"),
		minWidth: Utils.arg("boolean", "Visual"),
		selected: Utils.arg("boolean", "Visual"),
		size: Utils.arg(Button.sizes, "Visual"),
		style: Utils.arg(Button.styles, "Visual"),

		children: Utils.arg(null, "Content"),
		icon: Utils.arg(null, "Content"),
		iconLabel: Utils.arg(null, "Content"),
		iconRight: Utils.arg(null, "Content"),

		type: Utils.arg(null, "Button"),
		forwardedRef: Utils.arg(null, "Button"),
		onClick: Utils.arg(null, "Button"),
		onFocus: Utils.arg(null, "Button"),
		onBlur: Utils.arg(null, "Button"),
		autoFocus: Utils.arg(null, "Button"),
		dangerouslySetTabIndex: Utils.arg(null, "Button"),

		target: Utils.arg(null, "Link"),
		href: Utils.arg(null, "Link"),
	},
	parameters: { docs: { page: Utils.page.stickyPrimary } },
} as Meta;

interface Props {
	style?: string;
	size?: string;
	fill?: boolean;
	highlight?: boolean;
	selected?: boolean;
	busy?: boolean;
	iconRight?: boolean;
	disabled?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<Button
		onClick={() => Dialog.alert("Hello")}
		children="Say Hi"
		// Storybook's Controls
		// eslint-disable-next-line
		style={(Button.styles as any)[props.style!]}
		// eslint-disable-next-line
		size={(Button.sizes as any)[props.size!]}
		fill={props.fill}
		highlight={props.highlight}
		selected={props.selected}
		busy={props.busy}
		iconRight={props.iconRight}
		disabled={props.disabled}
	/>
);

Utils.fixPrimary(Primary);

export const Icon = (): JSX.Element => (
	<div style={{ display: "flex" }}>
		<Button icon={GoPlus} children="Add" />
		<DivPx size={8} />

		{/* Icon on the right side */}
		<Button icon={GoPlus} children="Add" iconRight />
		<DivPx size={8} />

		{/* Require "iconLabel" because there is no "children" */}
		<Button icon={GoPlus} iconLabel="Add" />
	</div>
);

Utils.desc(Icon)(`
Button component can have an icon set via the \`icon\` prop. This supports
*any* SVG-based icons. See the [Icon guide][1] to learn more. The icon is on
the left side by default. Set the \`iconRight\` prop to move it to the right.

~~~tsx
import { GoPlus } from "react-icons/go";
import { Button } from "@moai/core";

<Button icon={GoPlus}>Add</Button>
~~~

It's [intentional][3] that [screen readers][2] would skip the icon and only
announce the label of a button (i.e. the text inside "children" prop). If your
button doesn't have a \`children\` defined (i.e. icon-only buttons), provide
the \`iconLabel\` prop so screen readers can announce it.

[1]: /docs/guides-icons--primary
[2]: https://en.wikipedia.org/wiki/Screen_reader
[3]: https://www.sarasoueidan.com/blog/accessible-icon-buttons/#icon-sitting-next-to-text

`);

export const Group = (): JSX.Element => {
	const input = <Input placeholder="Search" />;
	const button = <Button icon={GoSearch} iconLabel="Search" />;
	const select = <Select options={["Posts"].map(Select.toStringOption)} />;
	return (
		<div style={{ width: 320 }}>
			<ButtonGroup>
				{[
					{ fill: false, element: select },
					{ fill: true, element: input },
					{ fill: false, element: button },
				]}
			</ButtonGroup>
		</div>
	);
};

Utils.desc(Group)(`
Use \`ButtonGroup\` to group buttons with each other or with other input
components.
`);

export const Link = (): JSX.Element => (
	<Button
		highlight
		href="https://moaijs.com"
		target="_blank"
		children="Home"
	/>
);

Utils.desc(Link)(`
The Button component can render itself as either an [\`a\`][1] or a
[\`button\`][2] tag, depend on whether you provide the \`href\` prop or not.
This helps you have elements that look like buttons (e.g. attract attention)
but work like links (e.g. you can right-click and open it in new tab). This is
actually quite [common and expected][3].

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
[3]: https://www.nngroup.com/articles/command-links

`);
