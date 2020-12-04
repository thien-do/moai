import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { Tabs } from "./tab";

storiesOf("Tab", module).add("Primary", () => (
	<Tabs>
		{[
			{ title: "First", pane: () => <p>First pane</p> },
			{ title: "Second", pane: () => <p>Second pane</p> },
		]}
	</Tabs>
));
