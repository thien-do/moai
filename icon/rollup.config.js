import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy";
import { PROJECTS } from "./projects.mjs";
import del from "rollup-plugin-delete";
import execute from "rollup-plugin-execute";
import fs from "fs";

/**
 * @type {import("rollup").RollupOptions}
 */
const preProcess = {
	input: "src/dummy.js",
	output: [{ file: "dist/dummy.js" }],
	plugins: [
		del({ targets: ["dist", "src/generated"] }),
		execute("node ./scripts/generate.mjs", true),
	],
};

/**
 * Main process for each project
 *
 * @param {typeof PROJECTS[0]} project
 * @returns {import("rollup").RollupOptions}
 */
const makeProjectMain = (project) => {
	const src = `src/generated/${project.id}`;
	const dist = `dist/${project.id}`;
	return {
		input: `${src}/index.js`,
		output: [
			{ dir: `${dist}/esm`, format: "esm" },
			{ dir: `${dist}/cjs`, format: "cjs" },
		],
		external: ["react"],
		plugins: [
			svgr(),
			copy({ targets: [{ src: "src/package.json", dest: dist }] }),
		],
	};
};

/**
 * @type {import("rollup").RollupOptions}
 */
const postProcess = (() => {
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

	return {
		input: "src/dummy.js",
		output: [{ file: "dist/dummy.js" }],
		plugins: [
			deleteSelf,
			execute("tsc --project .", true),
			copy({ targets: [{ src: "package.json", dest: "dist" }] }),
		],
	};
})();

module.exports = [preProcess, ...PROJECTS.map(makeProjectMain), postProcess];
