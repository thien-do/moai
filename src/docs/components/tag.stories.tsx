import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../core";
import { Utils } from "../../old-docs/utils/utils";
import { GalleryTag } from "../../gallery";

const meta: Meta = {
  title: "Components/Tag",
  component: Tag,
  argTypes: {
    children: Utils.arg(null),
    color: Utils.arg(Tag.colors),
    size: Utils.arg(Tag.sizes),
    forwardedRef: Utils.arg(null),
  },
};

Utils.page.component(meta, {
  primary: "sticky",
  shots: [<GalleryTag key="1" />],
});

export default meta;

export const Primary: StoryObj<typeof Tag> = {
  render: (props) => (
    <Tag
      // eslint-disable-next-line
      color={props.color ?? Tag.colors.gray}
      children="Foo"
    />
  ),
};

export const Basic: StoryObj = {
  render: () => <Tag color={Tag.colors.green}>Foo</Tag>,
};

Utils.story(Basic, {
  desc: `
A tag requires a label, defined as a string via the \`children\` prop, and a
color, defined via the same name prop, and should come from the \`Tag.colors\`
list. You can try all available colors in the [All Props][1] table below.

[1]: #props
`,
});
