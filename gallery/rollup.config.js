/* eslint-env node */

import alias from "@rollup/plugin-alias";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import typescript2 from "rollup-plugin-typescript2";

/**
 * Main bundling process
 * @type {import("rollup").RollupOptions}
 */
const config = {
	input: "src/index.tsx",
	output: { file: "dist/index.js", format: "esm" },
	external: ["@moai/core", "react-icons/go", "react", "react/jsx-runtime"],
	plugins: [
		del({
			targets: ["dist"],
		}),
		// This is the "magic" bit. It means:
		// - In local dev, "gallery" always use the src of "core", so e.g. in
		//   storybook you always see the latest change of core inside gallery
		// - However, when bundling, "gallery" will reference to "@moai/core",
		//   the npm package inside the end user's node_modules!
		alias({
			entries: [{ find: /.*..\/core\/src/, replacement: "@moai/core" }],
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
