import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { DivPx } from "../div/div";
import { Switcher } from "../switcher/switcher";
import { Tab, Tabs } from "./tab";

const tabs: Tab[] = [
	{ id: "first", title: "First", pane: () => <p>1st</p> },
	{ id: "second", title: "Second", pane: () => <p>2nd</p> },
];

storiesOf("Tab", module).add("Primary", () => {
	const [tab, setTab] = React.useState("first");

	React.useEffect(() => {
		console.log(`active tab is changed: ${tab}`);
	}, [tab]);

	return (
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
			<DivPx size={16} />
			<div>
				<p>
					This is a controlled tabs. You can change the tab via these
					buttons:
				</p>
				<DivPx size={16} />
				<Switcher
					value={tab}
					setValue={setTab}
					options={tabs.map((tab) => ({
						value: tab.id,
						label: tab.title,
					}))}
				/>
				<DivPx size={16} />
				<Tabs children={tabs} setActiveTab={setTab} activeTab={tab} />
			</div>
		</div>
	);
});
