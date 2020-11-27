const path = require("path");

module.exports = {
	stories: [
		"../core/src/**/*.stories.mdx",
		"../core/src/**/*.stories.@(js|jsx|ts|tsx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
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
	webpackFinal: async (config, { configType }) => {
		config.module.rules.forEach((rule) => {
			const test = rule.test.toString();
			if (test.includes("css") === false) return;
			rule.use.forEach((loader) => {
				if (typeof loader === "string") return;
				if (loader.loader.includes("css-loader") === false) return;
				loader.options.modules = { auto: true };
			});
		});
		return config;
	},
};
