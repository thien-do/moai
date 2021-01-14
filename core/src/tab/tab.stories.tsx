import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { Tab, Tabs } from "./tab";
import { DivPx } from "../div/div";

const tabs: Tab[] = [
	{ id: "First", title: "First", pane: () => <p>1st</p> },
	{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
];

storiesOf("Tab", module).add("Primary", () => (
	<div>
		<Tabs children={tabs} />
		<DivPx size={16} />
		<Tabs children={tabs} noPadding />
		<DivPx size={16} />
		<Tabs style={Tabs.styles.flat} children={tabs} />
		<DivPx size={16} />
		<Tabs style={Tabs.styles.flat} children={tabs} noPadding />
		<DivPx size={16} />
		<div style={{ height: 200 }}>
			<Tabs children={tabs} fullHeight />
		</div>
	</div>
));
