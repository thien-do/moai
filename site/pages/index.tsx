import { BackgroundSwitcher, border, DivPx, ThemeSwitcher } from "@moai/core";
import { IconGallery } from "../components/icon/icon";
import { GallerySection } from "../components/section/section";
import { WidgetGallery } from "../components/widget/widget";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className="px-16">
		<div
			className={[
				"sticky top-0 flex space-x-16 py-16",
				s.header,
				border.strong,
			].join(" ")}
		>
			<ThemeSwitcher />
			<BackgroundSwitcher />
		</div>
		<div className="py-32">
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
