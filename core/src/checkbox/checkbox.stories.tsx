import { storiesOf } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { DivPx } from "../div/div";

storiesOf("Checkbox", module).add("Main", () => (
	<div>
		<Checkbox indeterminate>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox defaultChecked>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox disabled indeterminate>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox disabled defaultChecked>Checkbox</Checkbox>
		<DivPx size={8} />
		<Checkbox disabled>Checkbox</Checkbox>
	</div>
));
