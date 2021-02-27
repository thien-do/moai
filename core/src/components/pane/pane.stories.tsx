import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { DivPx } from "../div/div";
import { Pane } from "./pane";

storiesOf("Pane", module).add("Default", () => (
	<div>
		<Pane>Content</Pane>
		<DivPx size={16} />
		<Pane noPadding>Content</Pane>
		<DivPx size={16} />
		<div style={{ height: 100 }}>
			<Pane fullHeight>Content</Pane>
		</div>
	</div>
));
