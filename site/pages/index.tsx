import { border, DivPx, ThemeSwitcher } from "@moai/core";
import { IconGallery } from "../components/icon/icon";
import { GallerySection } from "../components/section/section";
import { WidgetGallery } from "../components/widget/widget";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className={s.container}>
		<div className={[s.header, border.strong].join(" ")}>
			<ThemeSwitcher />
		</div>
		<div className={s.body}>
			<WidgetGallery />
			<DivPx size={32} />
			<GallerySection title="Icons">
				<div style={{ gridColumn: "1 / -1" }}>
					<IconGallery />
				</div>
			</GallerySection>
		</div>
	</div>
);

export default Index;
