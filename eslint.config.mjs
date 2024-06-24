import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import jestDom from "eslint-plugin-jest-dom";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			"**/node_modules",
			"**/dist",
			"**/public",
			"test/coverage",
			"**/docs/.storybook",
		],
	},
	...fixupConfigRules(
		compat.extends(
			"eslint:recommended",
			"plugin:@typescript-eslint/recommended",
			"plugin:react/recommended",
			"plugin:jest-dom/recommended",
			"prettier",
		),
	),
	{
		plugins: {
			"@typescript-eslint": fixupPluginRules(typescriptEslint),
			"jest-dom": fixupPluginRules(jestDom),
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				project: "./tsconfig.json",
			},
		},

		settings: {
			react: {
				version: "17",
			},
		},

		rules: {
			"react/jsx-uses-react": "off",
			"react/react-in-jsx-scope": "off",
			"react/no-children-prop": "off",
			"react/display-name": "off",
		},
	},
];
