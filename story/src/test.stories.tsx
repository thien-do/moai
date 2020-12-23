import { storiesOf } from "@storybook/react";
import { Checkbox } from "../../core/src";

const Default = () => (
	<div>
		<Checkbox children="ahihi" />
	</div>
);

storiesOf("Test", module).add("Default", Default);
