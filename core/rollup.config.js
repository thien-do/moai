/* eslint-env node */

import cssPrefix from "autoprefixer";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

/** @type {import("rollup-plugin-postcss").PostCSSPluginConf } */
const postcssOptions = {
	plugins: [cssPrefix],
	minimize: false,
	// Extracting is important because we should not force the consumers to
	// use a specific way to handle our CSS imports.
	// See: https://github.com/vercel/next.js/blob/master/errors/css-npm.md
	// Note that this is related to the bundled JS files
	extract: "bundle.css",
};

/**
 * Main bundling process
 * @type {import("rollup").RollupOptions}
 */
const bundleMain = {
	input: "src/index.ts",
	output: [
		{ file: "dist/cjs.js", format: "cjs" },
		{ file: "dist/esm.js", format: "esm" },
	],
	external: [
		"@tippyjs/react/headless",
		"focus-visible",
		"react-day-picker/DayPickerInput",
		"react-dom",
		"react-hot-toast",
		"react-icons/go",
		"react-icons/ri",
		"react-popper",
		"react",
		"react/jsx-runtime",
	],
	plugins: [
		del({ targets: ["dist"] }),
		copy({
			targets: [
				{ src: "font", dest: "dist" },
				{ src: "src/package.json", dest: "dist" },
			],
		}),
		postcss(postcssOptions),
		typescript({ useTsconfigDeclarationDir: true }),
	],
};

/**
 * Gallery bundling process
 * @type {import("rollup").RollupOptions}
 */
const bundleGallery = {
	input: "src/_gallery/gallery.tsx",
	output: [
		{ file: "dist/_gallery/cjs.js", format: "cjs" },
		{ file: "dist/_gallery/esm.js", format: "esm" },
	],
	external: [
		"react-dom",
		"react-icons/go",
		"react",
		"react/jsx-runtime",
		// References to "root" folder is considered as external so that
		// they will not be bundled inside the "gallery" module
		"..",
	],
	plugins: [
		postcss(postcssOptions),
		copy({
			targets: [
				{ src: "src/_gallery/package.json", dest: "dist/_gallery" },
			],
		}),
		typescript({}),
	],
};

export default [bundleMain, bundleGallery];
