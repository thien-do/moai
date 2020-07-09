import React from "react";

import { Border } from "../border/border";
import { Background, background } from "../background/background";
import { outline } from "../outline/outline";
import { borderColor } from "../border/border";
import s from "./tab.module.scss";

export interface Tab {
	title: string;
	panel: () => JSX.Element;
}

interface Props {
	tabs: Tab[];
}

type State = [string, (str: string) => void];

const renderTab = (state: State) => (tab: Tab) => {
	const [active, setActive] = state;
	const activeCls =
		active === tab.title
			? `${borderColor.weak} ${background.primary}`
			: `${s.nonactive}`;
	const className = [s.title, outline.normal, activeCls].join(" ");
	const onClick = () => setActive(tab.title);
	return (
		<button key={tab.title} {...{ className, onClick }}>
			{tab.title}
		</button>
	);
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
	if (tabs.length < 1) throw Error("Tabs must have at least one tab");
	const activeState = React.useState(tabs[0].title);
	const [active] = activeState;

	const activeTab = tabs.find((tab) => tab.title === active);
	if (activeTab === undefined) throw Error(`Tab "${active}" is not defined`);

	return (
		<div>
			<div className={s.titles}>{tabs.map(renderTab(activeState))}</div>
			<Border color="strong" />
			<Background color="primary">
				<div className={s.panel}>{activeTab.panel()}</div>
			</Background>
		</div>
	);
};
