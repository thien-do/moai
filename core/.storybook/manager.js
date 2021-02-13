import { addons } from "@storybook/addons";
import "../src/global/global";
import theme from "./theme";

addons.setConfig({
	initialActive: "addons",
	previewTabs: {
		"storybook/docs/panel": "Docs",
		canvas: {
			hidden: true,
			disabled: true,
		},
	},
	theme: theme,
});
