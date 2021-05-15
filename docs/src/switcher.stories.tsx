import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { Switcher, SwitcherOption } from "../../core/src";
import { SwitcherOptionComponent } from "./switcher-fake";
import { Utils } from "./utils";

export default {
	title: "Components/Switcher",
	component: Switcher,
	subcomponents: { SwitcherOption: SwitcherOptionComponent },
	argTypes: {
		style: Utils.arg(Switcher.styles),
		size: Utils.arg(Switcher.sizes),
		fill: Utils.arg("boolean"),
		highlight: Utils.arg("boolean"),
		disabled: Utils.arg("boolean"),
		value: Utils.arg(null),
		setValue: Utils.arg(null),
		options: Utils.arg(null),
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
			// eslint-disable-next-line
			size={(Switcher.sizes as any)[props.size!]}
			// eslint-disable-next-line
			style={(Switcher.styles as any)[props.style!]}
			fill={props.fill}
			disabled={props.disabled}
			highlight={props.highlight}
		/>
	);
};

Utils.fixPrimary(Primary);

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

Utils.desc(Icon)(`
Switcher's options can also have icons, or even using icon only. To ensure good
accessibility, remember to provide the "iconLabel" attribute if there is no
"label" to accompany the icons.
`);
