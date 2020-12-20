import { Paragraph, Tabs } from "../../../core/src";

const Second = () => (
	<Paragraph>
		Second tab
		<br />
		<br />
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et.
	</Paragraph>
);

const First = () => (
	<Paragraph>
		First tab
		<br />
		<br />
		Lorem ipsum dolor sit amet
	</Paragraph>
);

const Third = () => <Paragraph>Third tab</Paragraph>;

export const GalleryTab = () => (
	<div>
		<Tabs
			children={[
				{ id: "1", title: "First", pane: First },
				{ id: "2", title: "Second", pane: Second },
				{ id: "3", title: "Third", pane: Third },
			]}
		/>
	</div>
);
