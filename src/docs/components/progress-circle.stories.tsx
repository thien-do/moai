import { Meta, StoryObj } from "@storybook/react";
import { GalleryProgress } from "../../../gallery/src";
import { Utils } from "../utils/utils";
import { ProgressCircle, ProgressCircleProps } from "../../core";

const meta: Meta = {
  title: "Components/Progress Circle",
  component: ProgressCircle,
  argTypes: {
    size: Utils.arg("number"),
    value: Utils.arg("number"),
    color: Utils.arg(ProgressCircle.colors),
  },
};

Utils.page.component(meta, {
  primary: "sticky",
  shots: [<GalleryProgress key="1" />],
});

export default meta;

export const Primary: StoryObj<typeof ProgressCircle> = {
  render: (props) => (
    <ProgressCircle
      size={props.size ?? 16}
      value={props.value ?? 0.4}
      color={props.color}
    />
  )
};

export const Basic: StoryObj = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <ProgressCircle size={16} value={0.4} />
      <ProgressCircle size={16} value="indeterminate" />
    </div>
  )
};

Utils.story(Basic, {
  desc: `
A progress circle requires its \`size\` and \`value\` props to be defined. The
value should be a number from 0 (no progress yet) to 1 (all's done), or the
"indeterminate" string to show a spinning circle.
`,
});

export const Color: StoryObj = {
  render: () => {
    const base: ProgressCircleProps = { size: 16, value: "indeterminate" };
    const { neutral, highlight, inverse } = ProgressCircle.colors;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <ProgressCircle {...base} color={neutral} />
        <ProgressCircle {...base} color={highlight} />
        <div style={{ background: "var(--highlight-5)", padding: 8 }}>
          <ProgressCircle {...base} color={inverse} />
        </div>
      </div>
    );
  }
};

Utils.story(Color, {
  desc: `
The color of a progress circle is set via its \`color\` prop. Colors are
defined at \`ProgressCircle.colors\`:

- \`neutral\` shows a gray circle. This is the default value.
- \`highlight\` highlight the circle.
- \`inverse\` is for displaying the circle on top of a colored background.
`,
});
