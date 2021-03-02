import { _Story } from "../_story";
import { Select, SelectOption } from "./select";
import { DivPx } from "../div/div";
import { Input, Button, ButtonGroup, ButtonGroupItemProps, coreIcons } from "../.."; // prettier-ignore

export default {
	title: "Components/Select",
	component: Select,
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
};

const bookOptions: SelectOption<string>[] = [
	"Action and Adventure",
	"Classics",
	"Comic Book or Graphic Novel",
	"Detective and Mystery",
	"Fantasy",
	"Historical Fiction",
	"Horror",
	"Literary Fiction",
].map(Select.toStringOption);

interface Props {
	style?: string;
	size?: string;
	fill?: boolean;
	disabled?: boolean;
}

export const Primary = (props: Props) => {
	const value1Item: SelectOption<string> = {
		value: "Item 1",
		id: "Item 1",
		label: "Item 1",
	};

	const value2Item: SelectOption<string> = {
		value: "Item 2",
		id: "Item 2",
		label: "Item 2",
	};

	return (
		<Select
			options={[value1Item, value2Item]}
			style={Select.styles[props.style]}
			size={Select.sizes[props.size]}
			fill={props.fill}
			disabled={props.disabled}
		/>
	);
};

export const Fill = () => {
	return (
		<div>
			<Select
				options={[
					{
						id: "full",
						label: "Full-width Select",
						value: "full",
						disabled: true,
					},
					...bookOptions,
				]}
				defaultValue="full"
				fill
			/>
			<DivPx size={8} />
		</div>
	);
};

_Story.desc(Fill)(
	`By default, the width of a Select button is based on its longest item to avoid changing layout when users switching between items.

  When set, the width of the button will be 100% of the Select's parent:`
);

const modelOptions: SelectOption<string>[] = [
	"Posts",
	"Users",
	"Tags",
	"All",
].map(Select.toStringOption);

export const Group = () => {
	const select = <Select options={modelOptions} defaultValue="Posts" />;
	const input = <Input defaultValue="" placeholder="Type to search" />;
	const button = <Button iconLabel="Search" icon={coreIcons.search} />;
	const children: ButtonGroupItemProps[] = [
		{ fill: false, element: select },
		{ fill: true, element: input },
		{ fill: false, element: button },
	];
	return <ButtonGroup fill children={children} />;
};

_Story.desc(Group)(`You can also group components to make search form like:`);
