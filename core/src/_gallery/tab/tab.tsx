import { Paragraph, Tab, Tabs } from "..";

const Second = () => (
	<Paragraph>
		Second tab
		<br />
		<br />
		Lorem ipsum dolor sit amet
	</Paragraph>
);

const First = () => (
	<Paragraph>
		First tab
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et.
	</Paragraph>
);

const Third = () => <Paragraph>Third tab</Paragraph>;

const tabs: Tab[] = [
	{ id: "1", title: "First", pane: First },
	{ id: "2", title: "Second", pane: Second },
	{ id: "3", title: "Third", pane: Third },
];

export const GalleryTabDefault = () => <Tabs children={tabs} />;

export const GalleryTabFlat = () => (
	<Tabs children={tabs} style={Tabs.styles.flat} />
);

export const GalleryTabHeight = () => (
	<div style={{ height: 240 }}>
		<Tabs children={tabs} fullHeight />
	</div>
);
