import { Meta } from "@storybook/react";
import { useState } from "react";
import { _Story } from "../_story";
import { SelectOptionComponent } from "./fake-select-option";
import { Select } from "./select";

export default {
	title: "Components/Select",
	component: Select,
	subcomponents: { SelectOption: SelectOptionComponent },
	argTypes: {
		options: _Story.arg(null),
		style: _Story.arg(Select.styles),
		size: _Story.arg(Select.sizes),
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
}

export const Primary = (props: Props) => (
	<Select<number>
		options={[
			{ value: 0, id: "red", label: "Red" },
			{ value: 1, id: "blue", label: "Blue" },
			{ value: 2, id: "green", label: "Green" },
		]}
		style={Select.styles[props.style]}
		size={Select.sizes[props.size]}
		fill={props.fill}
		disabled={props.disabled}
	/>
);

_Story.fixPrimary(Primary);

export const Basic = () => {
	const [value, setValue] = useState<number>(1);
	return (
		<Select<number>
			options={[
				{ value: 0, id: "red", label: "Red" },
				{ value: 1, id: "blue", label: "Blue" },
				{ value: 2, id: "green", label: "Green" },
			]}
			value={value}
			setValue={setValue}
		/>
	);
};

_Story.desc(Basic)(`
To use the Select component, define its options as an array via the \`options\`
prop. See the "Select Option" tab at the argument table for the shape of these
options.

Moai's Select is a generic component, so the type of your option's value can be
anything. This helps you use Select directly with values of arbitrary type
instead of just string. In the example below, the type of value is \`number\`,
but in practice you can use more complex types such as objects or symbols.
`);

export const StringOptionUtility = () => (
	<Select<string>
		options={["Red", "Blue", "Green"].map(Select.toStringOption)}
	/>
);

_Story.desc(StringOptionUtility)(`
Technically, your options must have "id", "label" and "value" fields defined.
However, if these 3 fields are the same (usually in case of \`string\`-based
options), you can use \`Select.toStringOption\` to simplify the definition.

Similarly, there is also a \`Select.toNumberOption\` for \`number\`-based
options, which calls \`toString\` to provide "id" and "label" fields.
`);

_Story.name(StringOptionUtility, "toStringOption Utility");

export const Placeholder = () => {
	const [value, setValue] = useState<null | number>(null);
	return (
		<Select<number>
			options={[
				{
					value: null,
					id: "null",
					// The "placeholder"
					label: "Select a color",
					// Remove this if users should be able to select the
					// "empty" state
					disabled: true,
				},
				{ value: 0, id: "red", label: "Red" },
				{ value: 1, id: "blue", label: "Blue" },
				{ value: 2, id: "green", label: "Green" },
			]}
			value={value}
			setValue={setValue}
		/>
	);
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
