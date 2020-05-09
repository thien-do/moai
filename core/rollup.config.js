import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const isKnownIssue = ({ code, id }) => (
	(code === "THIS_IS_UNDEFINED" && id.includes("focus-visible")) ||
	false
);

export default {
	input: "src/index.ts",
	output: {
		file: "dist/index.js",
		format: "es",
	},
	external: [
		"react"
	],
	plugins: [
		postcss(),
		typescript(),
	],
	onwarn: (warning, warn) => {
		if (isKnownIssue) { return; }
		warn(warning);
	},
};
