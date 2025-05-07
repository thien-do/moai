import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "../../core";
import { GallerySelect } from "../../gallery";
import { SelectOptionComponent } from "./select-fake";
import { docsMetaParameters } from "../utils/parameter";
import { docsMetaArgTypes } from "../utils/arg-type";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
  subcomponents: { SelectOption: SelectOptionComponent },
  argTypes: docsMetaArgTypes({
    Visual: {
      style: Select.styles,
      size: Select.sizes,
      fill: "boolean",
      disabled: "boolean",
    },
    Controlled: {
      value: false,
      setValue: false,
    },
    Uncontrolled: {
      defaultValue: false,
      forwardedRef: false,
    },
    Others: {
      options: false,
      id: false,
      required: false,
    }
  }),
  parameters: docsMetaParameters({
    gallery: <GallerySelect />
  }),
};

export default meta;

export const Primary: StoryObj<typeof Select> = {
  render: (props) => (
    <Select<number>
      options={[
        { value: 0, id: "red", label: "Red" },
        { value: 1, id: "blue", label: "Blue" },
        { value: 2, id: "green", label: "Green" },
      ]}
      style={props.style}
      size={props.size}
      fill={props.fill}
      disabled={props.disabled}
    />
  )
};

/**
 * Select is a [controlled][1], [generic][2] component.
 * You should have a [state][3] of any type for your value, 
 * and give its control to a select via the `value` and `setValue` props.
 * 
 * The options of a select are defined as an array via the `options` prop.
 * Each option should have a string `label`, a `value` of your type, and a unique `id`.
 * See the [`SelectOption` table][4] below for more detail.
 * 
 * [1]: https://reactjs.org/docs/forms.html#controlled-components
 * [2]: https://www.typescriptlang.org/docs/handbook/2/generics.html
 * [3]: https://reactjs.org/docs/hooks-state.html
 * [4]: #props
 */
export const Basic: StoryObj = {
  render: () => {
    const [value, setValue] = useState<number>(1);
    return (
      <Select<number>
        options={[
          { value: 0, id: "red", label: "Red" },
          { value: 1, id: "blue", label: "Blue" },
          { value: 2, id: "green", label: "Green" },
        ]}
        value={value}
        setValue={setValue}
      />
    );
  }
};

/**
 * All options must have the `id`, `label` and `value` attributes defined.
 * If these 3 attributes can be the same (usually in case of string-based options), 
 * you can use `Select.toStringOption` as a convenient shortcut to simplify the definition.
 * 
 * Similarly, there is also a `Select.toNumberOption` for number-based options, 
 * which calls `toString` to provide `id` and `label` fields.
 */
export const StringOptionUtility: StoryObj = {
  render: () => {
    const [value, setValue] = useState("Blue");
    return (
      <Select<string>
        options={["Red", "Blue", "Green"].map(Select.toStringOption)}
        value={value}
        setValue={setValue}
      />
    );
  }
};

/**
 * A select can not have value outside of its options.
 * To have a blank/empty state for your select, explicitly define it as a disabled option.
 * We recommend using `null` to represent this option's value.
 * The type of your Select (and your state) should then be `null | Something`.
 * 
 * This actually follows the [common practice][1] as when using the HTML `select` element.
 * 
 * [1]: https://stackoverflow.com/questions/5805059/how-do-i-make-a-placeholder-for-a-select-box
 */
export const Placeholder: StoryObj = {
  render: () => {
    const [value, setValue] = useState<null | number>(null);
    return (
      <Select<null | number>
        options={[
          {
            value: null,
            id: "null",
            // This works as the "placeholder"
            label: "Select a color",
            // Remove this if users should be able to select the
            // "empty" state
            disabled: true,
          },
          { value: 0, id: "red", label: "Red" },
          { value: 1, id: "blue", label: "Blue" },
          { value: 2, id: "green", label: "Green" },
        ]}
        value={value}
        setValue={setValue}
      />
    );
  }
};
