import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, toast, ToastPane } from "../../core";
import { GalleryToast } from "../../../gallery/src";
import { Utils } from "../utils/utils";
import { ToastFunction } from "./toast-fake";

const meta: Meta = {
  title: "Components/Toast",
  component: ToastPane,
  subcomponents: { "toast function": ToastFunction },
};

Utils.page.component(meta, {
  primary: "none",
  shots: [<GalleryToast key="1" />],
});

export default meta;

export const Primary: StoryObj = {
  render: () => <div />
};

export const Basic: StoryObj = {
  render: () => (
    <Button
      onClick={() => toast(toast.types.success, "Post published")}
      children="Make a toast"
    />
  )
};

Utils.story(Basic, {
  desc: `
The \`toast\` function let you create a toast imperatively. You can call it
from anywhere in your app. The created toast will be rendered on top of your
app, and go away after a few seconds. The \`toast\` function expects 2
parameters:

- The type of the toast, which controls the icon and color of the toast. It
should come from \`toast.types\`.
- The message inside the toast.

This makes it easy to show a toast after an event, like a successful \`fetch\`
call. You don't need to maintain any state or render any thing for the toast.
`,
});

export const Pane: StoryObj = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button onClick={() => setVisible(!visible)} children="Toggle toast" />
        <div style={{ height: 8 }} />
        {visible && (
          <ToastPane
            type={ToastPane.types.success}
            children="Post published"
            close={() => setVisible(false)}
          />
        )}
      </div>
    );
  }
};

Utils.story(Pane, {
  desc: `
The Toast Pane component let you have a toast rendered in-place, declaratively.
This is useful when you want a permanent toast somewhere in your app. A common
usage is to render a toast conditionally based on a state and optionally reset
that state via the \`close\` prop to let users close it.

Similar to the \`toast\` function, Toast Pane requires its type to be defined
via the \`type\` prop and its message via the \`children\` prop. If the
\`close\` callback is defined, the toast will also have a close button which
triggers that callback.
`,
});
