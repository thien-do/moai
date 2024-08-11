import { useState } from "react";
import { TimeInput } from "../../core";
import { Utils } from "../../old-docs/utils/utils";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Components/TimeInput",
  component: TimeInput,
  argTypes: {
    style: Utils.arg(TimeInput.styles),
    size: Utils.arg(TimeInput.sizes),
    fill: Utils.arg("boolean"),
    disabled: Utils.arg("boolean"),
    value: Utils.arg(null),
    setValue: Utils.arg(null),
    id: Utils.arg(null),
  },
};

Utils.page.component(meta, {
  primary: "sticky",
  shots: [],
});

export default meta;

export const Primary: StoryObj<typeof TimeInput> = {
  render: (props) => {
    const [value, setValue] = useState<Date>(() => {
      const date = new Date();
      date.setSeconds(0); // TimeInput's value's second must be 0
      return date;
    });
    return (
      <TimeInput
        {...props}
        value={value}
        setValue={setValue}
        interval={TimeInput.intervals.minute}
      />
    );
  },
};

/**
 * Time Input is a [controlled][1] component.
 * You should have a [Date][2] state to store the time,
 * and give its control to a time input via the `value` and `setValue` prop.
 *
 * Time Input also requires an `interval` prop, which specifies the difference between 2 options.
 * It should come from the `TimeInput.intervals` list:
 *
 * - `minute`: one option every minute
 * - `quarter`: every 15 minutes (e.g. 0, 15, 30, 45)
 * - `half`: every 30 minutes (e.g. 0, 30)
 * - `hour`: every hour
 *
 * It's important to note that your `value` prop must always satisfy your `interval` prop,
 * or else Time Input will throw a runtime error.
 * You may want to use the [`setMinutes`][3] utility to ensure this (see the code of the example below).
 * It also means you should never change your `interval` prop at runtime,
 * because it easily invalidates your current `value`.
 *
 * [1]: https://reactjs.org/docs/forms.html#controlled-components
 * [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * [3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes
 */
export const Basic: StoryObj = {
  render: () => {
    const [value, setValue] = useState<Date>(() => {
      const date = new Date();
      date.setSeconds(0); // Ensure second is zero
      date.setMinutes(15); // Ensure value follows interval
      return date;
    });
    return (
      <TimeInput
        interval={TimeInput.intervals.quarter}
        value={value}
        setValue={setValue}
      />
    );
  },
};
