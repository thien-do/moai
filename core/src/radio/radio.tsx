import { ForwardedRef, ReactNode } from "react";
import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import self from "./radio.module.css";
import shared from "../checkbox/shared.module.css";
import { coreIcons } from "../icons/icons";
import { Checkbox } from "../checkbox/checkbox";

export interface RadioProps {
	name: string;
	value: string;
	children: ReactNode;
	// Controlled
	disabled?: boolean;
	setValue?: (value: string) => void;
	checked?: boolean;
	// Uncontrolled
	defaultChecked?: boolean;
	forwardedRef?: ForwardedRef<HTMLInputElement>;
}

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
