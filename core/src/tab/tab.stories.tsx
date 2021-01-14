import { storiesOf } from "@storybook/react"; //eslint-disable-line
import React from "react";
import { Tabs } from "./tab";
import { DivPx } from "../div/div";

storiesOf("Tab", module).add("Primary", () => (
	<div>
		<Tabs
			children={[
				{ id: "First", title: "First", pane: () => <p>1st</p> },
				{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
			]}
		/>
		<DivPx size={16} />
		<Tabs
			children={[
				{ id: "First", title: "First", pane: () => <p>1st</p> },
				{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
			]}
			noPadding
		/>
		<DivPx size={16} />
		<Tabs
			style={Tabs.styles.flat}
			children={[
				{ id: "First", title: "First", pane: () => <p>1st</p> },
				{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
			]}
		/>
		<DivPx size={16} />
		<Tabs
			style={Tabs.styles.flat}
			children={[
				{ id: "First", title: "First", pane: () => <p>1st</p> },
				{ id: "Second", title: "Second", pane: () => <p>2nd</p> },
			]}
			noPadding
		/>
	</div>
));
