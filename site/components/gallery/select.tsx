import { Button, ButtonGroup, ButtonGroupItemProps, Input, Select, SelectOption, SelectProps } from "@moai/core"; // prettier-ignore
import { icons } from "@moai/icon";
import COLORS from "./samples/colors.json";

export const toOption = (text: string): SelectOption<string> => ({
	id: text,
	label: text,
	value: text,
});

const colorOptions: SelectOption<string>[] = COLORS.map(toOption);
colorOptions.forEach((option) => {
	option.disabled = Math.random() > 0.8;
});

colorOptions.unshift({ ...toOption("Select"), disabled: true });

const modelOptions: SelectOption<string>[] = [
	"Posts",
	"Users",
	"Tags",
	"All",
].map(toOption);

type ColumnProps = Pick<SelectProps<unknown>, "style">;

const base: SelectProps<string> = {
	options: colorOptions,
	defaultValue: "Select",
};

const Column = ({ style }: ColumnProps): JSX.Element => (
	<div className="flex-1">
		<div className="space-y-8 w-max">
			<Select {...base} style={style} />
			<Select {...base} style={style} disabled />
		</div>
	</div>
);

const Full = (): JSX.Element => (
	<Select
		options={[
			{
				id: "full",
				label: "Full-width Select",
				value: "full",
				disabled: true,
			},
			...colorOptions,
		]}
		defaultValue="full"
	/>
);

const Group = (): JSX.Element => {
	const select = <Select options={modelOptions} defaultValue="Posts" />;
	const input = <Input defaultValue="" placeholder="Type to search" />;
	const button = <Button iconLabel="Search" icon={icons.search} />;
	const children: ButtonGroupItemProps[] = [
		{ fill: false, element: select },
		{ fill: true, element: input },
		{ fill: false, element: button },
	];
	return <ButtonGroup fill children={children} />;
};

export const GallerySelect = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Column style={Select.style.outset} />
			<Column style={Select.style.flat} />
		</div>
		<Group />
		<Full />
	</div>
);
