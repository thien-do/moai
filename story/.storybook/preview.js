import "../../core/font/local.css";
import "../../core/src/index";
import "./tailwind.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	layout: "padded",
	backgrounds: {
		grid: {
			cellSize: 8,
			opacity: 0.2,
			cellAmount: 0,
		},
		values: [
			{ name: "gray-0 (Light default)", value: "#ffffff" },
			{ name: "gray-1 (Light dimmed)", value: "#fafafa" },
			{ name: "gray-8 (Dark default)", value: "#34353c" },
			{ name: "gray-9 (Dark dimmed)", value: "#27272a" },
		],
	},
	darkMode: {
		stylePreview: true,
	},
};
