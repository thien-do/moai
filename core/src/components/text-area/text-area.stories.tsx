import { storiesOf } from "@storybook/react";
import { DivPx } from "../div/div";
import { TextArea } from "./text-area";

storiesOf("TextArea", module).add("Main", () => (
	<div style={{ width: 300 }}>
		<TextArea />
        <DivPx size={8} />
		<TextArea placeholder="Placeholder" />
        <DivPx size={8} />
		<TextArea readOnly value="Read-only" />
        <DivPx size={8} />
		<TextArea disabled />
	</div>
));
