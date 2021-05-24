import { Meta } from "@storybook/react";
import { useState } from "react";
import { Select } from "../../core/src";
import { SelectOptionComponent } from "./select-fake";
import { Utils } from "./utils";

export default {
	title: "Components/Select",
	component: Select,
	subcomponents: { SelectOption: SelectOptionComponent },
	argTypes: {
		options: Utils.arg(null),
		style: Utils.arg(Select.styles),
		size: Utils.arg(Select.sizes),
		fill: Utils.arg("boolean"),
		disabled: Utils.arg("boolean"),
		defaultValue: Utils.arg(null),
		forwardedRef: Utils.arg(null),
		value: Utils.arg(null),
		setValue: Utils.arg(null),
	},
} as Meta;

interface Props {
	style?: string;
	size?: string;
	fill?: boolean;
	disabled?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<Select<number>
		options={[
			{ value: 0, id: "red", label: "Red" },
			{ value: 1, id: "blue", label: "Blue" },
			{ value: 2, id: "green", label: "Green" },
		]}
		// eslint-disable-next-line
		style={(Select.styles as any)[props.style!]}
		// eslint-disable-next-line
		size={(Select.sizes as any)[props.size!]}
		fill={props.fill}
		disabled={props.disabled}
	/>
);

Utils.fixPrimary(Primary);

export const Basic = (): JSX.Element => {
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

Utils.desc(Basic)(`
To use the Select component, define its options as an array via the \`options\`
prop. See the "Select Option" tab at the argument table for the shape of these
options.

Moai's Select is a generic component, so the type of your option's value can be
anything. This helps you use Select directly with values of arbitrary type
instead of just string. In the example below, the type of value is \`number\`,
but in practice you can use more complex types such as objects or symbols.
`);

export const StringOptionUtility = (): JSX.Element => (
	<Select<string>
		options={["Red", "Blue", "Green"].map(Select.toStringOption)}
	/>
);

Utils.desc(StringOptionUtility)(`
Technically, your options must have "id", "label" and "value" fields defined.
However, if these 3 fields are the same (usually in case of \`string\`-based
options), you can use \`Select.toStringOption\` to simplify the definition.

Similarly, there is also a \`Select.toNumberOption\` for \`number\`-based
options, which calls \`toString\` to provide "id" and "label" fields.
`);

Utils.name(StringOptionUtility, "toStringOption Utility");

export const Placeholder = (): JSX.Element => {
	const [value, setValue] = useState<null | number>(null);
	return (
		<Select<number | null>
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

Utils.desc(Placeholder)(`
A select can not have value outside of its options. To have a blank/empty state
for your select, explicitly define it as a disabled option. We recommend using
\`null\` to represent this option's value. The type of your Select (and your
state) should then be \`null | Something\`.

This actually follows the [common practice][1] as when using the native
\`select\` tag in HTML.

[1]: https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
`);
