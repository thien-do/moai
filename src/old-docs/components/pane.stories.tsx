import { Meta } from "@storybook/react";
import { Pane } from "../../../core/src";
import { Utils } from "../utils/utils";

const meta: Meta = {
  title: "Components/Pane",
  component: Pane,
  argTypes: {
    children: Utils.arg("React.ReactNode"),
    noPadding: Utils.arg("boolean"),
    fullHeight: Utils.arg("boolean"),
    contentWidth: Utils.arg("boolean"),
  },
};

Utils.page.component(meta, {
  primary: "sticky",
  shots: [],
});

export default meta;

interface Props {
  noPadding?: boolean;
  fullHeight?: boolean;
  contentWidth?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
  <div style={{ height: 100 }}>
    <Pane {...props}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </Pane>
  </div>
);

export const Basic = (): JSX.Element => (
  <Pane>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
    sapiente vero ad eius fuga atque repellendus? Repellat sint veniam adipisci
    accusamus, nihil explicabo odio, id neque ducimus voluptate nulla? Maiores?
  </Pane>
);

Utils.story(Basic, {
  desc: `
A pane only require its \`children\` to be defined. See the [props table][1]
below for props to control its padding, width and height.

[1]: #props
`,
});
