import { Meta } from "@storybook/react/types-6-0";
import React, { useState } from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { _Story } from "../_story";
import { SwitcherOptionComponent } from "./fake-switcher-option";
import { Switcher, SwitcherOption } from "./switcher";

export default {
	title: "Components/Switcher",
	component: Switcher,
	subcomponents: { SwitcherOption: SwitcherOptionComponent },
	argTypes: {
		style: _Story.arg(Switcher.styles),
		size: _Story.arg(Switcher.sizes),
		fill: _Story.arg("boolean"),
		highlight: _Story.arg("boolean"),
		disabled: _Story.arg("boolean"),
		value: _Story.arg(null),
		setValue: _Story.arg(null),
		options: _Story.arg(null),
	},
	parameters: { stickyPrimary: true },
} as Meta;

interface Props {
	style?: string;
	size?: string;
	fill?: boolean;
	disabled?: boolean;
	highlight?: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	const [value, setValue] = useState<number>(0);
	return (
		<Switcher<number>
			value={value}
			setValue={setValue}
			options={[
				{ value: 0, label: "Left" },
				{ value: 1, label: "Center" },
				{ value: 2, label: "Right" },
			]}
			// Storybook's controls
			size={Switcher.sizes[props.size]}
			style={Switcher.styles[props.style]}
			fill={props.fill}
			disabled={props.disabled}
			highlight={props.highlight}
		/>
	);
};

_Story.fixPrimary(Primary);

export const Icon = (): JSX.Element => {
	const [value, setValue] = useState<number>(0);
	const options: SwitcherOption<number>[] = [
		{ value: 0, icon: FaAlignLeft, iconLabel: "Align left" },
		{ value: 1, icon: FaAlignCenter, iconLabel: "Align center" },
		{ value: 2, icon: FaAlignRight, iconLabel: "Align right" },
	];
	return (
		<Switcher<number> value={value} setValue={setValue} options={options} />
	);
};

_Story.desc(Icon)(`
Switcher's options can also have icons, or even using icon only. To ensure good
accessibility, remember to provide the "iconLabel" attribute if there is no
"label" to accompany the icons.
`);
