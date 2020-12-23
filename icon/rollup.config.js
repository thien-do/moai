import svgr from "@svgr/rollup";
import path from "path";
import copy from "rollup-plugin-copy";
import url from "url";
import { PROJECTS } from "./projects";
// import { terser } from "rollup-plugin-terser";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const src = path.resolve(here, "src");
const dist = path.resolve(here, "dist");

/**
 * Make RollupOptions for an icon set
 * @returns {import("rollup").RollupOptions}
 */
const makeOptions = (project) => ({
	input: path.resolve(src, project.id, "index.js"),
	output: { dir: path.resolve(dist, project.id), format: "esm" },
	plugins: [svgr()],
});

const options = PROJECTS.map(makeOptions);

const copyOptions = {
	targets: [{ src: path.resolve(src, "package.json"), dest: "dist/" }],
};

options.push({
	input: path.resolve(src, "index.js"),
	output: { dir: dist, format: "esm" },
	plugins: [copy(copyOptions)],
});

export default options;
