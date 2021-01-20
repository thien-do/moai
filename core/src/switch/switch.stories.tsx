import { storiesOf } from "@storybook/react";
import { Switch } from "./switch";
import { DivPx } from "../div/div";

storiesOf("Switch", module).add("Main", () => (
	<div>
		<Switch />
		Switch
		<DivPx size={8} />
		<Switch defaultChecked></Switch>
		Switch
		<DivPx size={8} />
		<Switch />
		Switch
		<DivPx size={8} />
		<Switch disabled />
		Switch
		<DivPx size={8} />
		<Switch disabled defaultChecked />
		Switch
		<DivPx size={8} />
		<Switch disabled />
		Switch
	</div>
));
