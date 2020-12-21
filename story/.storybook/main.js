const pcPrefix = require("autoprefixer");
const pcImport = require("postcss-import");
const pcTailwind = require("tailwindcss");

/** @type {import("@storybook/core/types/index").StorybookConfig} */
module.exports = {
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../../core/src/**/*.stories.mdx",
		"../../core/src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"storybook-dark-mode/register",
	],
	typescript: {
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
		},
	},
	webpackFinal: async (config) => {
		config.module.rules.forEach((rule) => {
			const test = rule.test.toString();
			if (test.includes("css") === false) return;
			rule.use.forEach((loader) => {
				if (typeof loader === "string") return;
				// Support CSS Modules
				if (loader.loader.includes("/css-loader")) {
					loader.options.modules = { auto: true };
				}
				// Support PostCSS plugins
				if (loader.loader.includes("/postcss-loader")) {
					loader.options.plugins = [pcPrefix, pcImport, pcTailwind];
				}
			});
		});
		return config;
	},
};
