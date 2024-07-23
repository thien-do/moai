import { DocsContainer, Unstyled } from "@storybook/blocks";
import { Preview } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "./theme";

import "./preview.css";
import "./syntax.css";
import "./typography.css";

const Container: typeof DocsContainer = (props) => {
  const dark = useDarkMode();
  const theme = dark ? themes.dark : themes.light;
  return (
    <DocsContainer {...props} theme={theme}>
      <Unstyled>{props.children}</Unstyled>
    </DocsContainer>
  );
};

const preview: Preview = {
  parameters: {
    docs: {
      container: Container,
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Intro",
          ["Quick Start", "Proper Start"],
          "Patterns",
          "Components",
        ],
      },
    },
  },
};

export default preview;
