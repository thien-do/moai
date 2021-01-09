import React, { useEffect } from "react";
import outset from "../button/outset.module.css";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { outline } from "../outline/outline";
import self from "./checkbox.module.css";
import s from "./shared.module.css";

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

	return (
		<label className={s.container}>
			<input
				type="checkbox"
				className={[
					s.input,
					self.input,
					outset.main,
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
			<span className={[s.icon, self.check].join(" ")}>
				<Icon display="block" path={coreIcons.tick} />
			</span>
			<span className={[s.icon, self.indeterminate].join(" ")}>
				<Icon display="block" path={coreIcons.minus} />
			</span>
			<span className={s.label}>{props.children}</span>
		</label>
	);
};
