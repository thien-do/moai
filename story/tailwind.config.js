module.exports = {
	purge: ["./src/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		lineHeight: {
			"16": "16px",
			"24": "24px",
			"32": "32px",
		},
		spacing: {
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
