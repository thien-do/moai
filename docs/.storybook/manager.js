import { addons } from "@storybook/addons";
// Use the remote font since the manager is not set up to import local fonts
// (i.e. woff2 files)
import "../../core/font/remote.css";

addons.setConfig({
	initialActive: "addons",
	previewTabs: {
		"storybook/docs/panel": "Docs",
		canvas: { hidden: true, disabled: true },
	},
});
