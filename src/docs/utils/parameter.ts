import { Meta } from "@storybook/react";
import { ReactNode } from "react";

export type DocsMetaParameter = Meta["parameters"] & {
  /**
   * Show a gallery of the component.
   * The gallery usually comes from the "gallery" folder.
   */
  gallery?: ReactNode;
  /**
   * The primary story is fixed at top (sticky) by default,
   * so that the user can see the changes from the args table applied.
   * Use this option to turn off the sticky behavior ("no-sticky"),
   * or hide the primary story altogether ("none").
   */
  primary?: "no-sticky" | "none";
};

/**
 * This function does nothing but to provide a type hint for the parameters.
 */
export const docsMetaParameters = (
  p: DocsMetaParameter,
): Meta["parameters"] => {
  return p;
};
