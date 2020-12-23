import { storiesOf } from "@storybook/react";
import { Icon } from "../../core/src";
import { hrs as hro } from "../../icon/src/hrs";

const Default = () => (
	<div style={{ color: "purple" }} className="flex flex-wrap">
		<Icon display="block" path={hro.calendar} />
	</div>
);

storiesOf("Test", module).add("Default", Default);
