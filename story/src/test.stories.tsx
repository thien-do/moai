import { storiesOf } from "@storybook/react";
import { Icon } from "../../core/src";
import { bp } from "../../icon/src/bp";

console.log(bp.calendar);

const Default = () => (
	<div style={{ color: "purple" }}>
        <Icon display="block" path={bp.calendar as any} />
	</div>
);

storiesOf("Test", module).add("Default", Default);
