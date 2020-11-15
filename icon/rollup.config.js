import typescript from "@rollup/plugin-typescript";

/** @type {import("rollup").RollupOptions} */
const options = {
	input: "src/index.ts",
	output: [
		{ dir: "dist/esm", format: "esm" },
		{ dir: "dist/cjs", format: "cjs" },
	],
	plugins: [typescript()],
};

export default options;
