import { ForwardedRef, ReactNode } from "react";
import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import self from "./radio.module.css";
import shared from "../checkbox/shared.module.css";
import { coreIcons } from "../icons/icons";
import { Checkbox } from "../checkbox/checkbox";

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
	 * The label for the radio.
	 */
	children: ReactNode;
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
 * Radios are rendered as circles that are filled when activated. They are used
 * to select a single option from a set. Functional-wise, a radio group is
 * similar to a [select][1] but displays all options upfront.
 * 
 * [1]: /docs/components-select--primary
 */
export const Radio = (props: RadioProps): JSX.Element => {
	const style = Checkbox.styles.outset;
	return (
		<label className={shared.container}>
			<input
				type="radio"
				className={[
					shared.input,
					self.input,
					style.input,
					outline.normal,
				].join(" ")}
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
			<span className={[shared.label, style.label].join(" ")}>
				{props.children}
			</span>
		</label>
	);
};
