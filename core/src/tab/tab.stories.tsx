import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React, { useState } from "react";
import { Tab, Tabs } from "./tab";
import { DivPx } from "../div/div";

const tabs: Tab[] = [
	{ id: "First", title: "First", pane: () => <p>1st</p> },
	{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
];

storiesOf("Tab", module).add("Primary", () => {
	const [activeTab, setActiveTab] = useState('Second')
	return (
		<div>
			<Tabs setActiveTab={setActiveTab} activeTab={activeTab} children={tabs} callbackOnTab={(tabId) => alert(tabId)} />
			<DivPx size={16} />
			<Tabs setActiveTab={setActiveTab} activeTab={activeTab} children={tabs} noPadding />
			<DivPx size={16} />
			<Tabs setActiveTab={setActiveTab} activeTab={activeTab} style={Tabs.styles.flat} children={tabs} />
			<DivPx size={16} />
			<Tabs setActiveTab={setActiveTab} activeTab={activeTab} style={Tabs.styles.flat} children={tabs} noPadding />
			<DivPx size={16} />
			<div style={{ height: 200 }}>
				<Tabs setActiveTab={setActiveTab} activeTab={activeTab} children={tabs} fullHeight />
			</div>
		</div>
	)
});
