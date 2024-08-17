import { Meta, StoryObj } from "@storybook/react";
import { Pane } from "../../core";
import { docsMetaArgTypes } from "../utils/arg-type";

const meta: Meta = {
  title: "Components/Pane",
  component: Pane,
  argTypes: docsMetaArgTypes({
    "": {
      children: false,
      noPadding: "boolean",
      fullHeight: "boolean",
      contentWidth: "boolean",
    },
  }),
};

export default meta;

export const Primary: StoryObj<typeof Pane> = {
  render: (props) => (
    <div style={{ height: 100 }}>
      <Pane {...props}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </Pane>
    </div>
  ),
};

/**
 * A pane only require its `children` to be defined.
 * See the [props table][1] below for props to control its padding, width and height.
 *
 * [1]: #props
 */
export const Basic: StoryObj = {
  render: () => (
    <Pane>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
      sapiente vero ad eius fuga atque repellendus? Repellat sint veniam
      adipisci accusamus, nihil explicabo odio, id neque ducimus voluptate
      nulla? Maiores?
    </Pane>
  ),
};
