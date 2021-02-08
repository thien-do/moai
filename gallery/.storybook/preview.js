import "@moai/core/dist/index.css";
import "@moai/core/dist/font/local.css";
import { GalleryToolbar } from "../src/toolbar/toolbar";
import "../src/index";

const Decorator = (Story) => (
	<div className="px-16 pb-16">
		<GalleryToolbar />
		<Story />
	</div>
);

export const decorators = [Decorator];

export const parameters = {
	layout: "fullscreen",
};
