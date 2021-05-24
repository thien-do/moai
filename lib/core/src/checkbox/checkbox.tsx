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
	 * Control the current checkbox is selected or not
	 */
	checked?: boolean;
	/**
	 * Callback to set the checked value in controlled mode
	 */
	setChecked?: (checked: boolean) => void;
	/**
	 * Define whether the checkbox is indeterminate or not 
	 */
	indeterminate?: boolean;
	// Uncontrolled
	/**
	 * The default checked value of checkbox
	 */
	defaultChecked?: boolean;
	/**
	 * Reference to the button element. Usually useful in uncontrolled mode.
	 */
	forwardedRef?: React.ForwardedRef<HTMLInputElement>;
	// Body
	/**
	 * The label value for the checkbox
	 */
	children: React.ReactNode;
	/**
	 * Define whether the checkbox is disabled or not
	 */
	disabled?: boolean;
}

/**
 * Checkboxes allow to select multiple options from an options list.
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
		if (typeof fRef === "function") fRef(ref.current);
		if (typeof fRef === "object") fRef.current = ref.current;
		throw Error(`Unknown props.forwardedRef type: ${typeof fRef}`);
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
			<span
				className={[shared.label, style.label].join(" ")}
				children={props.children}
			/>
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
