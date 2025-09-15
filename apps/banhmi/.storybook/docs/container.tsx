import { DocsContainer, Unstyled } from "@storybook/addon-docs";
import { addons } from "@storybook/preview-api";
import { useEffect, useState } from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { storybookThemes } from "./theme";

const channel = addons.getChannel();

/**
 * Storybook Dark Mode addon comes with a hook,
 * but it cannot be used in DocsContainer,
 * so we need to use the events API manually.
 * See:
 * - https://github.com/hipstersmoothie/storybook-dark-mode/issues/282#issuecomment-2208835474
 * - https://github.com/hipstersmoothie/storybook-dark-mode?tab=readme-ov-file#react
 * - https://github.com/hipstersmoothie/storybook-dark-mode?tab=readme-ov-file#events
 */
const useDark = (): boolean => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  return dark;
};

export const StorybookContainer: typeof DocsContainer = (props) => {
  const { children, ...rest } = props;

  const isDark = useDark();
  const { dark, light } = storybookThemes;
  const theme = isDark ? dark : light;

  return (
    <DocsContainer {...rest} theme={theme}>
      <Unstyled>{props.children}</Unstyled>
    </DocsContainer>
  );
};
