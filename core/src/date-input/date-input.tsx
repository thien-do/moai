import { ReactNode, RefObject, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Modifier } from "react-day-picker";
import { Input, InputProps } from "../input/input";
import { PopoverPane } from "../popover/pane/pane";
import "./date-input.css";
import { DateInputFormat, dateInputFormats } from "./format";
import { DateInputMonth } from "./month/month";
import { DateInputNavbar } from "./navbar/navbar";

interface Props {
	/**
	 * Date format of the text box. This is used to display the selected date
	 * as well as parse the user's input into Date. Choose one from
	 * `DateInput.formats`. Defaults to "dd/mm/yyyy".
	 */
	format?: DateInputFormat;
	/**
	 * The maximum date the user can choose
	 */
	maxDate?: Date;
	/**
	 * The minimum date the user can choose
	 */
	minDate?: Date;

	/**
	 * Value of the input in controlled mode
	 */
	value?: Date | null;
	/**
	 * Handler to set the value in controlled mode
	 */
	setValue?: (date: Date | null) => void;
	/**
	 * Initial value of the input in uncontrolled mode
	 */
	defaultValue?: Date | null;
	/**
	 * Whether the input is disabled. This disables the whole input. If you
	 * want to disable some days, use "minDate" and "maxDate"
	 */
	disabled?: InputProps["disabled"];

	/**
	 * Size of the text box. Choose one from `DateInput.sizes`.
	 */
	size?: InputProps["size"];
	/**
	 * Style of the text box. Choose one from `DateInput.styles`.
	 */
	style?: InputProps["style"];
	/**
	 * The icon of the text box. See "Icon" page.
	 */
	icon?: InputProps["icon"];

	/**
	 * Reference to the underlying [DayPickerInput](https://react-day-picker.js.org/api/DayPickerInput/)
	 * instance.
	 */
	forwardedRef?: RefObject<DayPickerInput>;
}

interface DayPickerOverlayProps {
	children: ReactNode;
	selectedDay: Date;
	month: Date;
	input: null;
	classNames: {
		container: string; // input
		overlay: string;
		overlayWrapper: string;
	};
}

interface OverlayProps extends DayPickerOverlayProps {
	target: HTMLDivElement | null;
}

const Overlay = (props: OverlayProps): JSX.Element | null => {
	const { target, children, selectedDay, classNames, month, input, ...rest } = props; // prettier-ignore
	if (target === null) return null;
	return (
		<div {...rest}>
			<PopoverPane target={target} children={children} />
		</div>
	);
};

const getValue = (props: Props): Date | undefined => {
	// Controlled
	if (props.value !== undefined) {
		return props.value ?? undefined;
	}
	// Uncontrolled w initial value
	if (props.defaultValue !== undefined) {
		return props.defaultValue ?? undefined;
	}
	// Uncontrolled wo initial value
	return undefined;
};

const getDisabledDays = (props: Props): Modifier => {
	// This is quite complicated because we need to avoid mutating the "days"
	// variable as well as the strictness of Modifier
	const { minDate: min, maxDate: max } = props;
	let days: Modifier = undefined;
	if (max) days = { after: max };
	if (min) days = { ...days, before: min };
	return days;
};

export const DateInput = (props: Props): JSX.Element => {
	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [month, setMonth] = useState<Date>(() => new Date());
	const format = props.format ?? DateInput.formats.dmy;

	return (
		<div ref={setTarget}>
			<DayPickerInput
				ref={props.forwardedRef}
				inputProps={{
					style: props.style,
					size: props.size,
					disabled: props.disabled,
					icon: props.icon,
				}}
				component={Input.Forwarded}
				clickUnselectsDay
				overlayComponent={(dayPicker: DayPickerOverlayProps) => (
					<Overlay target={target} {...dayPicker} />
				)}
				dayPickerProps={{
					month: month,
					navbarElement: DateInputNavbar,
					captionElement: ({ date }) => (
						<DateInputMonth value={date} setValue={setMonth} />
					),
					disabledDays: getDisabledDays(props),
				}}
				value={getValue(props)}
				// The lib's type is missing "undefined" case
				onDayChange={(day: Date | undefined) => {
					if (props.setValue === undefined) return;
					props.setValue(day ?? null);
				}}
				// Format
				placeholder={format.placeholder}
				formatDate={format.format}
				parseDate={format.parse}
			/>
		</div>
	);
};

DateInput.formats = dateInputFormats;
DateInput.sizes = Input.sizes;
DateInput.styles = Input.styles;
