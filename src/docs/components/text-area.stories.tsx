import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../../core";
import { Utils } from "../utils/utils";

const meta: Meta = {
  title: "Draft/TextArea",
  component: TextArea,
  argTypes: {
    style: Utils.arg(TextArea.styles),
    size: Utils.arg(TextArea.sizes),
    disabled: Utils.arg("boolean"),
    readOnly: Utils.arg("boolean"),
  },
};

export default meta;

export const Primary: StoryObj<typeof TextArea> = {
  render: (props) => <TextArea {...props} />
};
