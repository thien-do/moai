module.exports = {
	purge: {
		enabled: true,
		content: ["./src/**/*.tsx"]
	},
	darkMode: false,
	theme: {
		lineHeight: {
			"16": "16px",
			"24": "24px",
			"32": "32px",
		},
		spacing: {
			"4": "4px",
			"8": "8px",
			"16": "16px",
			"32": "32px",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
