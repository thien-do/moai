import { borderColor, DivPx, ThemeSwitcher } from "@moai/core";
import { GallerySection, IconGallery, WidgetGallery } from "@moai/gallery";
import "@moai/gallery/index.css";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className={s.container}>
		<div className={[s.header, borderColor.strong].join(" ")}>
			<ThemeSwitcher />
		</div>
		<div className={s.body}>
			<WidgetGallery />
			<DivPx size={32} />
			<GallerySection title="Icons">
				<IconGallery />
			</GallerySection>
		</div>
	</div>
);

export default Index;
