import "@moai/gallery/dist/bundle.css";
import dynamic from "next/dynamic";

const DynamicGallery = dynamic<Record<string, never>>(() =>
	import("@moai/gallery").then((mod) => mod.Gallery)
);

const GalleryPage = (): JSX.Element => (
	<div>
		<p>
			This page
			<span> </span>
			<a
				href="https://nextjs.org/docs/advanced-features/dynamic-import"
				target="_blank"
				rel="noreferrer"
				children="DYNAMICALLY"
			/>
			<span> </span>
			imports the whole Component Gallery of Moai. It should be the same
			size as the &quot;empty&quot; page due to dynamic imports.
		</p>
		<DynamicGallery />
	</div>
);

export default GalleryPage;
