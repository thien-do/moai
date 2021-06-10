import React, { useEffect } from "react";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { outline } from "../outline/outline";
import self from "./checkbox.module.css";
import shared from "./shared.module.css";
import outset from "./outset.module.css";
import { border } from "../border/border";

interface CheckboxStyle {
	input: string;
	icon: string;
	label: string;
}

export interface CheckboxProps {
	// Controlled

	/**
	 * Whether the checkbox is checked in controlled mode.
	 */
	checked?: boolean;
	/**
	 * Callback to set the checked state in controlled mode.
	 */
	setChecked?: (checked: boolean) => void;
	/**
	 * Define the [indeterminate][1] state of the checkbox. Can only be used
	 * in controlled mode.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#attr-indeterminate
	 */
	indeterminate?: boolean;

	// Uncontrolled

	/**
	 * The default checked state of checkbox in uncontrolled mode.
	 */
	defaultChecked?: boolean;
	/**
	 * [Reference][1] to the HTML `input` element. This is useful in
	 * uncontrolled mode.
	 *
	 * [1]: https://reactjs.org/docs/forwarding-refs.html
	 */
	forwardedRef?: React.ForwardedRef<HTMLInputElement>;

	// Body

	/**
	 * The label of the checkbox.
	 */
	children: React.ReactNode;
	/**
	 * The [HTML `disabled`][1] attribute of the underlying input element. If
	 * set to `true`, this prevents users from interacting with the checkbox.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled
	 */
	disabled?: boolean;
}

/**
 * A checkbox is rendered as a square box that is checked when activated. It
 * is used to make a choice between two options. This is similar to
 * [toggles][1].
 *
 * A group of checkboxes is used to select multiple options. This is different
 * from a group of [radios][2] where only a single option can be selected at
 * the same time.
 *
 * [1]: /docs/components-switcher--toggle
 * [2]: /docs/components-radio--group
 */
export const Checkbox = (props: CheckboxProps): JSX.Element => {
	// Note that there is no intermediate state here, as we'd like to support
	// the uncontrolled mode properly, with ref support

	const ref = React.useRef<HTMLInputElement>(null);

	// Broadcast ref
	const fRef = props.forwardedRef;
	useEffect(() => {
		if (ref.current === null) throw Error("Ref is null");
		if (!fRef) return;
		switch (typeof fRef) {
			case "function":
				fRef(ref.current);
				break;
			case "object":
				fRef.current = ref.current;
				break;
			default:
				throw Error(`Unknown props.forwardedRef type: ${typeof fRef}`);
		}
	}, [fRef]);

	// Indeterminate can only be set by script
	useEffect(() => {
		if (ref.current === null) throw Error("Ref is null");
		if (props.indeterminate === undefined) return;
		ref.current.indeterminate = props.indeterminate;
	}, [props.indeterminate]);

	const style = Checkbox.styles.outset;

	return (
		<label className={shared.container}>
			<input
				type="checkbox"
				className={[
					shared.input,
					style.input,
					self.input,
					border.radius,
					outline.normal,
				].join(" ")}
				disabled={props.disabled}
				// Uncontrolled
				defaultChecked={props.defaultChecked}
				ref={ref}
				// Controlled
				checked={props.checked}
				onChange={(e) => props.setChecked?.(e.target.checked)}
			/>
			<span
				className={[shared.icon, style.icon, self.check].join(" ")}
				children={<Icon display="block" component={coreIcons.check} />}
			/>
			<span
				className={[shared.icon, style.icon, self.indeterminate].join(
					" "
				)}
				children={<Icon display="block" component={coreIcons.dash} />}
			/>
			{props.children !== null && (
				<span
					className={[shared.label, style.label].join(" ")}
					children={props.children}
				/>
			)}
		</label>
	);
};

Checkbox.styles = {
	outset: {
		input: outset.input,
		icon: outset.icon,
		label: outset.label,
	} as CheckboxStyle,
};
