import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import { PROJECTS } from "./projects";

/**
 * Make RollupOptions for an icon set
 * @returns {import("rollup").RollupOptions}
 */
const makeOptions = (project) => ({
	input: `src/${project.id}/index.js`,
	output: { dir: `dist/${project.id}`, format: "esm" },
	plugins: [svgr({ replaceAttrValues: project.replace }), terser()],
});

const options = PROJECTS.map(makeOptions);

export default options;
