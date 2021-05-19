/** @type {import("@storybook/core/types/index").StorybookConfig} */
module.exports = {
	stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
	addons: ["@storybook/addon-docs", "storybook-css-modules-preset"],
	features: { postcss: false },
};
