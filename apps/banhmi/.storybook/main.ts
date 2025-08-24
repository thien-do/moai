import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/*.mdx"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    docsMode: true,
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;
