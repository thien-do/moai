import { ForwardedRef, ReactNode } from "react";
import outset from "../button/outset.module.css";
import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import self from "./radio.module.css";
import s from "../checkbox/shared.module.css";
import { coreIcons } from "../icons/icons";

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

export const Radio = (props: RadioProps): JSX.Element => (
	<label className={s.container}>
		<input
			type="radio"
			className={[s.input, self.input, outset.main, outline.normal].join(
				" "
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
		<span className={[s.icon, self.icon].join(" ")}>
			<Icon display="block" path={coreIcons.boldDot} />
		</span>
		<span className={s.label}>{props.children}</span>
	</label>
);
