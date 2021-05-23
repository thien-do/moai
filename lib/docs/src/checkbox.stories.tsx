import { Meta } from "@storybook/react";
import { Checkbox, DivPx } from "../../core/src";

export default {
	title: "Draft/Checkbox",
	component: Checkbox,
} as Meta;

export const Primary = (): JSX.Element => (
	<div>
		<Checkbox indeterminate>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox defaultChecked>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox disabled indeterminate>
			Checkbox
		</Checkbox>
		<DivPx size={8} />
		<Checkbox disabled defaultChecked>
			Checkbox
		</Checkbox>
		<DivPx size={8} />
		<Checkbox disabled>Checkbox</Checkbox>
	</div>
);
