/** @type {import("@storybook/core/types/index").StorybookConfig} */
module.exports = {
	stories: ["../docs/**/*.stories.@(ts|tsx|mdx)"],
	addons: ["@storybook/addon-docs", "storybook-css-modules-preset"],
	features: { postcss: false },
};
