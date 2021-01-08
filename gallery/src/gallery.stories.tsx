import { storiesOf } from "@storybook/react";
import { Gallery } from "./index";
import "@moai/core/index.css";

storiesOf("Gallery", module).add("Main", () => (
	<div>
		<Gallery />
	</div>
));
