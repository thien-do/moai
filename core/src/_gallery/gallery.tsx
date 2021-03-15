import { DivPx, scrollbar } from "..";
import { GalleryButtonFunction } from "./button/func";
import { GalleryButtonSize } from "./button/size";
import { GalleryButtonStyle } from "./button/style";
import { GalleryContainerDialog } from "./container/dialog";
import { GalleryContainerPane } from "./container/pane";
import { GalleryFeedbackProgress } from "./feedback/progress";
import { GalleryFeedbackTag } from "./feedback/tag";
import { GalleryFeedbackToast } from "./feedback/toast";
import { GalleryFeedbackTooltip } from "./feedback/tooltip";
import { GallerySection } from "./section/section";
import { GallerySelectionCheckbox } from "./selection/checkbox";
import { GallerySelectionPagination } from "./selection/pagination";
import { GallerySelectionSelect } from "./selection/select";
import s from "./styles.module.css";
import { GalleryTabDefault, GalleryTabFlat } from "./tab/tab";
import { GalleryTable } from "./table/table";
import { GalleryTextArea } from "./text/area";
import { GalleryTextBase } from "./text/base";
import { GalleryTextSize } from "./text/size";
import { GalleryTextType } from "./text/type";

export { GallerySection };

export const Gallery = (): JSX.Element => (
	<div className={scrollbar.custom}>
		<GallerySection title="Buttons">
			<GalleryButtonStyle />
			<GalleryButtonFunction />
			<GalleryButtonSize />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Text fields">
			<GalleryTextBase />
			<div className={s.flex}>
				<div className={s.flex1} children={<GalleryTextType />} />
				<DivPx size={16} />
				<div className={s.flex1} children={<GalleryTextArea />} />
			</div>
			<GalleryTextSize />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Selection controls">
			<div>
				<GallerySelectionSelect />
				<DivPx size={8} />
				<GallerySelectionPagination />
			</div>
			<GallerySelectionCheckbox />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Feedback">
			<GalleryFeedbackToast />
			<GalleryFeedbackTooltip />
			<div>
				<GalleryFeedbackTag />
				<DivPx size={16} />
				<GalleryFeedbackProgress />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Container">
			<GalleryContainerDialog />
			<GalleryContainerPane />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Tabs">
			<GalleryTabDefault />
			<GalleryTabFlat />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Table">
			<div className={s.colFull}>
				<GalleryTable />
			</div>
		</GallerySection>
	</div>
);
