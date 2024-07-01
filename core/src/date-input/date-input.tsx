import { ReactNode, useState } from "react";
import { DayPicker, Matcher } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Input, InputProps } from "../input/input";
import { Popover } from "../popover/popover";
import "./date-input.css";
import { DateInputFormat, dateInputFormats } from "./format";

interface Props {
	/**
	 * Date format of the text box. This is used to display the selected date
	 * and to parse the user's input into `Date`. Choose one from
	 * `DateInput.formats`. Defaults to "dd/mm/yyyy".
	 */
	format?: DateInputFormat;
	/**
	 * The maximum date users can choose in the pop-up calendar.
	 */
	maxDate?: Date;
	/**
	 * The minimum date users can choose in the pop-up calendar.
	 */
	minDate?: Date;
	/**
	 * Value of the input in controlled mode. Note that it includes "null",
	 * to represent the state where the user's input is invalid (e.g.
	 * "31/2/1999"). This follows the behavior in HTML.
	 */
	value?: Date | null;
	/**
	 * Handler to set the value in controlled mode. Note that it includes
	 * "null". See "value" prop for detail.
	 */
	setValue?: (date: Date | null) => void;
	/**
	 * Initial value of the input in uncontrolled mode.
	 */
	defaultValue?: Date | null;
	/**
	 * Whether the input is disabled. This disables the whole input. If you
	 * want to disable some days, use "minDate" and "maxDate"
	 */
	disabled?: InputProps["disabled"];
	/**
	 * Size of the text box. Choose one from `DateInput.sizes`. Same default as
	 * the in "Input" component.
	 */
	size?: InputProps["size"];
	/**
	 * Style of the text box. Choose one from `DateInput.styles`. Same default
	 * as in the "Input" component.
	 */
	style?: InputProps["style"];
	/**
	 * The icon of the text box. See "Icon" page.
	 */
	icon?: InputProps["icon"];
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

const getValue = (props: Props): Date | undefined => {
	console.log("get", props.value);

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

const getDisabledDays = (props: Props): Matcher | Matcher[] => {
	const { minDate: min, maxDate: max } = props;
	let days: Matcher[] = [];
	if (max) days.push({ after: max });
	if (min) days.push({ before: min });
	return days;
};

/**
 * A date input is a control for users to enter a date, either by typing it or
 * choosing from a pop-up calendar.
 *
 * The Date Input component is based on [React Day Picker][3], as an
 * alternative to the built-in `<Input type="date" />`. It works on
 * [unsupported browsers][2] and can display custom date format (e.g. "dmy" or
 * "mdy"). If you don't need these features, use [Input][1] to have better
 * accessibility support.

 * [1]: /docs/components-input--primary#date
 * [2]: https://caniuse.com/input-datetime
 * [3]: https://react-day-picker.js.org
 *
 */
export const DateInput = (props: Props): JSX.Element => {
	const format = props.format ?? DateInput.formats.dmy;
	console.log(format);

	const [month, setMonth] = useState<Date>(() => new Date());
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		getValue(props),
	);
	const [inputValue, setInputValue] = useState("");

	const handleDayPickerSelect = (date: Date | undefined) => {
		if (!date) {
			setInputValue("");
			setSelectedDate(undefined);
		} else {
			setSelectedDate(date);
			setMonth(date);
			setInputValue(format.format(date));
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value); // keep the input value in sync

		const parsedDate = format.parse(e.target.value);

		if (!parsedDate) {
			setSelectedDate(undefined);
		} else {
			setSelectedDate(parsedDate);
			setMonth(parsedDate);
		}
	};

	return (
		<Popover
			target={(popover) => {
				return (
					<Input
						style={props.style}
						size={props.size}
						disabled={props.disabled}
						icon={props.icon}
						onClick={() => popover.toggle()}
						placeholder={format.placeholder}
						value={inputValue}
						onChange={handleInputChange}
					/>
				);
			}}
			content={() => {
				return (
					<div style={{ backgroundColor: "white" }}>
						<DayPicker
							mode="single"
							month={month}
							onMonthChange={setMonth}
							selected={selectedDate}
							onSelect={handleDayPickerSelect}
							disabled={getDisabledDays(props)}
						/>
					</div>
				);
			}}
		/>
	);
};

DateInput.formats = dateInputFormats;
DateInput.sizes = Input.sizes;
DateInput.styles = Input.styles;
