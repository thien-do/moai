import { Meta, StoryObj } from "@storybook/react";
import { DateInput } from "../../core";
import { Utils } from "../utils/utils";

const meta: Meta = {
  title: "Components/DateInput",
  component: DateInput,
  argTypes: {
    style: Utils.arg(DateInput.styles),
    size: Utils.arg(DateInput.sizes),
    format: Utils.arg(DateInput.formats),
    disabled: Utils.arg("boolean"),
    minDate: Utils.arg(null),
    maxDate: Utils.arg(null),
    value: Utils.arg(null),
    setValue: Utils.arg(null),
    defaultValue: Utils.arg(null),
    icon: Utils.arg(null),
  },
};

export default meta;

export const Primary: StoryObj<typeof DateInput> = {
  render: (_props) => {
    // const [date, setDate] = useState<null | Date>(() => new Date());
    return (
      <div style={{ width: 200 }}>
        <DateInput
        // value={date}
        // setValue={setDate}
        // // eslint-disable-next-line
        // size={(DateInput.sizes as any)[props.size!]}
        // // eslint-disable-next-line
        // format={(DateInput.formats as any)[props.format!]}
        // // eslint-disable-next-line
        // style={(DateInput.styles as any)[props.style!]}
        // disabled={props.disabled}
        />
      </div>
    );
  }
};

/**
 * Date Input is a [controlled][1] component: you should have a [`Date`][5] [state][4] 
 * and give its control to a date input via the `value` and `setValue` props.
 * 
 * Moai's Date Input follows the [standard behaviour][2] of the HTML `<input>` element, 
 * so the type of your state should be `null | Date`.
 * The `null` value happens when the current date is invalid, 
 * e.g. when the user is still typing (e.g. "13/") or they entered an invalid date (e.g. "30/2/2021").
 * 
 * Similar to the [Input][3] component, 
 * the width of a date input is 100% of their container's width.
 * 
 * [1]: https://reactjs.org/docs/forms.html#controlled-components
 * [2]: https://html.spec.whatwg.org/multipage/input.html#dom-input-valueasdate
 * [3]: /docs/components-input--width
 * [4]: https://reactjs.org/docs/hooks-state.html
 * [5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */
export const Basic: StoryObj = {
  render: () => {
    // const [date, setDate] = useState<null | Date>(() => new Date());
    return (
      <div style={{ width: 200 }}>
        <DateInput
        // value={date}
        // setValue={setDate}
        />
      </div>
    );
  }
};

/**
 * The `minDate` and `maxDate` props are used to prevent users from selecting dates outside of a range **in the pop-up calendar**.
 * They are inclusive, and both are optional (e.g. you can accept all dates after today).
 * 
 * Note that these props are for convenient reason only, 
 * as users can still type any date directly into the text box.
 * This is intentional. If you need strict validation, see the [Form][1] guide.
 * 
 * [1]: /docs/patterns-form--primary
 */
export const MinMax: StoryObj = {
  render: () => {
    // const today = new Date();
    // const lastWeek = new Date();
    // lastWeek.setDate(lastWeek.getDate() - 7);
    return (
      <div style={{ width: 200 }}>
        <DateInput
        // minDate={lastWeek}
        // maxDate={today}
        />
      </div>
    );
  }
};
