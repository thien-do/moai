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
	checked?: boolean;
	setChecked?: (checked: boolean) => void;
	indeterminate?: boolean;
	// Uncontrolled
	defaultChecked?: boolean;
	forwardedRef?: React.ForwardedRef<HTMLInputElement>;
	// Body
	children: React.ReactNode;
	disabled?: boolean;
}

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
				children={<Icon display="block" path={coreIcons.check} />}
			/>
			<span
				className={[shared.icon, style.icon, self.indeterminate].join(
					" "
				)}
				children={<Icon display="block" path={coreIcons.dash} />}
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
