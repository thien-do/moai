import { ChangeEventHandler, ForwardedRef, useMemo } from "react";
import { border } from "../border/border";
import flat from "../button/flat.module.css";
import outset from "../button/outset.module.css";
import { Icon } from "../icon/icon";
import { coreIcons } from "../icons/icons";
import { outline } from "../outline/outline";
import s from "./time-select.module.css";

export type TimeSelectStyle = {
	select: string;
};

export interface TimeSelectSize {
	select: string;
	icon: string;
	iconCaret: string;
}

export interface TimeSelectType {
	quarter?: 15;
	half?: 30;
	one?: 60;
}

const getClassNames = (props: SelectProps) => {
	const style = props.style ?? TimeSelect.styles.outset;
	const size = props.size ?? TimeSelect.sizes.medium;
	const width = props.fill ? s.fill : "";
	return {
		select: [s.select, style.select, size.select, outline.normal].join(" "),
		container: [s.container, width].join(" "),
		icon: [s.icon, size.icon].join(" "),
		iconCaret: [s.iconCaret, size.iconCaret].join(" "),
	};
};

export interface SelectOption {
	/**
	 * The value of the option. This is a [generic][1] type so you can use
	 * Moai's Select for not only string but anything.
	 *
	 * [1]: https://www.typescriptlang.org/docs/handbook/2/generics.html
	 */
	value: Date;
	/**
	 * The id of the option. This should be unique across the option list.
	 */
	id: string;
	/**
	 * The label of the option to be displayed in the option menu.
	 */
	label: string;
	/**
	 * Whether the option is disabled.
	 */
	disabled?: boolean;
}

export interface SelectProps {
	/**
	 * Initial value of the select in uncontrolled mode
	 */
	defaultValue?: Date;
	/**
	 * [Reference][1] to the `select` element. Usually useful in uncontrolled mode.
	 *
	 * [1]: https://reactjs.org/docs/forwarding-refs.html
	 */
	forwardedRef?: ForwardedRef<HTMLSelectElement>;
	/**
	 * Value of the selected option in controlled mode
	 */
	value?: Date;
	/**
	 * Callback to set the value in controlled mode
	 */
	setValue?: (value: Date) => void;
	/**
	 * Style of the select. Choose one from `Select.styles`.
	 */
	style?: TimeSelectStyle;
	/**
	 * Size of the select. Choose one from `Select.sizes`.
	 */
	size?: TimeSelectSize;
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
	 * Whether the select is disabled
	 */
	disabled?: boolean;
	/**
	 * The "id" attribute in HTML
	 */
	id?: string;
	/**
	 * props date is the date you want to select the hour of that date. default is today
	 */
	date?: Date;
	/**
	 * props type is a distance between hours. default is one = 60 minus, half = 30 minus, quarter = 15 minus
	 */
	type?: 15 | 30 | 60; // or use keyof TimeSelectJump, pass props from TimeSelect.type
}

const formatTime = (date: Date) => {
	return `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:${
		date.getMinutes() === 0 ? "00" : date.getMinutes()
	}`;
};

const placeholderOption: SelectOption = {
	value: null,
	id: "null",
	// The "placeholder"
	label: "Select hour",
	// Remove this if users should be able to select the
	// "empty" state
	disabled: true,
}

const getOptions = (date: Date, type: number): SelectOption[] => {
	let condition = 0;
	const options: SelectOption[] = [
		placeholderOption
	];
	const dateOfValue = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate()
	);
	let typeTime: number = 1;
	let numberOfLoops: number = 24;
	let anphal = 0;

	switch (type) {
		case TimeSelect.type.quarter: {
			typeTime = 4;
			numberOfLoops = numberOfLoops * typeTime; // loops 24 * 4
			break;
		}
		case TimeSelect.type.half: {
			typeTime = 2;
			numberOfLoops = numberOfLoops * typeTime; // loops 24 * 2
			break;
		}
		default: {
			numberOfLoops = numberOfLoops * typeTime; // loops 24
		}
	}

	while (condition < numberOfLoops) {
		const date = new Date(dateOfValue);
		date.setHours(
			Math.floor(condition / typeTime), // set hour
			anphal * 60, // set minute
			0 // set second
		);
		options.push({
			value: date,
			id: date.toString(),
			label: formatTime(date),
		});
		condition += 1;
		anphal +=  1 / typeTime;
		if (anphal >= 1) {
			anphal = 0;
		}
	}

	return options;
};

const renderOption = (option: SelectOption): JSX.Element => (
	<option
		disabled={option.disabled}
		value={option.id}
		key={option.id}
		children={option.label}
	/>
);

const findId = (options: SelectOption[], value?: Date): string | undefined => {
	if (value === null) {
		return "null"; // display placeholder when prop value dont define
	}
	return options.find(
		(o) => value && o.value && o.value.getTime() === value.getTime()
	)?.id;
};

const onChange = (
	props: SelectProps,
	options: SelectOption[]
): ChangeEventHandler<HTMLSelectElement> => (event): void => {
	if (props.setValue === undefined) return;
	const id = event.target.value;
	const option = options.find((o) => o.id === id);
	if (!option) throw Error(`Option not found: "${id}"`);
	props.setValue(option.value);
};

export const TimeSelect = (props: SelectProps) => {
	const cls = getClassNames(props);
	const date = (props.value && new Date(props.value)) || new Date(); // set date that you want to select the hour. default is today
	const type = props.type || TimeSelect.type.one;
	date.setHours(0, 0, 0); // default hour of date to select
	const options = useMemo(() => getOptions(date, type), [type]);

	const value = findId(options, props.value);
	const defaultValue = findId(options, props.defaultValue);

	return (
		<div className={cls.container}>
			<select
				id={props.id}
				className={cls.select}
				disabled={props.disabled}
				children={options.map(renderOption)}
				// Uncontrolled
				defaultValue={defaultValue}
				ref={props.forwardedRef}
				// Controlled
				value={value}
				onChange={onChange(props, options)}
			/>
			<span className={cls.iconCaret}>
				<Icon display="block" path={coreIcons.caret} />
			</span>
			<span className={cls.icon}>
				<Icon display="block" path={coreIcons.minus} />
			</span>
		</div>
	);
};

TimeSelect.styles = {
	outset: {
		select: [border.radius, outset.main].join(" "),
	} as TimeSelectStyle,
	flat: {
		select: [flat.main].join(" "),
	} as TimeSelectStyle,
};

TimeSelect.sizes = {
	medium: {
		select: s.mediumSelect,
		icon: s.mediumIcon,
		iconCaret: s.mediumIconCaret,
	} as TimeSelectSize,
	small: {
		select: s.smallSelect,
		icon: s.smallIcon,
		iconCaret: s.smallIconCaret,
	} as TimeSelectSize,
};

TimeSelect.type = {
	quarter: 15,
	half: 30,
	one: 60,
} as TimeSelectType;
