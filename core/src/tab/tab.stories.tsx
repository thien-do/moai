import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { Tab, Tabs } from "./tab";
import { DivPx } from "../div/div";

const tabs: Tab[] = [
	{ id: "First", title: "First", pane: () => <p>1st</p> },
	{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
];

const tabsHaveCallback: Tab[] = [
	{ id: "First", title: "First", pane: () => <p>Tab First has callback function</p> },
	{ id: "Second", title: "Second", pane: () => <p>Tab Second has callback function</p> },
];

storiesOf("Tab", module).add("Control", () => {
	const [activeTab, setActiveTab] = React.useState('Second')
	return (
		<div>
			<Tabs control={{activeTab, setActiveTab}} children={tabsHaveCallback} callbackOnTab={(tabId) => alert(tabId)} />
			<DivPx size={16} />
			<Tabs control={{activeTab, setActiveTab}} children={tabs} noPadding />
			<DivPx size={16} />
			<Tabs control={{activeTab, setActiveTab}} style={Tabs.styles.flat} children={tabs} />
			<DivPx size={16} />
			<Tabs control={{activeTab, setActiveTab}} style={Tabs.styles.flat} children={tabs} noPadding />
			<DivPx size={16} />
			<div style={{ height: 200 }}>
				<Tabs control={{activeTab, setActiveTab}} children={tabs} fullHeight />
			</div>
		</div>
	)
});


storiesOf("Tab", module).add("Uncontrol", () => {
	return (
		<div>
			<Tabs children={tabsHaveCallback} callbackOnTab={(tabId) => alert(tabId)} />
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
	)
});
