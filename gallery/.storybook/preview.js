import "@moai/core/dist/index.css";
import { GalleryToolbar} from "../src/toolbar/toolbar";
import "../src/index";

const Decorator = (Story) => (
	<div>
		<GalleryToolbar />
		<Story />
	</div>
);

export const decorators = [Decorator];

export const parameters = {};
