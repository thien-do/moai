import { Preview } from "@storybook/react";

// Local font is severely outdated
import "../src/core/font/remote.css";
import "../src/core/global/global.css";

import "./docs/args-table.css";
import "./docs/docs.css";
import "./docs/syntax.css";

import { StorybookContainer } from "./docs/container";
import { StorybookPage } from "./docs/page";
import { storybookThemes } from "./docs/theme";

const preview: Preview = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
        withToolbar: false,
      },
      container: StorybookContainer,
      page: StorybookPage,
    },
    darkMode: {
      dark: storybookThemes.dark,
      light: storybookThemes.light,
      classTarget: "html",
      stylePreview: true,
    },
    options: {
      storySort: {
        order: [
          "Intro",
          ["Quick Start", "Proper Start", "Gallery", "Principles"],
          "Patterns",
          "Components",
          "Draft",
        ],
      },
    },
  },
  tags: ["autodocs"],
};

export default preview;
