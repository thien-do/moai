import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { _Story } from "../_story";
import { Button, Input } from "../";
import * as md from "react-icons/md";
import { DivPx } from "../div/div";
import { ButtonGroup } from "../button-group/button-group";

// This default export determines where your story goes in the story list
export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		style: _Story.arg(Button.styles),
		size: _Story.arg(Button.sizes),
		fill: _Story.arg("boolean"),
		selected: _Story.arg("boolean"),
		highlight: _Story.arg("boolean"),
		children: _Story.arg("text"),
		busy: _Story.arg("boolean"),
		reverse: _Story.arg("boolean"),
		disabled: _Story.arg("boolean"),
		minWidth: _Story.arg(null),
		target: _Story.arg(null),
		href: _Story.arg(null),
		icon: _Story.arg(null),
		iconLabel: _Story.arg(null),
		type: _Story.arg(null),
		forwardedRef: _Story.arg(null),
		onClick: _Story.arg(null),
		onFocus: _Story.arg(null),
		onBlur: _Story.arg(null),
		autoFocus: _Story.arg(null),
		dangerouslySetTabIndex: _Story.arg(null),
	},
} as Meta;

interface Props {
	style?: string;
	size?: string;
	children?: string;
	fill?: boolean;
	highlight?: boolean;
	selected?: boolean;
	busy?: boolean;
	reverse?: boolean;
	disabled?: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		<Button
			style={Button.styles[props.style]}
			size={Button.sizes[props.size]}
			fill={props.fill}
			highlight={props.highlight}
			selected={props.selected}
			busy={props.busy}
			reverse={props.reverse}
			disabled={props.disabled}
		>
			{props.children ? props.children : "This is button"}
		</Button>
	);
};

_Story.fixPrimary(Primary);

export const ButtonWithIcon = (): JSX.Element => {
	return (
		<>
			<Button
				iconLabel="Settings"
				icon={md.MdBuild}
				children="Settings"
			/>
			<DivPx size={8} />
			<Button
				highlight
				iconLabel="Call us"
				icon={md.MdCall}
				children="Call us"
				reverse
			/>
		</>
	);
};

_Story.desc(ButtonWithIcon)(`
You can add icon to the Button component using \`icon\`. Moai also support icons from popular libraries like react-icons and pass them into the button.

By default, the icon is on the left side, you can change the direction by add \`reverse\` to the button.
`);

_Story.name(ButtonWithIcon, "Button with icon");

export const GroupingButtons = (): JSX.Element => {
	const input = <Input placeholder="Button with input" />;
	const searchButtonIcon = <Button iconLabel="Search" icon={md.MdSearch} />;
	const addButtonIcon = <Button iconLabel="Add" icon={md.MdAdd} />;
	const saveButton = <Button children="Save" />;
	return (
		<>
			<ButtonGroup
				children={[
					{ fill: true, element: input },
					{ fill: false, element: searchButtonIcon },
				]}
			/>
			<DivPx size={8} />
			<ButtonGroup
				children={[
					{ fill: false, element: saveButton },
					{ fill: false, element: addButtonIcon },
				]}
			/>
		</>
	);
};

_Story.desc(GroupingButtons)(`
You can use \`ButtonGroup\` to group buttons.
`);
_Story.name(GroupingButtons, "Grouping Buttons");

export const ButtonWithLoading = (): JSX.Element => {
	return <Button>Button loading state</Button>;
};

_Story.desc(ButtonWithLoading)(`
WIP loading state
`);
_Story.name(ButtonWithLoading, "Button with loading");
