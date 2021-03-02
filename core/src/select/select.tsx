import { ChangeEventHandler, ForwardedRef } from "react";
import { border } from "../border/border";
import flat from "../button/flat.module.css";
import outset from "../button/outset.module.css";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { outline } from "../outline/outline";
import s from "./select.module.css";

export type SelectStyle = {
	select: string;
};

export interface SelectSize {
	select: string;
	icon: string;
}

const getClassNames = <T,>(props: SelectProps<T>) => {
	const style = props.style ?? Select.styles.outset;
	const size = props.size ?? Select.sizes.medium;
	const width = props.fill ? s.fill : "";
	return {
		select: [s.select, style.select, size.select, outline.normal].join(" "),
		container: [s.container, width].join(" "),
		icon: [s.icon, size.icon].join(" "),
	};
};

export interface SelectOption<T> {
	value: T;
	id: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps<T> {
	/**
	 * Array of items in the list
	 */
	options: SelectOption<T>[];

	// Uncontrolled

	/**
	 * Initial value of the select box in uncontrolled mode
	 */
	defaultValue?: T;

	/**
	 * Usually useful in uncontrolled mode.
	 * Read [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html) for details.
	 */
	forwardedRef?: ForwardedRef<HTMLSelectElement>;

	// Controlled

	/**
	 * Value of the select in controlled mode
	 */
	value?: T;

	/**
	 * Handler to set the value in controlled mode
	 */
	setValue?: (value: T) => void;

	// Visual

	/**
	 * Style of the select box. Choose one from Select.styles.
	 */
	style?: SelectStyle;

	/**
	 * Size of the select box. Choose one from Select.sizes.
	 */
	size?: SelectSize;

	/**
	 * Whether the fill is enabled. The select box will fill the page.
	 */
	fill?: boolean;

	disabled?: boolean;
}

const renderOption = <T,>(option: SelectOption<T>): JSX.Element => (
	<option
		key={option.id}
		value={option.id}
		disabled={option.disabled}
		children={option.label}
	/>
);

const findId = <T,>(props: SelectProps<T>, value?: T): string | undefined => {
	return props.options.find((o) => o.value === value)?.id;
};

const onChange = <T,>(
	props: SelectProps<T>
): ChangeEventHandler<HTMLSelectElement> => (event): void => {
	if (props.setValue === undefined) return;
	const id = event.target.value;
	const option = props.options.find((o) => o.id === id);
	if (!option) throw Error(`Option not found: "${id}"`);
	props.setValue(option.value);
};

/**
 * Select let users select a value from a list of items.
 *
 * `Select<T>` is a generic component to work with your data types, the type of one item in items. In TypeScript, you must first obtain a non-generic reference:
 *
 * ```typescript
 	const selectItem: SelectOption<string> = {
 			value: "elect",
 			id: "select",
 			label: "Select",
				disabled: true, // As optional
	};
 * ```
 */

export const Select = <T,>(props: SelectProps<T>) => {
	const cls = getClassNames(props);
	const value = findId(props, props.value);
	const defaultValue = findId(props, props.defaultValue);
	return (
		<div className={cls.container}>
			<select
				className={cls.select}
				disabled={props.disabled}
				children={props.options.map(renderOption)}
				// Uncontrolled
				defaultValue={defaultValue}
				ref={props.forwardedRef}
				// Controlled
				value={value}
				onChange={onChange(props)}
			/>
			<span className={cls.icon}>
				<Icon display="block" path={coreIcons.caret} />
			</span>
		</div>
	);
};

Select.styles = {
	outset: {
		select: [border.radius, outset.main].join(" "),
	} as SelectStyle,
	flat: {
		select: [flat.main].join(" "),
	} as SelectStyle,
};

Select.sizes = {
	medium: {
		select: s.mediumSelect,
		icon: s.mediumIcon,
	} as SelectSize,
	small: {
		select: s.smallSelect,
		icon: s.smallIcon,
	} as SelectSize,
};

Select.toStringOption = (text: string): SelectOption<string> => ({
	value: text,
	id: text,
	label: text,
});
