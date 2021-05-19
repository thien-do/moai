import { addons } from "@storybook/addons";
// Manager is run on another process, which does not have complex setup (like
// one to handle CSS Modules) so here we should only import the global css
// directly
import "../core/src/style/reset.css";
import "../core/src/style/base.css";
// Use the remote font since the manager is not set up to import local fonts
// (i.e. woff2 files)
import "../core/font/remote.css";
import { storyTheme } from "./theme";

addons.setConfig({
	initialActive: "addons",
	previewTabs: {
		"storybook/docs/panel": "Docs",
		canvas: { hidden: true, disabled: true },
	},
	theme: storyTheme,
});
