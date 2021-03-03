import { DivPx } from "..";
import { GalleryButtonFunction } from "./button/func";
import { GalleryButtonSize } from "./button/size";
import { GalleryButtonStyle } from "./button/style";
import { GalleryDialog } from "./dialog";
import { GalleryProgress } from "./feedback/progress";
import { GalleryTag } from "./feedback/tag";
import { GalleryFeedbackToast } from "./feedback/toast";
import { GalleryTooltip } from "./feedback/tooltip";
import { GalleryPagination } from "./pagination";
import { GalleryPane } from "./pane";
import { GallerySection } from "./section/section";
import { GallerySelectionCheckbox } from "./selection/checkbox";
import { GallerySelectionSelect } from "./selection/select";
import s from "./styles.module.css";
import { GalleryTabDefault, GalleryTabFlat, GalleryTabHeight } from "./tab";
import { GalleryTable } from "./table/table";
import { GalleryTextArea } from "./text/area";
import { GalleryTextBase } from "./text/base";
import { GalleryTextSize } from "./text/size";
import { GalleryTextType } from "./text/type";

export const Gallery = () => (
	<div>
		<GallerySection title="Buttons">
			<GalleryButtonStyle />
			<GalleryButtonSize />
			<GalleryButtonFunction />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Text fields">
			<GalleryTextBase />
			<div>
				<GalleryTextSize />
				<DivPx size={8} />
				<GalleryPagination />
			</div>
			<div className={s.flex}>
				<div className={s.flex1} children={<GalleryTextType />} />
				<DivPx size={16} />
				<div className={s.flex1} children={<GalleryTextArea />} />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Selection controls">
			<GallerySelectionSelect />
			<GallerySelectionCheckbox />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Feedback">
			<GalleryFeedbackToast />
			<GalleryTooltip />
			<div>
				<GalleryTag />
				<DivPx size={16} />
				<GalleryProgress />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Container">
			<GalleryDialog />
			<GalleryPane />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Tabs">
			<GalleryTabDefault />
			<GalleryTabFlat />
			<GalleryTabHeight />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Table">
			<div className={s.colFull}>
				<GalleryTable />
			</div>
		</GallerySection>
	</div>
);
