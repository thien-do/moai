import React from "react";
import { background } from "../background/background";
import { Icon, IconPath, IconSize } from "../icon/icon";
import { outline } from "../outline/outline";
import { text } from "../text/text";
import s from "./input.module.css";
import sOutset from "./outset.module.css";
import sFlat from "./flat.module.css";
import { border } from "../border/border";

export interface InputStyle {
	main: string;
}

export interface InputSize {
	main: string;
	mainWithIcon: string;
	icon: string;
	iconSize: IconSize;
}

const getClass = (props: InputProps): string => {
	const style = props.style ?? Input.styles.outset;
	const styles = [s.input, outline.always, style.main];
	const size = props.size ?? Input.sizes.medium;
	styles.push(props.icon ? size.mainWithIcon : size.main);
	return styles.join(" ");
};

export interface InputProps {
	/**
	 * Type of input. For example: button, email, password, number, etc...
	 */
	type?: string;
	// Uncontrolled

	/**
	 * Initial value of the input in uncontrolled mode
	 */
	defaultValue?: string | number;

	/**
	 * Usually useful in uncontrolled mode.
	 * Read [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html) for details.
	 */
	forwardedRef?: React.ForwardedRef<HTMLInputElement>;
	// Controlled

	/**
	 * Value of the select in controlled mode
	 */
	value?: string;

	/**
	 * Handler to set the value in controlled mode
	 */
	setValue?: (value: string) => void;

	/**
	 * Id of a datalist element to be used. Can pass an object with values for
	 * the Input component to create the datalist.
	 */
	list?: { id: string; values: string[] } | string;

	// Style
	icon?: IconPath;

	/**
	 * Style of the text box. Choose one from Input.styles
	 */
	style?: InputStyle;

	/**
	 * Size of the text box. Choose one from Input.sizes
	 */
	size?: InputSize;

	// Attributes
	id?: string;
	disabled?: boolean;
	readOnly?: boolean;
	placeholder?: string;
	autoFocus?: boolean;
	autoSelect?: boolean;
	"aria-label"?: string;
	"aria-labelledby"?: string;
	maxLength?: number;

	// Events
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
	onClick?: React.KeyboardEventHandler<HTMLInputElement>;
	/**
	 * You should not need to use onChange! This exists only for compatibility
	 * with 3rd-party libraries (those that passing props to a custom rendered
	 * component)
	 */
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const ERRORS = {
	onChangeSetValue: `"onChange" and "setValue" must not be defined at the same time`,
};

const validate = (props: InputProps): void => {
	if (props.onChange !== undefined && props.setValue !== undefined) {
		throw Error(ERRORS.onChangeSetValue);
	}
};

export const Input = (props: InputProps): JSX.Element => {
	validate(props);

	const ref = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		if (!props.autoSelect) return;
		const element = ref.current;
		if (element === null) throw Error("ref is null");
		element.select();
	}, []);

	const size = props.size ?? Input.sizes.medium;

	return (
		<div className={s.container}>
			<input
				ref={ref}
				// Value
				type={props.type}
				defaultValue={props.defaultValue}
				value={props.value}
				onChange={(event) => {
					props.onChange?.(event);
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
				maxLength={props.maxLength}
			/>
			{props.icon && (
				<div className={[s.icon, text.muted, size.icon].join(" ")}>
					<Icon
						display="block"
						path={props.icon}
						size={size.iconSize}
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
	outset: { main: [sOutset.main, border.radius].join(" ") } as InputStyle,
	flat: { main: [sFlat.main].join(" ") } as InputStyle,
};

Input.sizes = {
	large: {
		main: s.largeMain,
		mainWithIcon: s.largeMainWithIcon,
		icon: s.largeIcon,
		iconSize: 16,
	} as InputSize,
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

Input.Forwarded = React.forwardRef<HTMLInputElement, InputProps>(
	(props, ref) => <Input forwardedRef={ref} {...props} />
);
