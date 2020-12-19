import { storiesOf } from "@storybook/react";
import { Button } from "../";

const Gallery = () => (
	<div>
		<Button highlight children="Button" />
		<Button children="Button" />
	</div>
);

storiesOf("Gallery", module).add("Main", Gallery);
