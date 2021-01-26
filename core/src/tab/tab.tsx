import * as React from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { outline } from "../outline/outline";
import { Pane } from "../pane/pane";
import s from "./tab.module.css";

export interface Tab {
	id: string;
	title: string;
	pane: () => JSX.Element;
}

interface TabStyle {
	content: string;
	title: string;
	active: string;
	inactive: string;
	renderContent: (children: React.ReactNode, props: Props) => JSX.Element;
}

interface Props {
	children: Tab[];
	activeTab: string;
	setActiveTab: (tab: string) => void;
	initialTab?: string;
	noPadding?: boolean;
	style?: TabStyle;
	fullHeight?: boolean;
	callbackOnTab?: (tabId: string) => void;
}

const renderTitle = (props: Props) => (tab: Tab) => {
	const { activeTab, setActiveTab } = props;
	const style = props.style ?? Tabs.styles.outset;
	return (
		<button
			className={[
				s.title,
				outline.normal,
				style.title,
				activeTab === tab.id ? style.active : style.inactive,
			].join(" ")}
			onClick={() => {
				setActiveTab(tab.id);
				if (props.callbackOnTab) {
					props.callbackOnTab(tab.id)
				}
			}}
			key={tab.id}
			children={tab.title}
		/>
	);
};

export const Tabs = (props: Props): JSX.Element => {
	const { children, activeTab } = props;
	const style = props.style ?? Tabs.styles.outset;

	if (children.length < 1) throw Error("Tabs must have at least one tab");

	const tab = children.find((tab) => tab.id === activeTab);
	if (tab === undefined) throw Error(`Tab "${activeTab}" is not defined`);

	const container = [s.container, props.fullHeight ? s.full : ""].join(" ");

	return (
		<div className={container}>
			<div className={s.titles}>
				{children.map(renderTitle(props))}
			</div>
			<div className={[s.content, style.content].join(" ")}>
				{style.renderContent(tab.pane(), props)}
			</div>
		</div>
	);
};

const outsetStyle: TabStyle = {
	content: s.outsetContent!,
	title: [s.outsetTitle!, border.radius].join(" "),
	active: [border.strong, background.strong].join(" "),
	inactive: s.outsetInactive!,
	renderContent: (children, props) => (
		<Pane
			noPadding={props.noPadding}
			fullHeight={props.fullHeight}
			children={children}
		/>
	),
};

const flatStyle: TabStyle = {
	content: [s.flatContent, border.weak].join(" "),
	title: s.flatTitle!,
	active: border.highlightStrong,
	inactive: s.flatInactive!,
	renderContent: (children, props) => (
		<div
			className={[
				props.noPadding ? "" : s.flatPadding,
				props.fullHeight ? s.flatFullHeight : "",
			].join(" ")}
			children={children}
		/>
	),
};

Tabs.styles = {
	outset: outsetStyle,
	flat: flatStyle,
};
