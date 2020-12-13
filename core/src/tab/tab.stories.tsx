import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { Tabs } from "./tab";

storiesOf("Tab", module).add("Primary", () => (
	<Tabs
		children={[
			{ id: "First", title: "First", pane: () => <p>First pane</p> },
			{ id: "Second", title: "Second", pane: () => <p>Second pane</p> },
		]}
	/>
));
