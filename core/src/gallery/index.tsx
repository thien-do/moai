import { GallerySection } from "./section/section";
import s from "./styles.module.css";
import { GalleryCheckbox } from "./checkbox";
import { GalleryDialog } from "./dialog";
import { GalleryInputBase } from "./input-base";
import { GalleryInputSize } from "./input-size";
import { GalleryInputType } from "./input-type";
import { GalleryPagination } from "./pagination";
import { GalleryPane } from "./pane";
import { GalleryProgress } from "./progress";
import { GallerySelect } from "./select";
import { GalleryTabDefault, GalleryTabFlat, GalleryTabHeight } from "./tab";
import { GalleryTable } from "./table/table";
import { GalleryTag } from "./tag";
import { GalleryTextArea } from "./text-area";
import { GalleryToast } from "./toast";
import { GalleryTooltip } from "./tooltip";
import { GalleryButtonStyle } from "./button/style";
import { GalleryButtonSize } from "./button/size";
import { GalleryButtonFunction } from "./button/func";
import { DivPx } from "../components";

export const Gallery = () => (
	<div>
		<GallerySection title="Buttons">
			<GalleryButtonStyle />
			<GalleryButtonSize />
			<GalleryButtonFunction />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Text fields">
			<GalleryInputBase />
			<div>
				<GalleryInputSize />
				<DivPx size={8} />
				<GalleryPagination />
			</div>
			<div className={s.flex}>
				<div className={s.flex1} children={<GalleryInputType />} />
				<DivPx size={16} />
				<div className={s.flex1} children={<GalleryTextArea />} />
			</div>
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Selection controls">
			<GallerySelect />
			<GalleryCheckbox />
		</GallerySection>
		<DivPx size={32} />
		<GallerySection title="Feedback">
			<GalleryToast />
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
