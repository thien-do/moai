import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../core";
import { GalleryTag } from "../../gallery";
import { docsMetaParameters } from "../utils/parameter";
import { docsMetaArgTypes } from "../utils/arg-type";

const meta: Meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: docsMetaParameters({
    gallery: <GalleryTag key="1" />,
  }),
  argTypes: docsMetaArgTypes({
    "": {
      children: false,
      color: Tag.colors,
      size: Tag.sizes,
      forwardedRef: false,
    },
  }),
};

export default meta;

export const Primary: StoryObj<typeof Tag> = {
  render: (props) => (
    <Tag {...props} color={props.color ?? Tag.colors.gray} children="Foo" />
  ),
};

/**
 * A tag requires a label, defined as a string via the `children` prop,
 * and a color, defined via the same name prop, and should come from the `Tag.colors` list.
 * You can try all available colors in the [All Props][1] table below.
 *
 * [1]: #props
 */
export const Basic: StoryObj = {
  render: () => <Tag color={Tag.colors.green}>Foo</Tag>,
};
