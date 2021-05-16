import { Gallery } from "@moai/gallery";
import "@moai/gallery/dist/bundle.css";

const GalleryPage = (): JSX.Element => (
	<div>
		<p>
			This page imports the whole Component Gallery of Moai. It should be
			the biggest page here.
		</p>
		<Gallery />
	</div>
);

export default GalleryPage;
