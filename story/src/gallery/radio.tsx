import { Radio, RadioProps } from "../../../core/src";

interface RowProps extends Partial<RadioProps> {
	name: string;
}

const Row = (props: RowProps): JSX.Element => (
	<>
		<Radio
			defaultChecked={false}
			children="Unchecked"
			value="unchecked"
			{...props}
		/>
		<Radio
			defaultChecked={false}
			children="Unchecked"
			value="unchecked"
			{...props}
		/>
		<Radio
			defaultChecked={true}
			children="Checked"
			value="checked"
			{...props}
		/>
	</>
);

export const GalleryRadio = (): JSX.Element => (
	<div className="space-y-8">
		<Row name="enabled sample" />
		<Row name="disabled sample" disabled />
	</div>
);
