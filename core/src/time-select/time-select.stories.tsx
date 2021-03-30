import { Meta } from "@storybook/react";
import { useState } from "react";
import { _Story } from "../_story";
import { SelectOptionComponent } from "./fake-time-select-option";
import { TimeSelect } from "./time-select";

export default {
	title: "Components/Time-Select",
	component: TimeSelect,
	subcomponents: { SelectOption: SelectOptionComponent },
	argTypes: {
		options: _Story.arg(null),
		style: _Story.arg(TimeSelect.styles),
		size: _Story.arg(TimeSelect.sizes),
		fill: _Story.arg("boolean"),
		disabled: _Story.arg("boolean"),
		defaultValue: _Story.arg(null),
		forwardedRef: _Story.arg(null),
		value: _Story.arg(null),
		setValue: _Story.arg(null),
	},
} as Meta;

interface Props {
	style?: string;
	size?: string;
	fill?: boolean;
	disabled?: boolean;
	type?: 15 | 30 | 60; // or use keyof TimeSelectType
}

export const Primary = (props: Props) => {
	const [value, setValue] = useState<Date | null>(null);
	return (
		<>
			<TimeSelect
				style={TimeSelect.styles[props.style]}
				size={TimeSelect.sizes.medium}
				fill={props.fill}
				disabled={props.disabled}
				type={props.type}
				value={value}
				setValue={setValue}
			/>
		</>
	);
};

_Story.fixPrimary(Primary);

export const Basic = () => {
	const [value, setValue] = useState<Date | null>(null);
	return <TimeSelect value={value} setValue={setValue} />;
};

_Story.desc(Basic)(`
Moai's Select Time Component
`);

export const Placeholder = () => {
	const [value, setValue] = useState<Date | null>(null);

	return <TimeSelect value={value} setValue={setValue} />;
};

_Story.desc(Placeholder)(`
A select can not have value outside of its options. To have a blank/empty state
for your select, explicitly define it as a disabled option. We recommend using
\`null\` to represent this option's value. The type of your Select (and your
state) should then be \`null | Something\`.

This actually follows the [common practice][1] as when using the native
\`select\` tag in HTML.

[1]: https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
`);
