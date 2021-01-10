import React from "react";
import { background } from "../background/background";
import { Icon, IconPath, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import { text } from "../text/text";
import s from "./input.module.css";
import sOutset from "./outset.module.css";
import sFlat from "./flat.module.css";
import sRadius from "../button/border-radius.module.css";

export interface InputStyle {
	main: string;
	disabled: string;
}

export interface InputSize {
	main: string;
	mainWithIcon: string;
	icon: string;
	iconSize: IconSize;
}

const getClass = (props: InputProps): string => {
	const styles = [s.input, outline.normal, props.style.main];
	styles.push(props.icon ? props.size.mainWithIcon : props.size.main);
	return styles.join(" ");
};

export interface InputProps {
	type?: string;
	// Uncontrolled
	defaultValue?: string | number;
	forwardedRef?: React.ForwardedRef<HTMLInputElement>;
	// Controlled
	value?: string;
	setValue?: (value: string) => void;
	/**
	 * Id of a datalist element to be used. Can pass an object with values for
	 * the Input component to create the datalist.
	 */
	list?: { id: string; values: string[] } | string;
	// Style
	icon?: IconPath;
	style: InputStyle;
	size: InputSize;
	// Attributes
	id?: string;
	disabled?: boolean;
	readOnly?: boolean;
	placeholder?: string;
	autoFocus?: boolean;
	autoSelect?: boolean;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	// Events
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export const Input = (props: InputProps): JSX.Element => {
	const ref = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		if (!props.autoSelect) return;
		const element = ref.current;
		if (element === null) throw Error("ref is null");
		element.select();
	}, []);

	return (
		<div className={s.container}>
			<input
				ref={ref}
				// Value
				type={props.type}
				defaultValue={props.defaultValue}
				value={props.value}
				onChange={(event) => {
					props.setValue?.(event.currentTarget.value);
				}}
				// Event handlers
				onBlur={props.onBlur}
				onFocus={props.onFocus}
				onKeyDown={props.onKeyDown}
				onKeyPress={props.onKeyPress}
				onKeyUp={props.onKeyUp}
				// Properties
				id={props.id}
				className={getClass(props)}
				list={
					typeof props.list === "string"
						? props.list
						: props.list?.id ?? undefined
				}
				readOnly={props.readOnly}
				disabled={props.disabled}
				placeholder={props.placeholder}
				autoFocus={props.autoFocus}
				aria-label={props["aria-label"]}
				aria-labelledby={props["aria-labelledby"]}
			/>
			{props.icon && (
				<div
					className={[s.icon, text.muted, props.size.icon].join(" ")}
				>
					<Icon
						display="block"
						path={props.icon}
						size={props.size.iconSize}
					/>
				</div>
			)}
			{typeof props.list === "object" && (
				<datalist id={props.list.id}>
					{props.list.values.map((value) => (
						<option key={value} value={value} />
					))}
				</datalist>
			)}
		</div>
	);
};

Input.styles = {
	outset: {
		main: [
			s.outset,
			sOutset.main,
			sRadius.container,
			background.primary,
		].join(" "),
	} as InputStyle,
	flat: {
		main: [sFlat.main].join(" "),
	} as InputStyle,
};

Input.sizes = {
	medium: {
		main: s.mediumMain,
		mainWithIcon: s.mediumMainWithIcon,
		icon: s.mediumIcon,
		iconSize: 16,
	} as InputSize,
	small: {
		main: s.smallMain,
		mainWithIcon: s.smallMainWithIcon,
		icon: s.smallIcon,
		iconSize: 12,
	} as InputSize,
};

Input.defaultProps = {
	style: Input.styles.outset,
	size: Input.sizes.medium,
};
