import { ReactNode, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "./date-input.css";
import { Input } from "../input/input";
import { PopoverPane } from "../popover/pane/pane";
import { DateInputMonth } from "./month/month";
import { DateInputNavbar } from "./navbar/navbar";

interface Props {}

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

export const DateInput = (props: Props): JSX.Element => {
	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [month, setMonth] = useState<Date>(() => new Date());
	return (
		<div ref={setTarget}>
			<DayPickerInput
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
			/>
		</div>
	);
};
