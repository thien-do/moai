import { ForwardedRef, ReactNode } from "react";
import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import self from "./radio.module.css";
import shared from "../checkbox/shared.module.css";
import { coreIcons } from "../icons/icons";
import { Checkbox } from "../checkbox/checkbox";

export interface RadioProps {
	/**
	 * The name of radio button, must be unique to the radio group. See [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name_and_radio_buttons)
	 */
	name: string;
	/**
	 * The value of radio button, used when submitting a from. See [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#value)
	 */
	value: string;
	/**
	 * The label value for the radio button
	 */
	children: ReactNode;
	// Controlled
	/**
	 * Define whether the radio button is disabled or not
	 */
	disabled?: boolean;
	/**
	 * Callback to set the value in controlled mode
	 */
	setValue?: (value: string) => void;
	/**
	 * Control the current radio button is checked or not
	 */
	checked?: boolean;
	// Uncontrolled
	/**
	 * The default checked value of radio button
	 */
	defaultChecked?: boolean;
	/**
	 * [Reference](https://reactjs.org/docs/forwarding-refs.html) to the `button` element. Usually useful in uncontrolled mode.
	 */
	forwardedRef?: ForwardedRef<HTMLInputElement>;
}

/**
 * Radio buttons allow to select a single option from an options list.
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
				<Icon display="block" path={coreIcons.dot} />
			</span>
			<span className={[shared.label, style.label].join(" ")}>
				{props.children}
			</span>
		</label>
	);
};
