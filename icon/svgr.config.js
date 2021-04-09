/* eslint-env node */

module.exports = {
	replaceAttrValues: {
		// Blueprint
		"#000": "currentColor",
		"#5C7080": "currentColor",
		"#10161A": "currentColor",
		"#182026": "currentColor",
		// Hero icons
		"#4A5568": "currentColor",
		"#374151": "currentColor",
		"#4B5563": "currentColor",
	},
	// So we can scale the icon via width and height. This is better than
	// SVGO's "removeViewBox" alone since it forces "viewBox" to be defined
	icon: true,
};
