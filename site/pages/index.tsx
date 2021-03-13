import { background, Border, DivPx } from "@moai/core";
import { Gallery, GallerySection } from "@moai/core/dist/_gallery";
import "@moai/core/dist/_gallery/bundle.css";
import { Hero } from "../components/hero/hero";
import { GalleryIcon } from "../components/icon/icon";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className={s.container}>
		ahihi
		<div className={[background.weak].join(" ")}>
			<div className={s.content} children={<Hero />} />
			<Border color="strong" />
		</div>
		<div className={[background.strong, s.gallery, s.content].join(" ")}>
			<Gallery />
			<DivPx size={32} />
			<GallerySection title="Icons">
				<div style={{ gridColumn: "1 / -1" }}>
					<GalleryIcon />
				</div>
			</GallerySection>
		</div>
	</div>
);

export default Index;
