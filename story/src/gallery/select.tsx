import { Select, SelectOption, SelectProps } from "../../../core/src";
import { SampleColors } from "./samples";

const ColorOptions: SelectOption<string>[] = SampleColors.map((color) => ({
	id: color,
	label: color,
	value: color,
	disabled: Math.random() > 0.8,
}));

ColorOptions.unshift({
	id: "select",
	label: "Select",
	value: "select",
	disabled: true,
});

type ColumnProps = Pick<SelectProps<unknown>, "style">;

const Column = ({ style }: ColumnProps): JSX.Element => {
	const base: SelectProps<string> = {
		options: ColorOptions,
		style: style,
		defaultValue: "select",
	};
	return (
		<div className="space-y-8">
			<Select {...base} />
			<Select {...base} disabled />
			<Select {...base} size={Select.size.small} />
		</div>
	);
};

export const GallerySelect = () => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Column style={Select.style.outset} />
			<Column style={Select.style.flat} />
		</div>
		<Select
			options={[
				{
					id: "full",
					label: "Full-width Select",
					value: "full",
					disabled: true,
				},
				...ColorOptions,
			]}
			defaultValue="full"
		/>
	</div>
);
