import { Paragraph, Tab, Tabs } from "@moai/core";
import { Shot } from "./shot/shot";

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

export const GalleryTab1 = (): JSX.Element => (
	<Shot>
		<Tabs children={tabs} />
	</Shot>
);

export const GalleryTab2 = (): JSX.Element => (
	<Shot>
		<Tabs children={tabs} style={Tabs.styles.flat} />
	</Shot>
);
