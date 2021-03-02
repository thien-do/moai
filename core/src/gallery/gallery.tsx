import { GallerySection } from "./section/section";
import s from "./styles.module.css";
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
import { TableGallery } from "./table/table";
import { TagGallery } from "./tag";
import { TextAreaGallery } from "./text-area";
import { ToastGallery } from "./toast";
import { TooltipGallery } from "./tooltip";
import { ButtonStyleGallery } from "./button/style";
import { ButtonSizeGallery } from "./button/size";
import { ButtonFunctionGallery } from "./button/func";
import { DivPx } from "../components/div/div";

export const Gallery = () => (
	<div>
		<GallerySection title="Buttons">
			<ButtonStyleGallery />
			<ButtonSizeGallery />
			<ButtonFunctionGallery />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Text fields">
			<InputBaseGallery />
			<div>
				<InputSizeGallery />
				<DivPx size={8} />
				<PaginationGallery />
			</div>
			<div className={s.flex}>
				<div className={s.flex1} children={<InputTypeGallery />} />
				<DivPx size={16} />
				<div className={s.flex1} children={<TextAreaGallery />} />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Selection controls">
			<SelectGallery />
			<CheckboxGallery />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Feedback">
			<ToastGallery />
			<TooltipGallery />
			<div>
				<TagGallery />
				<DivPx size={16} />
				<ProgressGallery />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Container">
			<DialogGallery />
			<PaneGallery />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Tabs">
			<TabDefaultGallery />
			<TabFlatGallery />
			<TabHeightGallery />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Table">
			<div className={s.colFull}>
				<TableGallery />
			</div>
		</GallerySection>
	</div>
);
