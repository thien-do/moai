const autoprefixer = require("autoprefixer");

/** @type {import("rollup-plugin-postcss").PostCssPluginOptions} */
const options = {
	plugins: [autoprefixer],
};

module.exports = options;
