import { ReactNode, RefObject, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Modifier } from "react-day-picker";
import { Input, InputProps } from "../input/input";
import { PopoverPane } from "../popover/pane/pane";
import "./date-input.css";
import { DateInputFormat, dateInputFormats } from "./format";
import { DateInputMonth } from "./month/month";
import { DateInputNavbar } from "./navbar/navbar";
import { coreIcons } from '../icons/icons'

interface Props {
	/**
	 * Date format of the text box. This is used to display the selected date
	 * as well as parse the user's input into Date. Choose one from
	 * `DateInput.formats`.
	 */
	format: DateInputFormat;
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
	 * Size of the text box. Choose one from `DateInput.sizes`.
	 */
	size?: InputProps["size"];
	/**
	 * Style of the text box. Choose one from `DateInput.styles`.
	 */
	style?: InputProps["style"];

	disabled?: InputProps["disabled"];

	maxDate?: Date;

	minDate?: Date;

	icon?: boolean;
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

export const DateInput = (props: Props): JSX.Element => {
	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [month, setMonth] = useState<Date>(() => new Date());

	let disabledDays: Modifier = undefined
	if (props.maxDate) {
		disabledDays = {
			after: props.maxDate
		}
	}
	if (props.minDate) {
		disabledDays = {
			...disabledDays,
			before: props.minDate
		}
	}

	return (
		<div ref={setTarget}>
			<DayPickerInput
				ref={props.forwardedRef}
				inputProps={{ 
					style: props.style,
					size: props.size, 
					disabled: props.disabled,
					icon: props.icon ? coreIcons.duplicate : undefined
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
					disabledDays,
				}}
				value={getValue(props)}
				// The lib's type is missing "undefined" case
				onDayChange={(day: Date | undefined) => {
					if (props.setValue === undefined) return;
					props.setValue(day ?? null);
				}}
				// Format
				placeholder={props.format.placeholder}
				formatDate={props.format.format}
				parseDate={props.format.parse}
			/>
		</div>
	);
};

DateInput.formats = dateInputFormats;
DateInput.sizes = Input.sizes;
DateInput.styles = Input.styles;
