import svgr from "@svgr/rollup";
import copy from "rollup-plugin-copy";

/** @type {import("rollup").RollupOptions} */
const options = {
	input: "src/index.ts",
	output: { dir: "dist", format: "esm" },
	plugins: [
		svgr(),
		copy({ targets: [{ src: "package.json", dest: "dist/" }] }),
	],
};

export default options;
