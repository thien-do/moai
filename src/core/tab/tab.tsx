import * as React from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { outline } from "../outline/outline";
import { Pane } from "../pane/pane";
import s from "./tab.module.css";

const ERRORS = {
	UNDEF_SET: `"setActiveTab" must be defined when "active" is defined (Tabs is controlled)`,
	DEF_INITIAL: `"initialTab" must be undefined when "active" is defined (Tabs is controlled)`,
	LENGTH: "Tabs must have at least one tab",
	DEF_SET: `"setActiveTab" must be undefined when "active" is undefined (Tabs is uncontrolled)`,
	UNDEF_TAB: (t: string) => `Tab "${t}" is not defined`,
};

export interface Tab {
	/**
	 * Unique id of the tab.
	 */
	id: string;
	/**
	 * Title of the tab. It supports `ReactNode` so you can have custom
	 * content.
	 */
	title: React.ReactNode;
	/**
	 * The content to render inside the tab. It's a function to avoid
	 * unnecessary renders.
	 */
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
	/**
	 * The list of tabs to render. See the "Tab" page for more detail.
	 */
	children: Tab[];
	/**
	 * If true, remove the default padding around tab content.
	 */
	noPadding?: boolean;
	/**
	 * The style of tabs. Choose one from `Tabs.styles`.
	 */
	style?: TabStyle;
	/**
	 * If true, the tabs' height is 100% of their containers.
	 */
	fullHeight?: boolean;
	/**
	 * The activated tab when first render, in uncontrolled mode.
	 */
	initialTab?: string;
	/**
	 * The active tab in controlled mode.
	 */
	activeTab?: string;
	/**
	 * A callback to set the active tab in controlled mode.
	 */
	setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
}

interface State {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
}

const renderTitle = (props: Props, state: State) => (tab: Tab) => {
	const { active, setActive } = state;
	// Disable because "react/prop-types" wrongly detects this as a component
	// eslint-disable-next-line react/prop-types
	const style = props.style ?? Tabs.styles.outset;
	return (
		<button
			className={[
				s.title,
				outline.normal,
				style.title,
				active === tab.id ? style.active : style.inactive,
			].join(" ")}
			onClick={() => setActive(tab.id)}
			key={tab.id}
			children={tab.title}
		/>
	);
};

const useTabState = (props: Props): State => {
	const { children, activeTab, setActiveTab, initialTab } = props;
	if (children.length < 1) throw Error(ERRORS.LENGTH);

	// Self state for uncontrolled
	const state = React.useState(initialTab ?? children[0].id);

	if (activeTab !== undefined) {
		// Controlled
		if (setActiveTab === undefined) throw Error(ERRORS.UNDEF_SET);
		if (initialTab !== undefined) throw Error(ERRORS.DEF_INITIAL);
		return { active: activeTab, setActive: setActiveTab };
	} else {
		// Uncontrolled
		if (setActiveTab !== undefined) throw Error(ERRORS.DEF_SET);
		return { active: state[0], setActive: state[1] };
	}
};

/**
 * Tabs are use when we have multiple groups of content. Tabs make it easier to
 * view and switch between each group. Moai's Tabs support both
 * [uncontrolled][1] and [controlled][2] usages.
 *
 * [1]: https://reactjs.org/docs/uncontrolled-components.html
 * [2]: https://reactjs.org/docs/forms.html#controlled-components
 */
export const Tabs = (props: Props): JSX.Element => {
	const { children } = props;
	const style = props.style ?? Tabs.styles.outset;
	const state = useTabState(props);

	const activeTab = children.find((tab) => tab.id === state.active);
	if (activeTab === undefined) throw Error(ERRORS.UNDEF_TAB(state.active));

	const container = [s.container, props.fullHeight ? s.full : ""].join(" ");

	return (
		<div className={container}>
			<div className={s.titles}>
				{children.map(renderTitle(props, state))}
			</div>
			<div className={[s.content, style.content].join(" ")}>
				{style.renderContent(activeTab.pane(), props)}
			</div>
		</div>
	);
};

const outsetStyle: TabStyle = {
	content: s.outsetContent,
	title: [s.outsetTitle, border.radius].join(" "),
	active: [border.strong, background.strong].join(" "),
	inactive: s.outsetInactive,
	renderContent: (children, props) => (
		<Pane
			// eslint-disable-next-line react/prop-types
			noPadding={props.noPadding}
			// eslint-disable-next-line react/prop-types
			fullHeight={props.fullHeight}
			children={children}
		/>
	),
};

const flatStyle: TabStyle = {
	content: [s.flatContent, border.weak].join(" "),
	title: s.flatTitle,
	active: s.flatActive,
	inactive: s.flatInactive,
	renderContent: (children, props) => (
		<div
			className={[
				// eslint-disable-next-line react/prop-types
				props.noPadding ? "" : s.flatPadding,
				// eslint-disable-next-line react/prop-types
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
