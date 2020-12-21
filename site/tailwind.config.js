module.exports = {
	purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
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
