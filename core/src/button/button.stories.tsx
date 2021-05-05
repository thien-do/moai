import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import { _Story } from "../_story";
import { Button } from "./button";
import * as md from "react-icons/md";

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
	disable?: boolean;
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
			disabled={props.disable}
		>
			{props.children ? props.children : "This is button"}
		</Button>
	);
};

_Story.fixPrimary(Primary);

export const ButtonWithIcon = (): JSX.Element => {
	return (
		<Button
			highlight
			iconLabel="Settings"
			icon={md.MdBuild}
			children="Settings"
		/>
	);
};

_Story.desc(ButtonWithIcon)(`
You can add icon to the Button component using icon. You can also use icons from popular libraries like react-icons and pass it into the button.
`);

_Story.name(ButtonWithIcon, "Button with icon");

export const ButtonWithInput = (): JSX.Element => {
	return <Button>Button loading state</Button>;
};

_Story.desc(ButtonWithInput)(`
WIP loading state
`);
_Story.name(ButtonWithInput, "Button with input");

export const ButtonLoading = (): JSX.Element => {
	return <Button>Button loading state</Button>;
};

_Story.desc(ButtonLoading)(`
WIP loading state
`);
_Story.name(ButtonLoading, "Button loading state");
