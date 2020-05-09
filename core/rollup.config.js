import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const isKnownIssue = ({ code, id }) =>
	(code === "THIS_IS_UNDEFINED" && id.includes("focus-visible")) || false;

const copyOpts = {
	targets: [{ src: "src/theme", dest: "dist/" }],
};

export default {
	input: "src/index.ts",
	output: {
		file: "dist/index.js",
		format: "es",
	},
	external: ["react"],
	plugins: [postcss(), typescript(), copy(copyOpts)],
	onwarn: (warning, warn) => {
		if (isKnownIssue) return;
		warn(warning);
	},
};
