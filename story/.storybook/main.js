const autoprefix = require("autoprefixer");
const importCss = require("postcss-import");
const tailwind = require("tailwindcss");

/**
 * Modify SVG rule to exclude the built-in config
 * @param {import("webpack").RuleSetRule} rule
 * @returns {void}
 */
const modifySvgRule = (rule) => {
	const test = rule.test.toString().slice(1, -1); // exclude "/" wrappers
	rule.test = new RegExp(test.replace("svg|", ""));
};

/**
 * Add SVG rule to support SVGR
 * @param {import("webpack").Configuration} config
 * @returns {void}
 */
const addSvgRule = (config) => {
	config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	});
};

/**
 * Modify CSS rule to support CSS modules and custom PostCSS plugins
 * @param {import("webpack").RuleSetRule} rule
 * @returns {void}
 */
const modifyCssRule = (rule) => {
	rule.use.forEach((loader) => {
		if (typeof loader === "string") return;
		// Support CSS Modules
		if (loader.loader.includes("/css-loader")) {
			loader.options.modules = { auto: true };
		}
		// Support PostCSS plugins
		if (loader.loader.includes("/postcss-loader")) {
			loader.options.plugins = [autoprefix, importCss, tailwind];
		}
	});
};

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
			if (test.includes("css")) {
				modifyCssRule(rule);
			} else if (test.includes("svg")) {
				modifySvgRule(rule);
			}
		});
		addSvgRule(config);
		return config;
	},
};
