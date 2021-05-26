import { Meta } from "@storybook/react";
import { useState } from "react";
import { DivPx, Switcher, Tab, Tabs } from "../../core/src";
import { Utils } from "./utils";
import {
	GalleryTabDefault,
	GalleryTabFlat,
	GalleryTabHeight,
} from "../../gallery/src/tab/tab";

const meta: Meta = {
	title: "Components/Tabs",
	component: Tabs,
	argTypes: {
		noPadding: Utils.arg("boolean", "Visual"),
		fullHeight: Utils.arg("boolean", "Visual"),
		style: Utils.arg(Object.keys(Tabs.styles), "Visual"),
		children: Utils.arg(null, "Controlled"),
		activeTab: Utils.arg(null, "Controlled"),
		setActiveTab: Utils.arg(null, "Controlled"),
		initialTab: Utils.arg(null, "Uncontrolled"),
	},
};

Utils.page.component(meta, {
	sticky: true,
	shots: [
		<GalleryTabDefault key="1" />,
		<GalleryTabFlat key="2" />,
		<GalleryTabHeight key="3" />,
	],
});

export default meta;

type TabStyle = typeof Tabs.styles.flat;

interface Props {
	style?: string;
	noPadding?: boolean;
	fullHeight?: boolean;
}

const tabs: Tab[] = [
	{ id: "first", title: "First", pane: () => <p>1st</p> },
	{ id: "second", title: "Second", pane: () => <p>2nd</p> },
];

export const Primary = (props: Props): JSX.Element => {
	function getStyle(style: string): TabStyle {
		if (style === "flat") return Tabs.styles.flat;
		return Tabs.styles.outset;
	}

	return (
		<div>
			<div style={{ height: "200px" }}>
				<Tabs
					children={tabs}
					style={props.style ? getStyle(props.style) : undefined}
					noPadding={props.noPadding}
					fullHeight={props.fullHeight}
				/>
			</div>
		</div>
	);
};

Utils.fixPrimary(Primary);

export const Basic = (): JSX.Element => {
	const tabs: Tab[] = [
		{ id: "first", title: "First", pane: () => <p>1st</p> },
		{ id: "second", title: "Second", pane: () => <p>2nd</p> },
	];

	return <Tabs children={tabs} />;
};

Utils.desc(Basic)(`
To begin, you need to provide an array of object with props: id, title and pane
via children:
`);

export const With_Switcher = (): JSX.Element => {
	const [tab, setTab] = useState("first");
	return (
		<div>
			<Switcher<string>
				value={tab}
				setValue={setTab}
				options={tabs.map((tab) => ({
					value: tab.id,
					label: tab.id,
				}))}
			/>
			<DivPx size={16} />
			<Tabs children={tabs} setActiveTab={setTab} activeTab={tab} />
		</div>
	);
};

Utils.desc(With_Switcher)(`
Tabs can also be use with
[Switcher](https://docs.moaijs.com/?path=/docs/components-switcher--primary)
to control tabs via buttons.
`);
