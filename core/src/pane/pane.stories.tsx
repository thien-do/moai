import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { Pane } from "./pane";

storiesOf("Pane", module).add("Default", () => <Pane>Content</Pane>);

storiesOf("Pane", module).add("No padding", () => (
	<Pane noPadding>Content</Pane>
));
