import { Meta } from "@storybook/react";
import { Menu } from "../../../core/src";

export default {
  title: "Draft/Menu",
  component: Menu,
} as Meta;

export const Primary = (): JSX.Element => (
  <Menu
    items={[
      { label: "Foo", fn: () => window.alert("foo") },
      { label: "Bar", fn: () => window.alert("bar") },
      { label: "Baz", disabled: true },
    ]}
  />
);
