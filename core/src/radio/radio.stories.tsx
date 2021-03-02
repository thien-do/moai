import { storiesOf } from "@storybook/react";
import { Radio } from "./radio";
import { DivPx } from "../div/div";

storiesOf("Radio", module).add("Main", () => (
	<div>
		<Radio defaultChecked name="radio" value="1">
			Radio
		</Radio>
		<DivPx size={8} />
		<Radio name="radio" value="2">
			Radio
		</Radio>
		<DivPx size={8} />
		<Radio disabled defaultChecked name="radio2" value="1">
			Radio
		</Radio>
		<DivPx size={8} />
		<Radio disabled name="radio2" value="2">
			Radio
		</Radio>
	</div>
));
