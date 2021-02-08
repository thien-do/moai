import { storiesOf } from "@storybook/react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Tooltip, TooltipPane } from "./tooltip";

storiesOf("Tooltip", module).add("Main", () => (
	<div>
		<Tooltip content="Sample Tooltip">
			<Button.Forwarded children="Hover to show a Tooltip" />
		</Tooltip>
		<DivPx size={16} />
		<TooltipPane children="Short Tooltip" />
		<DivPx size={16} />
		<TooltipPane children="Multi-line Tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
	</div>
));
