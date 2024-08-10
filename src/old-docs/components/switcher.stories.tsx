import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { Switcher, SwitcherOption } from "../../../core/src";
import { SwitcherOptionComponent } from "./switcher-fake";
import { Utils } from "../utils/utils";

const meta: Meta = {
  title: "Components/Switcher",
  component: Switcher,
  subcomponents: { SwitcherOption: SwitcherOptionComponent },
  argTypes: {
    style: Utils.arg(Switcher.styles),
    size: Utils.arg(Switcher.sizes),
    fill: Utils.arg("boolean"),
    highlight: Utils.arg("boolean"),
    disabled: Utils.arg("boolean"),
    value: Utils.arg(null),
    setValue: Utils.arg(null),
    options: Utils.arg(null),
  },
};

Utils.page.component(meta, { primary: "sticky", shots: [] });

export default meta;

interface Props {
  style?: string;
  size?: string;
  fill?: boolean;
  disabled?: boolean;
  highlight?: boolean;
}

export const Primary = (props: Props): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  return (
    <Switcher<number>
      value={value}
      setValue={setValue}
      options={[
        { value: 0, label: "Left" },
        { value: 1, label: "Center" },
        { value: 2, label: "Right" },
      ]}
      // eslint-disable-next-line
      size={(Switcher.sizes as any)[props.size!]}
      // eslint-disable-next-line
      style={(Switcher.styles as any)[props.style!]}
      fill={props.fill}
      disabled={props.disabled}
      highlight={props.highlight}
    />
  );
};

export const Basic = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const options: SwitcherOption<number>[] = [
    { value: 0, label: "Left" },
    { value: 1, label: "Center" },
    { value: 2, label: "Right" },
  ];
  return <Switcher value={value} setValue={setValue} options={options} />;
};

Utils.story(Basic, {
  desc: `
Switcher is a [controlled][1], [generic][3] component. You should have a
[state][2] of any type for the selected value, and pass the control to a
switcher via the \`value\` and \`setValue\` props.

The options for a Switcher are defined via its \`options\` prop. They require
the \`value\` and \`label\` attributes. See the [SwitcherOption table][4] below
for the complete interface of an option.

[1]: https://reactjs.org/docs/forms.html#controlled-components
[2]: https://reactjs.org/docs/hooks-state.html
[3]: https://www.typescriptlang.org/docs/handbook/2/generics.html
[4]: #props
`,
});

export const Toggle = (): JSX.Element => {
  const [on, setOn] = useState<boolean>(true);
  const options: SwitcherOption<boolean>[] = [
    { value: true, label: "On" },
    { value: false, label: "Off" },
  ];
  return <Switcher highlight value={on} setValue={setOn} options={options} />;
};

Utils.story(Toggle, {
  desc: `
Switchers can be used for \`boolean\` values. In these cases, they work like
[toggles][1], letting users flip between on-off states. The \`highlight\` prop
is often used together to make the selected option more prominent.

[1]: https://www.nngroup.com/articles/toggle-switch-guidelines/
`,
});

export const Icon = (): JSX.Element => {
  const [value, setValue] = useState<number>(0);
  const options: SwitcherOption<number>[] = [
    { value: 0, icon: FaAlignLeft, iconLabel: "Align left" },
    { value: 1, icon: FaAlignCenter, iconLabel: "Align center" },
    { value: 2, icon: FaAlignRight, iconLabel: "Align right" },
  ];
  return <Switcher value={value} setValue={setValue} options={options} />;
};

Utils.story(Icon, {
  desc: `
Switchers' options are just [buttons][1], so they also support having
[icons][2] via the \`icon\` attribute. You can also have icon-only options by
omitting the \`label\` attribute, in which cases \`iconLabel\` must instead be
provided to ensure they are [accessible][3].

[1]: /docs/components-button--primary
[2]: /docs/guides-icons--primary
[3]: /docs/components-button--primary#icon
`,
});
