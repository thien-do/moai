import { Meta, StoryObj } from "@storybook/react";
import { Steps } from "../../core";

const meta: Meta = {
  title: "Draft/Steps",
  component: Steps,
};

export default meta;

export const Primary: StoryObj<typeof Steps> = {
  render: () => (
    <Steps
      steps={[
        { title: "First" },
        { title: "Second" },
        { title: "Third and long long" },
      ]}
      current={1}
    />
  )
};
