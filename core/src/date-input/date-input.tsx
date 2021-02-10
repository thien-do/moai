import { ReactNode, RefObject, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { Input, InputProps } from "../input/input";
import { PopoverPane } from "../popover/pane/pane";
import "./date-input.css";
import { DateInputMonth } from "./month/month";
import { DateInputNavbar } from "./navbar/navbar";

interface Props {
	value?: Date | null;
	setValue?: (date: Date | null) => void;
	initialValue?: Date | null;
	size?: InputProps["size"];
	style?: InputProps["style"];
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
	if (props.initialValue !== undefined) {
		return props.initialValue ?? undefined;
	}
	// Uncontrolled wo initial value
	return undefined;
};

export const DateInput = (props: Props): JSX.Element => {
	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [month, setMonth] = useState<Date>(() => new Date());

	return (
		<div ref={setTarget}>
			<DayPickerInput
				ref={props.forwardedRef}
				inputProps={{ style: props.style, size: props.size }}
				component={Input.Forwarded}
				overlayComponent={(dayPicker: DayPickerOverlayProps) => (
					<Overlay target={target} {...dayPicker} />
				)}
				dayPickerProps={{
					month: month,
					navbarElement: DateInputNavbar,
					captionElement: ({ date }) => (
						<DateInputMonth value={date} setValue={setMonth} />
					),
				}}
				value={getValue(props)}
				// The lib's type is missing "undefined" case
				onDayChange={(day: Date | undefined) => {
					if (props.setValue === undefined) return;
					props.setValue(day ?? null);
				}}
			/>
		</div>
	);
};
