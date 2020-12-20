import { Checkbox, CheckboxProps, Radio, RadioProps } from "../../../core/src";

const CheckboxRow = (props: Partial<CheckboxProps>): JSX.Element => (
	<>
		<Checkbox {...props} defaultChecked={false} children="Unchecked" />
		<Checkbox {...props} defaultChecked={true} children="Checked" />
		<Checkbox {...props} indeterminate={true} children="Mixed" />
	</>
);

interface RadioRowProps extends Partial<RadioProps> {
	name: string;
}

const RadioRow = (props: RadioRowProps): JSX.Element => (
	<>
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
		<Radio
			defaultChecked={false}
			children="Unchecked"
			value="unchecked"
			{...props}
		/>
	</>
);

export const GalleryCheckbox = (): JSX.Element => (
	<div className="flex space-x-8">
		<div className="flex-1 space-y-8">
			<CheckboxRow />
			<CheckboxRow disabled />
		</div>
		<div className="flex-1 space-y-8">
			<RadioRow name="enabled sample" />
			<RadioRow name="disabled sample" disabled />
		</div>
	</div>
);
