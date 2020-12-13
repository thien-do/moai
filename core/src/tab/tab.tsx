import * as React from "react";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import { outline } from "../outline/outline";
import { Pane } from "../pane/pane";
import s from "./tab.module.css";

export interface Tab {
	id: string;
	title: string;
	pane: () => JSX.Element;
}

interface Props {
	children: Tab[];
	initialTab?: string;
	noPadding?: boolean;
}

interface State {
	active: string;
	setActive: (str: string) => void;
}

const renderTitle = (state: State) => (tab: Tab) => {
	const { active, setActive } = state;
	const activeCls =
		active === tab.id
			? `${borderColor.strong} ${background.primary}`
			: `${s.nonactive}`;
	return (
		<button
			className={[s.title, outline.normal, activeCls].join(" ")}
			onClick={() => setActive(tab.id)}
			key={tab.id}
			children={tab.title}
		/>
	);
};

export const Tabs = ({ children, ...props }: Props): JSX.Element => {
	if (children.length < 1) throw Error("Tabs must have at least one tab");
	const [active, setActive] = React.useState(
		props.initialTab ?? children[0].id
	);

	const activeTab = children.find((tab) => tab.id === active);
	if (activeTab === undefined) throw Error(`Tab "${active}" is not defined`);

	return (
		<div>
			<div className={s.titles}>
				{children.map(renderTitle({ active, setActive }))}
			</div>
			<Pane noPadding={props.noPadding}>
				<div className={s.panel}>{activeTab.pane()}</div>
			</Pane>
		</div>
	);
};
