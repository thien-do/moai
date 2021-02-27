import cssPrefix from "autoprefixer";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

/**
 * Main bundling process
 */
const bundleMain = (() => {
	/** @type {import("rollup-plugin-postcss").PostCSSPluginConf } */
	const postcssOptions = {
		plugins: [cssPrefix],
		minimize: false,
		// Extracting is important because we should not force the consumers to
		// use a specific way to handle our CSS imports.
		// See: https://github.com/vercel/next.js/blob/master/errors/css-npm.md
		extract: "index.css",
	};

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
		input: "src/components/index.ts",
		output: [
			{ file: "./dist/cjs.js", format: "cjs" },
			{ file: "./dist/esm.js", format: "esm" },
		],
		external: external,
		plugins: [
			del({ targets: ["./dist"] }),
			copy({ targets: [{ src: "./src/font", dest: "./dist" }] }),
			postcss(postcssOptions),
			typescript({ useTsconfigDeclarationDir: true }),
		],
	};

	return options;
})();

export default [bundleMain];
