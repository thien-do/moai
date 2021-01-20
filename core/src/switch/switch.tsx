import React, { useEffect } from "react";
import self from "./switch.module.css";
import shared from "./shared.module.css";
import theme from "./theme.module.css";

export interface SwitchProps {
	// Controlled
	checked?: boolean;
	setChecked?: (checked: boolean) => void;
	// Uncontrolled
	defaultChecked?: boolean;
	forwardedRef?: React.ForwardedRef<HTMLInputElement>;
	// Body
	disabled?: boolean;
}

export const Switch = (props: SwitchProps): JSX.Element => {
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

	return (
		<label className={[
			shared.container,
			self.container,
		].join(" ")}>
			<input
				type="checkbox"
				className={[
					shared.input,
					self.input,
				].join(" ")}
				disabled={props.disabled}
				// Uncontrolled
				defaultChecked={props.defaultChecked}
				ref={ref}
				// Controlled
				checked={props.checked}
				onChange={(e) => props.setChecked?.(e.target.checked)}
			/>
			<div className={[shared.line, self.line, theme.line].join(
					" "
				)} />
			<div
				className={[shared.dot, self.dot, theme.dot].join(
					" "
				)}
			/>
		</label>
	);
};
