import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/docs/**/*.mdx",
    "../src/docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "storybook-dark-mode"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    docsMode: true,
  }
};

export default config;
