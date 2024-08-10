import { scrollbar } from "../core";
import { GalleryButton1 } from "./button-1";
import { GalleryButton2 } from "./button-2";
import { GalleryCheckbox } from "./checkbox";
import { GalleryDialog } from "./dialog";
import { GalleryIcon } from "./icon/icon";
import { GalleryInput1 } from "./input-1";
import { GalleryInput2 } from "./input-2";
import { GallerPagination } from "./pagination";
import { GalleryContainerPane } from "./pane";
import { GalleryProgress } from "./progress";
import { GallerySection } from "./section/section";
import { GallerySelect } from "./select";
import s from "./styles.module.css";
import { GalleryTab1, GalleryTab2 } from "./tab";
import { GalleryTable } from "./table/table";
import { GalleryTag } from "./tag";
import { GalleryToast } from "./toast";
import { GalleryTooltip } from "./tooltip";

export const Gallery = (): JSX.Element => (
  <div className={[scrollbar.custom, s.rows].join(" ")} style={{ gap: 32 }}>
    <GallerySection title="Icons">
      <div className={s.colFull}>
        <GalleryIcon />
      </div>
    </GallerySection>
    <GallerySection title="Buttons">
      <GalleryButton1 />
      <GalleryButton2 />
    </GallerySection>
    <GallerySection title="Text fields">
      <GalleryInput1 />
      <GalleryInput2 />
    </GallerySection>
    <GallerySection title="Selection controls">
      <div className={s.rows}>
        <GallerySelect />
        <GallerPagination />
      </div>
      <GalleryCheckbox />
    </GallerySection>
    <GallerySection title="Feedback">
      <div className={s.rows} style={{ gap: 16 }}>
        <GalleryToast />
        <GalleryTag />
      </div>
      <div className={s.rows} style={{ gap: 16 }}>
        <GalleryTooltip />
        <GalleryProgress />
      </div>
    </GallerySection>
    <GallerySection title="Container">
      <GalleryDialog />
      <GalleryContainerPane />
    </GallerySection>
    <GallerySection title="Tabs">
      <GalleryTab1 />
      <GalleryTab2 />
    </GallerySection>
    <GallerySection title="Table">
      <div className={s.colFull}>
        <GalleryTable />
      </div>
    </GallerySection>
  </div>
);
