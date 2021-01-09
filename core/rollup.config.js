import replace from "@rollup/plugin-replace";
import cssPrefix from "autoprefixer";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import fs from "fs";

/**
 * Main bundling process
 */
const bundleMain = (() => {
	/** @type {import("rollup-plugin-postcss").PostCSSPluginConf } */
	const postcssOptions = {
		plugins: [cssPrefix],
		minimize: false,
		// Extracting is important because we should not force the
		// consumers to use a specific way to import CSS
		extract: true,
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
	];

	/** @type {import("rollup").RollupOptions} */
	const options = {
		input: "src/index.ts",
		output: [
			{ file: "dist/cjs.js", format: "cjs" },
			{ file: "dist/esm.js", format: "esm" },
		],
		external: external,
		plugins: [
			// del({ targets: ["dist"] }),
			postcss(postcssOptions),
			typescript({ useTsconfigDeclarationDir: true }),
		],
	};

	return options;
})();

/**
 * Declaration bundling process
 *
 * Bundling declarations manually because TS doesn't support this yet
 * See: https://github.com/microsoft/TypeScript/issues/4433
 */
const bundleDts = (() => {
	/**
	 * Not really sure why "import index.css" is left in index.d.ts. It's not
	 * necessary but making the DTS plugin to fail. We simply need to remove it.
	 *
	 * @type {import("@rollup/plugin-replace").RollupReplaceOptions}
	 */
	const removeCSS = { 'import "./style/style";': "", delimiters: ["", ""] };

	/** @type {import("rollup").RollupOptions} */
	const options = {
		input: "./dist/types/index.d.ts",
		output: [{ file: "./dist/index.d.ts" }],
		plugins: [replace(removeCSS), dts()],
	};

	return options;
})();

/**
 * Static bundling process. Basically re-organizing the generated distribution.
 */
const bundleStatic = (() => {
	/** @type {import("rollup-plugin-copy").Target[]} */
	const copyTargets = [
		{ src: "./package.json", dest: "./dist" },
		{ src: "./font", dest: "./dist" },
		{ src: "./dist/cjs.css", dest: "./dist", rename: "index.css" },
	];

	/** @type {import("rollup-plugin-delete").Options["targets"]} */
	const deleteTargets = ["./dist/cjs.css", "./dist/esm.css", "./dist/types"];

	/**
	 * A custom plugin to throw away the main (dummy) output of this process.
	 * This cannot be done with the "copyTargets" above because the dummy is
	 * the build output
	 * - See: https://stackoverflow.com/a/59768507/6621213
	 *
	 * @type {import("rollup").Plugin}
	 */
	const deleteSelf = {
		name: "Delete self",
		writeBundle(options) {
			fs.unlinkSync(options.file);
		},
	};

	/** @type {import("rollup").RollupOptions} */
	const options = {
		// We don't really need to "compile" any code here. We only want a
		// separated bundle to run some post-processing plugins
		input: "./src/dummy.js",
		output: [{ file: "./dist/dummy.js" }],
		plugins: [
			copy({ targets: copyTargets, hook: "buildStart" }),
			del({ targets: deleteTargets, hook: "buildEnd" }),
			deleteSelf,
		],
	};

	return options;
})();

export default [bundleMain, bundleDts, bundleStatic];
