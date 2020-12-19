import { storiesOf } from "@storybook/react";
import { GalleryButton } from "./button";
import { GalleryButtonGroup } from "./button-group";
import { GalleryButtonSize } from "./button-size";
import { GalleryProgress } from "./progress";

const Pane = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div className="p-8" children={children} />
);

const Gallery = () => (
	<div>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryButton />} />
			<Pane children={<GalleryButtonGroup />} />
			<Pane children={<GalleryButtonSize />} />
		</div>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryProgress />} />
		</div>
	</div>
);

storiesOf("Gallery", module).add("Main", Gallery, {
	layout: "fullscreen",
});
