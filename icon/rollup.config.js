import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import { PROJECTS } from "./projects";

/**
 * Make RollupOptions for an icon set
 * @returns {import("rollup").RollupOptions}
 */
const makeOptions = (project) => ({
	input: `src/${project.id}/index.ts`,
	// @TODO: Add ESM output
	output: { dir: `dist/${project.id}`, format: "cjs" },
	plugins: [svgr(), terser()],
});

const options = PROJECTS.map(makeOptions);

export default options;
