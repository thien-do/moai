import { ForwardedRef } from "react";
import { Checkbox } from "../checkbox/checkbox";
import shared from "../checkbox/shared.module.css";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { outline } from "../outline/outline";
import { utilStyles } from "../utils/utils";
import self from "./radio.module.css";

export interface RadioProps {
  /**
   * The [HTML `name`][1] attribute of the radio. Only one radio button in a
   * same-named group of radio buttons can be checked at a time.
   *
   * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name_and_radio_buttons
   */
  name: string;
  /**
   * The [HTML `value`][1] attribute of the radio. It is used to identify
   * which radio in a group is selected. It is also returned in the
   * `setValue` callback.
   *
   * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value
   */
  value: string;
  /**
   * The label of the checkbox. This accepts ReactNode so you can have custom
   * markup.
   *
   * We intentionally exclude the falsy values here (e.g. "null", "false").
   * To ensure good accessibility, always define a label for your checkbox,
   * even if you don't want to display it (see the "hideLabel" prop).
   */
  children: Exclude<React.ReactNode, null | false | undefined>;
  /**
   * Hide the label visually, but still leaving it accessible for screen
   * readers. For sighted users, this displays just the box. For unsighted,
   * it works like a normal checkbox.
   *
   * See the [`selectable`][1] prop of the Table component for a real-life
   * example.
   *
   * [1]: /docs/components-table--docs#selectable-multiple
   */
  hideLabel?: boolean;
  /**
   * The [HTML `disabled`][1] attribute. If true, it prevents users from
   * interacting with the radio button.
   *
   * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled
   */
  disabled?: boolean;
  /**
   * Callback to set the value in controlled mode. The param is the `value`
   * prop of the radio. This should effectively set the `checked` prop.
   */
  setValue?: (value: string) => void;
  /**
   * The checked state of the radio in controlled mode.
   */
  checked?: boolean;
  /**
   * The default checked value of the radio in uncontrolled mode.
   */
  defaultChecked?: boolean;
  /**
   * A [reference][1] to the underlying `input` element. Usually useful in
   * uncontrolled mode.
   *
   * [1]: https://reactjs.org/docs/forwarding-refs.html
   */
  forwardedRef?: ForwardedRef<HTMLInputElement>;
}

/**
 * A radio is rendered as a circle that are filled when activated. They are
 * generally used as groups. See [Radio Group][1] for more practical usages.
 *
 * [1]: /docs/components-radio-group--docs
 */
export const Radio = (props: RadioProps): JSX.Element => {
  const style = Checkbox.styles.outset;
  return (
    <label className={shared.container}>
      <input
        type="radio"
        className={[shared.input, self.input, style.input, outline.normal].join(
          " ",
        )}
        name={props.name}
        value={props.value}
        // Controlled
        checked={props.checked}
        onChange={(event) => props.setValue?.(event.target.value)}
        disabled={props.disabled}
        // Uncontrolled
        defaultChecked={props.defaultChecked}
        ref={props.forwardedRef}
      />
      <span className={[shared.icon, style.icon, self.icon].join(" ")}>
        <Icon display="block" component={coreIcons.dot} />
      </span>
      <span
        className={[
          shared.label,
          style.label,
          props.hideLabel ? utilStyles.srOnly : "",
        ].join(" ")}
        children={props.children}
      />
    </label>
  );
};
