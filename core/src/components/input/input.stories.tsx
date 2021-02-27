import { storiesOf } from "@storybook/react";
import { DivPx } from "../div/div";
import { Input } from "./input";

storiesOf("Input", module).add("Main", () => (
	<div style={{ width: 300 }}>
		<Input />
        <DivPx size={8} />
		<Input placeholder="Placeholder" />
        <DivPx size={8} />
		<Input readOnly value="Read-only" />
        <DivPx size={8} />
		<Input disabled />
	</div>
));
