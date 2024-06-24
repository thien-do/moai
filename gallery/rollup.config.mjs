/* eslint-env node */

import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import typescript2 from "rollup-plugin-typescript2";

/**
 * Main bundling process
 * @type {import("rollup").RollupOptions}
 */
const config = {
	input: "src/index.tsx",
	output: [
		{ file: "dist/esm.js", format: "esm" },
		{ file: "dist/cjs.js", format: "cjs" },
	],
	external: [
		"@moai/core",
		"react",
		"react/jsx-runtime",
		// Because we have a demo where we show all icon from all sets :)). We
		// could simplify this as a function, but it's just simpler to leave
		// it all here (and better in term of performance)
		"react-icons/ai",
		"react-icons/bi",
		"react-icons/cg",
		"react-icons/fa",
		"react-icons/fc",
		"react-icons/fi",
		"react-icons/go",
		"react-icons/hi",
		"react-icons/im",
		"react-icons/io5",
		"react-icons/md",
		"react-icons/ri",
		"react-icons/ti",
		"react-icons/vsc",
	],
	plugins: [
		del({
			targets: ["dist"],
		}),
		postcss({
			minimize: false,
			extract: "bundle.css",
		}),
		typescript2({
			useTsconfigDeclarationDir: true,
		}),
	],
};

export default config;
