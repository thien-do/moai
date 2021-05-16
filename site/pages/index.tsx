import { background, Border, DivPx, Paragraph } from "@moai/core";
import { Gallery, GallerySection } from "@moai/gallery";
import "@moai/gallery/dist/bundle.css";
import { Hero } from "../components/hero/hero";
import { Toolbar } from "../components/toolbar/toolbar";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className={s.container}>
		<div className={[background.weak].join(" ")}>
			<div className={s.content} children={<Hero />} />
			<Border color="strong" />
		</div>
		<div className={[background.strong, s.gallery, s.content].join(" ")}>
			<Toolbar />
			<DivPx size={32} />
			<Gallery />
			<DivPx size={32} />
			<GallerySection title="Icons">
				<Paragraph>
					<span>Moai is fully compatible with </span>
					<a
						href="https://react-icons.github.io/react-icons/"
						target="_blank"
						rel="noreferrer"
						children="react-icons"
					/>
					<span>!</span>
				</Paragraph>
			</GallerySection>
		</div>
	</div>
);

export default Index;
