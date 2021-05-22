/** @type {import("@storybook/core/types/index").StorybookConfig} */
module.exports = {
	stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
	addons: [
		"@storybook/addon-docs",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
					postcssOptions: { plugins: [require("autoprefixer")] },
				},
				cssLoaderOptions: { modules: { auto: true } },
			},
		},
	],
	features: { postcss: false },
};
