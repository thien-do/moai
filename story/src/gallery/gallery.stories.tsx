import { storiesOf } from "@storybook/react";
import { GalleryButton1 } from "./button-1";
import { GalleryButton2 } from "./button-2";
import { GalleryButton3 } from "./button-3";
import { GalleryCheckbox } from "./checkbox";
import { GalleryInput1 } from "./input-1";
import { GalleryInput2 } from "./input-2";
import { GalleryProgress } from "./progress";
import { GalleryRadio } from "./radio";

const Pane = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div className="p-8" children={children} />
);

const Gallery = () => (
	<div>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryButton1 />} />
			<Pane children={<GalleryButton2 />} />
			<Pane children={<GalleryButton3 />} />
		</div>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryInput1 />} />
			<Pane children={<GalleryInput2 />} />
			<Pane children={<GalleryCheckbox />} />
			<Pane children={<GalleryRadio />} />
		</div>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryProgress />} />
		</div>
	</div>
);

storiesOf("Gallery", module).add("Main", Gallery, {
	layout: "fullscreen",
});
