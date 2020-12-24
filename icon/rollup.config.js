import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy";
import { terser } from "rollup-plugin-terser";
import { PROJECTS } from "./projects.mjs";

/**
 * Create Rollup Options for a project
 * @param {typeof PROJECTS[0]} project
 * @returns {import("rollup").RollupOptions}
 */
const makeOptions = (project) => {
	const dist = `dist/${project.id}`;
	return {
		input: [`src/${project.id}/index.js`],
		output: [
			{
				dir: `${dist}/esm`,
				format: "esm",
			},
			{
				dir: `${dist}/cjs`,
				format: "cjs",
				exports: "named",
				plugins: [terser()],
			},
		],
		plugins: [
			svgr(),
			copy({
				targets: [{ src: "src/package.json", dest: dist }],
			}),
		],
	};
};

module.exports = PROJECTS.map(makeOptions);
