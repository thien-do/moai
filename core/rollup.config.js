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
	input: "src/components/index.ts",
	output: [
		{ file: "dist/index.js", format: "cjs" },
		{ file: "dist/esm.js", format: "esm" },
	],
	external: [
		"@tippyjs/react/headless",
		"focus-visible",
		"react-dom",
		"react-hot-toast",
		"react-popper",
		"react",
		"react/jsx-runtime",
		"react-day-picker/DayPickerInput",
	],
	plugins: [
		del({ targets: ["dist"] }),
		copy({ targets: [{ src: "src/font", dest: "dist" }] }),
		postcss(postcssOptions),
		// "components" should only use code inside itself (no reference
		// to "gallery") so it's better to place the types right there
		typescript({}),
	],
};

/**
 * Gallery bundling process
 * @type {import("rollup").RollupOptions}
 */
const bundleGallery = {
	input: "src/gallery/index.tsx",
	output: [
		{ file: "dist/gallery/index.js", format: "cjs" },
		{ file: "dist/gallery/esm.js", format: "esm" },
	],
	external: [
		"react",
		"react/jsx-runtime",
		// References to "components" folder is considered as external so that
		// they will not be bundled inside the "gallery" module
		"../../components",
		"../components",
	],
	plugins: [
		postcss(postcssOptions),
		copy({
			targets: [
				{
					src: "src/gallery/package.json",
					dest: "dist/gallery/package.json",
				},
			],
		}),
		typescript({}),
	],
};

export default [bundleMain, bundleGallery];
