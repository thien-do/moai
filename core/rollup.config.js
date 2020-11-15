import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import postcss from "rollup-plugin-postcss";

const isKnownIssue = ({ code, id }) =>
	(code === "THIS_IS_UNDEFINED" && id.includes("focus-visible")) || false;

/** @type {import("rollup").RollupOptions} */
const options = {
	input: "src/index.ts",
	output: [
		{ dir: "dist/cjs", format: "cjs" },
		{ dir: "dist/esm", format: "esm" },
	],
	external: ["react"],
	plugins: [
		postcss(),
		copy({
			targets: [
				{ src: "src/theme", dest: "dist/" },
				{ src: "src/font", dest: "dist/" },
			],
		}),
		// Note that we don't generate declaration files with Rollup but via
		// TSC in another process. See "npm run build" for detail
		typescript(),
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
