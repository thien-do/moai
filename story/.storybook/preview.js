import "../../core/font/font.css";
import "../../core/src/index";
import "./tailwind.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "padded",
	backgrounds: {
		grid: {
			cellSize: 16,
			opacity: 0.2,
			cellAmount: 5,
		},
	},
	darkMode: {
		stylePreview: true,
	},
};
