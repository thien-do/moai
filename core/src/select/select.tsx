import { ChangeEventHandler, ForwardedRef } from "react";
import { border } from "../border/border";
import { buttonColors } from "../button/color/color";
import flat from "../button/style/flat.module.css";
import outset from "../button/style/outset.module.css";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { outline } from "../outline/outline";
import s from "./select.module.css";

export interface SelectStyle {
	select: string;
}

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
	/**
	 * The value of the option. This is a [generic][1] type so you can use
	 * Moai's Select for not only string but anything.
	 *
	 * [1]: https://www.typescriptlang.org/docs/handbook/2/generics.html
	 */
	value: T;
	/**
	 * The id of the option. This should be unique across the option list.
	 */
	id: string;
	/**
	 * The label of the option to be displayed in the option menu.
	 */
	label: string;
	/**
	 * If true, the option is disabled.
	 */
	disabled?: boolean;
}

export interface SelectProps<T> {
	/**
	 * The option list of this select. See "SelectOption" tab for detail.
	 */
	options: SelectOption<T>[];
	/**
	 * Initial value of the select in uncontrolled mode
	 */
	defaultValue?: T;
	/**
	 * [Reference][1] to the `select` element. Usually useful in uncontrolled
	 * mode.
	 *
	 * [1]: https://reactjs.org/docs/forwarding-refs.html
	 */
	forwardedRef?: ForwardedRef<HTMLSelectElement>;
	/**
	 * The selected value in controlled mode
	 */
	value?: T;
	/**
	 * Callback to set the selected value in controlled mode
	 */
	setValue?: (value: T) => void;
	/**
	 * Style of the select. Choose one from `Select.styles`.
	 */
	style?: SelectStyle;
	/**
	 * Size of the select. Choose one from `Select.sizes`.
	 */
	size?: SelectSize;
	/**
	 * By default, the width of a select is based on its longest option to
	 * avoid changing layout when users switching between options.
	 *
	 * Set the `fill` prop to `true` to let the select expands to fill its
	 * container instead. This helps you to control the select's width. (By
	 * setting the width of its container.)
	 */
	fill?: boolean;
	/**
	 * The [HTML `disabled`][1] attribute. If true, the select is disabled. See
	 * the "SelectOption" tab if you only want to disable some options.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-disabled
	 */
	disabled?: boolean;
	/**
	 * The [HTML `id`][1] attribute of the select.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id
	 */
	id?: string;
	/**
	 * The [HTML `required`][1] attribute of the select.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-required
	 */
	required?: boolean;
}

const renderOption = <T,>(option: SelectOption<T>): JSX.Element => (
	<option
		key={option.id}
		// This uses "id" because HTML's option can only receive string value.
		// However, this won't be the value we passed to props.setValue. In the
		// onChange handler we'll use this id to return the generic typed
		// option.value
		value={option.id}
		disabled={option.disabled}
		children={option.label}
	/>
);

const findId = <T,>(props: SelectProps<T>, value?: T): string | undefined => {
	return props.options.find((o) => o.value === value)?.id;
};

const onChange =
	<T,>(props: SelectProps<T>): ChangeEventHandler<HTMLSelectElement> =>
	(event): void => {
		if (props.setValue === undefined) return;
		// Use option.value as the "id" to look for the actual, generic-type value
		const id = event.target.value;
		const option = props.options.find((o) => o.id === id);
		if (!option) throw Error(`Option not found: "${id}"`);
		props.setValue(option.value);
	};

/**
 * Users use selects to choose an option out of a list. When activated, a
 * select displays (drops down) a list of options. When inactive, it only shows
 * the selected option, thus is a space-effective alternative to [radio
 * groups][1].
 *
 * [1]: /docs/components-radio-group--primary
 */
export const Select = <T,>(props: SelectProps<T>): JSX.Element => {
	const cls = getClassNames(props);
	const value = findId(props, props.value);
	const defaultValue = findId(props, props.defaultValue);
	return (
		<div className={cls.container}>
			<select
				id={props.id}
				className={cls.select}
				disabled={props.disabled}
				children={props.options.map(renderOption)}
				// Uncontrolled
				defaultValue={defaultValue}
				ref={props.forwardedRef}
				// Controlled
				value={value}
				required={props.required}
				onChange={onChange(props)}
			/>
			<span className={cls.icon}>
				{/* The "size" is also set in CSS */}
				<Icon size={12} display="block" component={coreIcons.caret} />
			</span>
		</div>
	);
};

Select.styles = {
	outset: {
		select: [
			border.radius,
			buttonColors.none.outset.mainClassName,
			outset.main,
		].join(" "),
	} as SelectStyle,
	flat: {
		select: [flat.main, buttonColors.none.flat.mainClassName].join(" "),
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

Select.toNumberOption = (num: number): SelectOption<number> => ({
	value: num,
	id: num.toString(),
	label: num.toString(),
});
