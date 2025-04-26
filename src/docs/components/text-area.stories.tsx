import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../../core";
import { docsMetaArgTypes } from "../utils/arg-type";

const meta: Meta = {
  title: "Draft/TextArea",
  component: TextArea,
  argTypes: docsMetaArgTypes({
    "": {
      style: TextArea.styles,
      size: TextArea.sizes,
      disabled: "boolean",
      readOnly: "boolean",
    }
  }),
};

export default meta;

export const Primary: StoryObj<typeof TextArea> = {
  render: (props) => <TextArea {...props} />
};
