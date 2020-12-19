import { storiesOf } from "@storybook/react";
import { GalleryButton } from "./button";
import { GalleryButtonGroup } from "./button-group";
import { GalleryProgress } from "./progress";

const Gallery = () => (
	<div className="space-y-16">
		<GalleryButton />
		<GalleryButtonGroup />
		<GalleryProgress />
	</div>
);

storiesOf("Gallery", module).add("Main", Gallery);
