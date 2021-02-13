/** @type {import("@storybook/core/types/index").StorybookConfig} */
module.exports = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: ["@storybook/addon-docs", "storybook-css-modules-preset"],
};
