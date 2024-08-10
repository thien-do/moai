import { Meta, StoryObj } from "@storybook/react";
import { ReactElement } from "react";
import { GoPlus } from "react-icons/go";
import { Button, Dialog } from "../core";
import { GalleryButton1, GalleryButton2 } from "../gallery";
import { docsMetaArgTypes } from "./utils/arg-type";
import { docsMetaParameters } from "./utils/parameter";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: docsMetaParameters({
    gallery: (
      <>
        <GalleryButton1 />
        <GalleryButton2 />
      </>
    ),
  }),
  argTypes: docsMetaArgTypes<typeof Button>({
    Visual: {
      busy: "boolean",
      disabled: "boolean",
      fill: "boolean",
      highlight: "boolean",
      minWidth: "boolean",
      selected: "boolean",
      size: Button.sizes,
      style: Button.styles,
      color: Button.colors,
    },
    Content: {
      children: false,
      icon: false,
      iconLabel: false,
      iconRight: false,
    },
    Button: {
      type: false,
      ref: false,
      onClick: false,
      onFocus: false,
      onBlur: false,
      autoFocus: false,
      dangerouslySetTabIndex: false,
    },
    Link: {
      target: false,
      href: false,
      rel: false,
      download: false,
    },
  }),
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  render: (props) => (
    <Button onClick={() => Dialog.alert("Hello")} {...props}>
      Say Hello
    </Button>
  ),
};

/**
 * Moai buttons closely follow the interface and behaviour of the [HTML `button`][1] element.
 * To get started, you only need to provide a label via `children`,
 * and a handler via `onClick`:
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 */
export const Basic: StoryObj = {
  render: (): ReactElement => (
    <Button onClick={() => alert("Hi")}>Say Hi</Button>
  ),
};

/**
 * Icons can be used in buttons via the `icon` prop.
 * This follows our [Icon standard][1], which supports any SVG icons.
 * The icon is on the left side by default,
 * with the `iconRight` prop to move it to the right.
 *
 * It's [intentional][3] that [screen readers][2] would skip the icon,
 * and only announce the label of a button (i.e., the text inside the `children` prop).
 * If your button doesn't have a `children` defined (i.e., icon-only buttons),
 * provide the `iconLabel` prop so screen readers can announce it.
 *
 * Out of the box, icon-only buttons look like rectangles due to the unequal paddings.
 * To make them squares, set the `size` prop to one with an `Icon` suffix,
 * like `Button.sizes.mediumIcon`.
 *
 * [1]: /docs/guides-icons--primary
 * [2]: https://en.wikipedia.org/wiki/Screen_reader
 * [3]: https://www.sarasoueidan.com/blog/accessible-icon-buttons/#icon-sitting-next-to-text
 */
export const Icon: StoryObj = {
  render: (): ReactElement => (
    // Icons are imported from external libraries, like:
    // import { GoPlus } from "react-icons/go";

    <div style={{ display: "flex", gap: 8 }}>
      {/* Basic usage with icon */}
      <Button icon={GoPlus} children="Add" />

      {/* Icon on the right side */}
      <Button icon={GoPlus} children="Add" iconRight />

      {/* Require "iconLabel" because there is no "children" */}
      <Button icon={GoPlus} iconLabel="Add" />

      {/* Square icon button */}
      <Button icon={GoPlus} iconLabel="Add" size={Button.sizes.mediumIcon} />
    </div>
  ),
};

/**
 * Buttons with `href` prop are rendered as [HTML `a`][1] elements,
 * instead of the usual `button`.
 * This helps you have links that look like buttons
 * (e.g., with strong appearance to attract attention)
 * but still preserve all [built-in behaviours][3] of links.
 *
 * For example, you can right click the below button to copy the URL,
 * or open it in a new tab:
 *
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 * [2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
 * [3]: https://www.nngroup.com/articles/command-links
 */
export const Link: StoryObj = {
  render: () => (
    <Button
      highlight
      href="https://moai.thien.do"
      target="_blank"
      children="Go to moai.thien.do"
    />
  ),
};
