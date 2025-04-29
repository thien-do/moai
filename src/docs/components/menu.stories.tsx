import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "../../core";

const meta: Meta = {
  title: "Draft/Menu",
  component: Menu,
};

export default meta;

export const Primary: StoryObj<typeof Menu> = {
  render: () => (
    <Menu
      items={[
        { label: "Foo", fn: () => window.alert("foo") },
        { label: "Bar", fn: () => window.alert("bar") },
        { label: "Baz", disabled: true },
      ]}
    />
  )
};
