import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

/** @type {import("rollup").RollupOptions} */
const options = {
	input: "src/index.ts",
	output: [
		{ dir: "dist/esm", format: "esm" },
		{ dir: "dist/cjs", format: "cjs" },
	],
	plugins: [
		typescript(),
		copy({
			targets: [{ src: "package.json", dest: "dist/" }],
		}),
	],
};

export default options;
