import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const isKnownIssue = ({ code, id }) =>
	(code === "THIS_IS_UNDEFINED" && id.includes("focus-visible")) || false;

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
	output: { dir: "dist", format: "es" },
	external: ["react"],
	plugins: [
		postcss(),
		copy({
			targets: [
				{ src: "src/theme", dest: "dist/" },
				{ src: "src/font", dest: "dist/" },
			],
		}),
		typescript(typescriptOptions),
	],
	onwarn: (warning, warn) => {
		if (isKnownIssue) return;
		warn(warning);
	},
	watch: {
		include: "src/**",
	},
};

export default options;
