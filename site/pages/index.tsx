import { DivPx } from "@moai/core";
import { Gallery, GallerySection } from "@moai/core/dist/_gallery";
import "@moai/core/dist/_gallery/bundle.css";
import { GalleryIcon } from "../components/icon/icon";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className={s.container}>
		<Gallery />
		<DivPx size={32} />
		<GallerySection title="Icons">
			<div style={{ gridColumn: "1 / -1" }}>
				<GalleryIcon />
			</div>
		</GallerySection>
	</div>
);

export default Index;
