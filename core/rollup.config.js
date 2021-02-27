import cssPrefix from "autoprefixer";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

const dist = pkg.main.split("/")[0];

/** @type {import("rollup-plugin-postcss").PostCSSPluginConf } */
const postcssOptions = {
	plugins: [cssPrefix],
	minimize: false,
	// Extracting is important because we should not force the consumers to
	// use a specific way to handle our CSS imports.
	// See: https://github.com/vercel/next.js/blob/master/errors/css-npm.md
	extract: "bundle.css",
};

/**
 * Main bundling process
 */
const bundleMain = (() => {
	/** @type {import("rollup").RollupOptions["external"]} */
	const external = [
		"@tippyjs/react/headless",
		"focus-visible",
		"react-dom",
		"react-hot-toast",
		"react-popper",
		"react",
		"react/jsx-runtime",
		"react-day-picker/DayPickerInput",
	];

	/** @type {import("rollup").RollupOptions} */
	const options = {
		input: "src/index.ts",
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "esm" },
		],
		external: external,
		plugins: [
			del({ targets: [dist] }),
			copy({ targets: [{ src: "./src/font", dest: dist }] }),
			postcss(postcssOptions),
			typescript({ useTsconfigDeclarationDir: true }),
		],
	};

	return options;
})();

/**
 * Gallery bundling process
 */
const bundleGallery = (() => {
	/** @type {import("rollup").RollupOptions["external"]} */
	const external = ["..", "react", "react/jsx-runtime"];

	/** @type {import("rollup").RollupOptions} */
	const options = {
		input: "src/gallery/index.tsx",
		// It's too complicated to support both CJS and ESM here as we need
		// another package.json to instruct the end user's bundler
		output: { file: `${dist}/gallery/index.js`, format: "cjs" },
		external: external,
		plugins: [
			postcss(postcssOptions),
			typescript({ useTsconfigDeclarationDir: true }),
		],
	};

	return options;
})();

export default [bundleMain, bundleGallery];
