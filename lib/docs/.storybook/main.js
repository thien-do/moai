// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
const postcss = {
	name: "@storybook/addon-postcss",
	options: {
		postcssLoaderOptions: {
			implementation: require("postcss"),
			postcssOptions: {
				plugins: [require("postcss-import"), require("autoprefixer")],
			},
		},
		cssLoaderOptions: { modules: { auto: true } },
	},
};

// https://github.com/storybookjs/storybook/issues/14805#issuecomment-846523937
const babel = async (options) => {
	const path = "@babel/plugin-proposal-private-property-in-object";
	const plugin = [require.resolve(path), { loose: true }];
	return { ...options, plugins: [...options.plugins, plugin] };
};

/** @type {import("@storybook/core/types/index").StorybookConfig} */
module.exports = {
	stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
	addons: ["@storybook/addon-docs", postcss, "storybook-dark-mode"],
	babel: babel,
};
