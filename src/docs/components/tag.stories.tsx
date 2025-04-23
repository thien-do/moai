import { Meta, StoryObj } from "@storybook/react";
import { Utils } from "../utils/utils";
import { Tag } from "../../core";
import { docsMetaParameters } from "../utils/parameter";
import { GalleryTag } from "../../gallery";

const meta: Meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: docsMetaParameters({
    gallery: <GalleryTag />
  }),
  argTypes: {
    children: Utils.arg(null),
    color: Utils.arg(Tag.colors),
    size: Utils.arg(Tag.sizes),
    forwardedRef: Utils.arg(null),
  },
};

export default meta;

export const Primary: StoryObj<typeof Tag> = {
  render: (props) => (
    <Tag
      color={props.color ?? Tag.colors.gray}
      children="Foo"
    />
  )
};

/**
 * A tag requires a label, defined as a string via the `children` prop,
 * and a color, defined via the same name prop, and should come from the `Tag.colors` list.
 * You can try all available colors in the [All Props][1] table below.
 *
 * [1]: #props
 */
export const Basic: StoryObj = {
  render: () => <Tag color={Tag.colors.green}>Foo</Tag>
};
