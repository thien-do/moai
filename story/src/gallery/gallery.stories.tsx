import { storiesOf } from "@storybook/react";
import { GalleryButton1 } from "./button-1";
import { GalleryButton2 } from "./button-2";
import { GalleryButton3 } from "./button-3";
import { GalleryCheckbox } from "./checkbox";
import { GalleryDialog } from "./dialog";
import { GalleryIcon } from "./icon";
import { GalleryInput1 } from "./input-1";
import { GalleryInput2 } from "./input-2";
import { GalleryMenu } from "./menu";
import { GalleryProgress } from "./progress";
import { GalleryRadio } from "./radio";
import { GallerySelect } from "./select";
import { GalleryTab } from "./tab";
import { GalleryTextArea } from "./text-area";

const Pane = ({ children }: { children: React.ReactNode }): JSX.Element => (
	<div className="p-8" children={children} />
);

const Heading = ({ children }: { children: string }): JSX.Element => (
	<h2 className="px-16 pt-16 text-lg font-semibold">{children}</h2>
);

const Gallery = () => (
	<div>
		<Heading>Buttons</Heading>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryButton1 />} />
			<Pane children={<GalleryButton2 />} />
			<Pane children={<GalleryButton3 />} />
		</div>
		<Heading>Text boxes</Heading>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryInput1 />} />
			<Pane children={<GalleryInput2 />} />
			<Pane children={<GalleryTextArea />} />
		</div>
		<Heading>Other controls</Heading>
		<div className="flex flex-wrap p-8">
			<Pane children={<GallerySelect />} />
			<Pane children={<GalleryCheckbox />} />
			<Pane children={<GalleryRadio />} />
		</div>
		<Heading>Progress indicators</Heading>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryProgress />} />
		</div>
		<Heading>Containers</Heading>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryDialog />} />
			<Pane children={<GalleryMenu />} />
			<Pane children={<GalleryTab />} />
		</div>
		<Heading>Icons</Heading>
		<div className="flex flex-wrap p-8">
			<Pane children={<GalleryIcon />} />
		</div>
	</div>
);

storiesOf("Gallery", module).add("Main", Gallery, {
	layout: "fullscreen",
});
