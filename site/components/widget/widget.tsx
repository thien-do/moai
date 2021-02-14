import { GallerySection } from "../section/section";
import { Button1Gallery } from "./button-1";
import { Button2Gallery } from "./button-2";
import { Button3Gallery } from "./button-3";
import { CheckboxGallery } from "./checkbox";
import { DialogGallery } from "./dialog";
import { InputBaseGallery } from "./input-base";
import { InputSizeGallery } from "./input-size";
import { InputTypeGallery } from "./input-type";
import { PaginationGallery } from "./pagination";
import { PaneGallery } from "./pane";
import { ProgressGallery } from "./progress";
import { SelectGallery } from "./select";
import { TabDefaultGallery, TabFlatGallery, TabHeightGallery } from "./tab";
import { TableGallery } from "./table";
import { TagGallery } from "./tag";
import { TextAreaGallery } from "./text-area";
import { ToastGallery } from "./toast";
import { TooltipGallery } from "./tooltip";

export const WidgetGallery = () => (
	<div className="space-y-32">
		<GallerySection title="Buttons">
			<Button1Gallery />
			<Button3Gallery />
			<Button2Gallery />
		</GallerySection>
		<GallerySection title="Text fields">
			<InputBaseGallery />
			<div className="space-y-8">
				<InputSizeGallery />
				<PaginationGallery />
			</div>
			<div className="flex space-x-16">
				<div className="flex-1" children={<InputTypeGallery />} />
				<div className="flex-1" children={<TextAreaGallery />} />
			</div>
		</GallerySection>
		<GallerySection title="Selection controls">
			<SelectGallery />
			<CheckboxGallery />
		</GallerySection>
		<GallerySection title="Feedback">
			<ToastGallery />
			<TooltipGallery />
			<div className="space-y-16">
				<TagGallery />
				<ProgressGallery />
			</div>
		</GallerySection>
		<GallerySection title="Container">
			<DialogGallery />
			<PaneGallery />
		</GallerySection>
		<GallerySection title="Tabs">
			<TabDefaultGallery />
			<TabFlatGallery />
			<TabHeightGallery />
		</GallerySection>
		<GallerySection title="Table">
			<div className="col-span-full">
				<TableGallery />
			</div>
		</GallerySection>
	</div>
);
