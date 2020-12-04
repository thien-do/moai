import * as React from "react";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import { outline } from "../outline/outline";
import { Pane } from "../pane/pane";
import s from "./tab.module.css";

export interface Tab {
	title: string;
	pane: () => JSX.Element;
}

interface Props {
	children: Tab[];
	noPadding?: boolean;
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

export const Tabs = ({ children, ...props }: Props): JSX.Element => {
	if (children.length < 1) throw Error("Tabs must have at least one tab");
	const activeState = React.useState(children[0].title);
	const [active] = activeState;

	const activeTab = children.find((tab) => tab.title === active);
	if (activeTab === undefined) throw Error(`Tab "${active}" is not defined`);

	return (
		<div>
			<div className={s.titles}>
				{children.map(renderTab(activeState))}
			</div>
			<Pane noPadding={props.noPadding}>
				<div className={s.panel}>{activeTab.pane()}</div>
			</Pane>
		</div>
	);
};
