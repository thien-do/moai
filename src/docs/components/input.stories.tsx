import { Meta, StoryObj } from "@storybook/react";
import * as Fm from "formik";
import { useState } from "react";
import { HiPhone } from "react-icons/hi";
import { Button, Dialog, DivPx, Input } from "../../core";
import { GalleryInput1, GalleryInput2 } from "../../gallery";
import { docsMetaParameters } from "../utils/parameter";
import { docsMetaArgTypes } from "../utils/arg-type";

const meta: Meta = {
  title: "Components/Input",
  component: Input,
  parameters: docsMetaParameters({
    gallery: [<GalleryInput1 />, <GalleryInput2 />]
  }),
  argTypes: docsMetaArgTypes({
    Visual: {
      type: "string",
      style: Input.styles,
      size: Input.sizes,
      icon: false,
      list: false,
    },
    State: {
      defaultValue: false,
      value: false,
      setValue: false,
      onChange: false,
    }
  })
};

export default meta;

export const Primary: StoryObj<typeof Input> = {
  render: (props) => (
    <div style={{ width: 200 }}>
      <Input
        {...props}
        aria-label="Default input"
      />
    </div>
  ),
};

/**
 * Input should be used as a [controlled][1] component.
 * You should have a [state][2] to store the text value,
 * and give its control to an Input via its `value` and `setValue` props.
 * At the moment, these props work with `string` values only.
 * 
 * To have good accessibility,
 * ensure that your inputs have their matching labels.
 * You can do it in many ways:
 * wrap the input inside a `label`,
 * or explicitly [link][3] it to one (like in the example below),
 * or via the `aria-label` and `aria-labelledby` props.
 * 
 * Note that Moai's inputs don't have the [confusing][4] default width.
 * Instead, inputs always fill 100% of their container width.
 * This means you should control the width of an input via its container.
 * 
 * [1]: https://reactjs.org/docs/forms.html#controlled-components
 * [2]: https://reactjs.org/docs/hooks-state.html
 * [3]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attr-for
 * [4]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-size
 */
export const Basic: StoryObj = {
  render: () => {
    const [text, setText] = useState<string>("Hello");
    return (
      <div style={{ width: 200 }}>
        <label htmlFor="basic-input">Basic example</label>
        <Input id="basic-input" value={text} setValue={setText} />
      </div>
    );
  },
};

/**
 * Input follows the [standard approach][1] to support suggestion.
 * You should define your suggestion as a `datalist` element,
 * then give its `id` to an input via the `list` prop.
 * 
 * As a convenient shortcut,
 * you can also define your suggestion directly via the `list` prop 
 * and Input will create the `datalist` element for you.
 * You'll still need an explicit `id` for the list.
 * 
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
 */
export const Suggestion: StoryObj = {
  render: () => (
    <div style={{ width: 200 }}>
      <Input
        aria-label="suggestion-input"
        list={{ id: "suggestion-list", values: ["red", "green", "blue"] }}
      />
    </div>
  ),
};

/**
 * Input supports both [controlled][1] and [uncontrolled][2] usages,
 * making it easy to use them with form builders like [Formik][3] and [React Hook Form][4],
 * right out of the box.
 * See our [Form guide][5] to learn more.
 * 
 * [1]: https://reactjs.org/docs/forms.html#controlled-components
 * [2]: https://reactjs.org/docs/uncontrolled-components.html
 * [3]: https://formik.org
 * [4]: https://react-hook-form.com
 * [5]: /docs/guides-icons--primary
 */
export const Form: StoryObj = {
  render: () => (
    // "Fm" is the Formik's namespace
    <Fm.Formik
      initialValues={{ email: "" }}
      onSubmit={(values) => Dialog.alert(values.email)}
    >
      <Fm.Form style={{ width: 200 }}>
        <label htmlFor="form-email">Email</label>
        <Fm.Field id="form-email" type="email" name="email" as={Input} />
        <DivPx size={8} />
        <Button type="submit" highlight children="Submit" />
      </Fm.Form>
    </Fm.Formik>
  ),
};

/**
 * An input can have an icon defined via the `icon` prop.
 * This follows our [Icon standard][1], which supports all SVG icons.
 * See the [Icon guide][1] to learn more.
 * 
 * [1]: /docs/guides-icons--primary
 */
export const Icon: StoryObj = {
  render: () => (
    // The icon is imported from the "react-icons" external library, like
    // import { HiPhone } from "react-icons/hi";
    <div style={{ width: 200 }}>
      <Input
        icon={HiPhone}
        placeholder="(888) 000-9999"
        aria-label="Enter phone"
      />
    </div>
  ),
};
