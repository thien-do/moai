import { Checkbox } from "../../../core/src";

export const GalleryCheckbox = (): JSX.Element => (
	<div className="space-y-8">
		<Checkbox defaultChecked={false} children="Unchecked" />
		<Checkbox defaultChecked={true} children="Checked" />
		<Checkbox indeterminate={true} children="Indeterminated" />
		<Checkbox disabled defaultChecked={false} children="Unchecked" />
		<Checkbox disabled defaultChecked={true} children="Checked" />
		<Checkbox disabled indeterminate={true} children="Indeterminated" />
	</div>
);
