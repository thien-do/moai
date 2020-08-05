import typescript from "@rollup/plugin-typescript";

/** @type {import("@rollup/plugin-typescript").RollupTypescriptOptions} */
const typescriptOptions = {
	// These options cannot be defined in tsconfig.json
	// - https://github.com/rollup/plugins/issues/61#issuecomment-597090769
	declaration: true,
	declarationDir: "dist/types",
	// Known issue: "rootDir" is unnecessarily required for declaration
	// - https://github.com/rollup/plugins/issues/61#issuecomment-596270901
	rootDir: "src",
};

/** @type {import("rollup").RollupOptions} */
const options = {
	input: "src/index.ts",
	output: [{ dir: "dist", format: "es" }],
	plugins: [typescript(typescriptOptions)],
};

export default options;
