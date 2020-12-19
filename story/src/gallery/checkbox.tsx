import { Checkbox, CheckboxProps } from "../../../core/src";

const Row = (props: Partial<CheckboxProps>): JSX.Element => (
	<>
		<Checkbox {...props} defaultChecked={false} children="Unchecked" />
		<Checkbox {...props} defaultChecked={true} children="Checked" />
		<Checkbox {...props} indeterminate={true} children="Indeterminated" />
	</>
);

export const GalleryCheckbox = (): JSX.Element => (
	<div className="space-y-8">
		<Row />
		<Row disabled />
	</div>
);
