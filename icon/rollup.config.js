import svgr from "@svgr/rollup";
import path from "path";
import url from "url";
import { walkLeafDirs } from "./utilities/walk";
import { terser } from "rollup-plugin-terser";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const src = path.resolve(here, "src");
/** @type {string[]} */
const sets = [];
walkLeafDirs((name) => sets.push(name), src);

/**
 * Make RollupOptions for an icon set
 * @param {string} set
 * @returns {import("rollup").RollupOptions}
 */
const makeOptions = (set) => {
	const group = set.replace(`${src}/`, "");
	return {
		input: path.resolve(set, "index.js"),
		output: { dir: path.resolve("dist", group), format: "esm" },
		plugins: [svgr(), terser()],
	};
};

export default sets.map(makeOptions);
