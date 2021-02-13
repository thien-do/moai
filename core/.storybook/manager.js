import { addons } from "@storybook/addons";
import "../src/global/global";
import "../font/remote.css";
import { storyTheme } from "./theme";

addons.setConfig({
	initialActive: "addons",
	previewTabs: {
		"storybook/docs/panel": "Docs",
		canvas: {
			hidden: true,
			disabled: true,
		},
	},
	theme: storyTheme,
});
