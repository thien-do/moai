import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../core/button/button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary: StoryObj = {
  args: {
    children: "Hello",
  },
};
