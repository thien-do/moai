import { create } from "@storybook/theming";

export const storyTheme = create({
	base: "light",

	colorPrimary: "hsl(199, 89%, 48%)", // highlight-5
	colorSecondary: "hsl(199, 89%, 48%)", // highlight-5

	// UI
	appBg: "hsl(235, 18%, 98%)", // gray-0
	appContentBg: "#ffffff", // white
	appBorderColor: "hsl(216, 12%, 77%)", // gray-2
	appBorderRadius: 2,

	// Typography
	fontBase: '"Inter var", sans-serif',

	// Text colors
	textColor: "hsl(216, 13%, 15%)", // gray-8
	textMutedColor: "hsl(220, 09%, 46%)", // gray-4

	brandTitle: "Moai UI kit",
	brandUrl: "https://moaijs.com",
});
