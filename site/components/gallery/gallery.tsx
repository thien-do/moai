import { GalleryButton1 } from "./button-1";
import { GalleryButton2 } from "./button-2";
import { GalleryButton3 } from "./button-3";
import { GalleryCheckbox } from "./checkbox";
import { GalleryDialog } from "./dialog";
// import { GalleryIcon } from "./icon";
import { GalleryInput1 } from "./input-1";
import { GalleryInput2 } from "./input-2";
import { GalleryPagination } from "./pagination";
import { GalleryPane } from "./pane";
import { GalleryProgress } from "./progress";
import { GallerySelect } from "./select";
import { GalleryTab } from "./tab";
import { GalleryTable } from "./table";
import { GalleryTextArea } from "./text-area";
import { GalleryToast } from "./toast";

const Pane = ({
	fill,
	children,
}: {
	fill?: boolean;
	children: React.ReactNode;
}): JSX.Element => (
	<div
		className="p-8"
		style={{ width: fill ? "100%" : 288 }}
		children={children}
	/>
);

const Section = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}): JSX.Element => (
	<div className="flex flex-wrap border-0 p-8">
		<div className="p-8" style={{ width: 240 }}>
			<h2 className="text-xl font-semibold py-4 leading-24">{title}</h2>
		</div>
		<div className="flex flex-wrap w-full" style={{ maxWidth: 288 * 3 }}>
			{children}
		</div>
	</div>
);

export const Gallery = () => (
	<div className="mx-auto" style={{ maxWidth: 1200 }}>
		<Section title="Buttons">
			<Pane children={<GalleryButton1 />} />
			<Pane children={<GalleryButton3 />} />
			<Pane children={<GalleryButton2 />} />
		</Section>
		<Section title="Text boxes">
			<Pane children={<GalleryInput1 />} />
			<Pane children={<GalleryInput2 />} />
			<Pane children={<GalleryTextArea />} />
		</Section>
		<Section title="Selection controls">
			<Pane children={<GallerySelect />} />
			<Pane children={<GalleryCheckbox />} />
			<Pane children={<GalleryPagination />} />
		</Section>
		<Section title="Containers">
			<Pane children={<GalleryDialog />} />
			<Pane children={<GalleryPane />} />
			<Pane children={<GalleryTab />} />
		</Section>
		<Section title="Feedback">
			<Pane children={<GalleryToast />} />
			<Pane children={<GalleryProgress />} />
		</Section>
		<Section title="Tables">
			<Pane children={<GalleryTable />} fill />
		</Section>
		{/* <Section title="Icons">
			<Pane children={<GalleryIcon />} fill />
		</Section> */}
	</div>
);
