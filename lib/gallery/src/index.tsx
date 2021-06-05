import { DivPx, scrollbar } from "../../core/src";
import { GalleryButton1 } from "./button-1";
import { GalleryButton2 } from "./button-2";
import { GalleryContainerPane } from "./container/pane";
import { GalleryDialog } from "./dialog";
import { GalleryFeedbackProgress } from "./feedback/progress";
import { GalleryTag } from "./tag";
import { GalleryToast } from "./toast";
import { GalleryFeedbackTooltip } from "./feedback/tooltip";
import { GalleryInput1 } from "./input-1";
import { GalleryInput2 } from "./input-2";
import { GallerySection } from "./section/section";
import { GallerySelectionCheckbox } from "./selection/checkbox";
import { GallerySelectionPagination } from "./selection/pagination";
import { GallerySelect } from "./select";
import s from "./styles.module.css";
import { GalleryTab1, GalleryTab2 } from "./tab";
import { GalleryTable } from "./table/table";
import { GalleryIcon } from "./icon/icon";

export { GallerySection };

export const Gallery = (): JSX.Element => (
	<div className={scrollbar.custom}>
		<GallerySection title="Buttons">
			<GalleryButton1 />
			<GalleryButton2 />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Text fields">
			<GalleryInput1 />
			<GalleryInput2 />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Selection controls">
			<div>
				<GallerySelect />
				<DivPx size={8} />
				<GallerySelectionPagination />
			</div>
			<GallerySelectionCheckbox />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Feedback">
			<GalleryToast />
			<GalleryFeedbackTooltip />
			<div>
				<GalleryTag />
				<DivPx size={16} />
				<GalleryFeedbackProgress />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Container">
			<GalleryDialog />
			<GalleryContainerPane />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Tabs">
			<GalleryTab1 />
			<GalleryTab2 />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Table">
			<div className={s.colFull}>
				<GalleryTable />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Icon">
			<div className={s.colFull}>
				<GalleryIcon />
			</div>
		</GallerySection>
	</div>
);
