import { Meta } from "@storybook/react/types-6-0";
import React, { useRef, useState } from "react";
import DayPickerInput from "react-day-picker/types/DayPickerInput";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { DateInput } from "./date-input";
import { _Story } from "../_story";

export default {
	title: "Components/DateInput",
	component: DateInput,
	argTypes: {
		style: _Story.arg(DateInput.styles),
		size: _Story.arg(DateInput.sizes),
		format: _Story.arg(DateInput.formats),
		disabled: _Story.arg("boolean"),
		minDate: _Story.arg(null),
		maxDate: _Story.arg(null),
		value: _Story.arg(null),
		setValue: _Story.arg(null),
		defaultValue: _Story.arg(null),
		forwardedRef: _Story.arg(null),
		icon: _Story.arg(null),
	},
	parameters: { stickyPrimary: true },
} as Meta;

interface Props {
	style?: string;
	size?: string;
	format?: string;
	disabled?: boolean;
}

export const Primary = (props: Props) => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 240 }}>
			<DateInput
				value={date}
				setValue={setDate}
				// Storybook's controls
				size={DateInput.sizes[props.size]}
				format={DateInput.formats[props.format]}
				style={DateInput.styles[props.style]}
				disabled={props.disabled}
			/>
		</div>
	);
};

_Story.fixPrimary(Primary);

export const MinMax = () => {
	const today = new Date();
	const lastWeek = new Date();
	lastWeek.setDate(lastWeek.getDate() - 7);
	return (
		<div style={{ width: 240 }}>
			<DateInput minDate={lastWeek} maxDate={today} />
		</div>
	);
};

_Story.desc(MinMax)(
	`If set, users can only select dates between minDate and maxDate
	(inclusive). You can set one or both options. These options only disable
	dates on the pop-up calendar, and do not have any limitation if the user
	inputs via keyboard.`
);

export const Controlled = () => {
	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);

	const [date, setDate] = useState<null | Date>(() => new Date());

	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div style={{ width: 240 }}>
				<DateInput value={date} setValue={setDate} />
			</div>
			<DivPx size={8} />
			<Button
				onClick={() => void setDate(yesterday)}
				children="Set to yesterday"
			/>
			<DivPx size={8} />
			<div>Value: {JSON.stringify(date)}</div>
		</div>
	);
};

_Story.desc(Controlled)(
	`The state (selected date) is maintained by the user's component. For
	example, it can be set from outside the DateInput.`
);

export const Uncontrolled = () => {
	const ref = useRef<DayPickerInput>(null);
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div style={{ width: 240 }}>
				<DateInput defaultValue={new Date()} forwardedRef={ref} />
			</div>
			<DivPx size={8} />
			<Button
				onClick={() => {
					const value = ref.current?.state.value ?? null;
					window.alert(JSON.stringify(value));
				}}
				children="Get value from ref"
			/>
		</div>
	);
};

_Story.desc(Uncontrolled)(
	`The state (selected date) is maintained by the DateInput itself. In
	general, it cannot be set from outside. The user can still get the selected
	date by querying directly from a reference to the ReactDayPicker instance.`
);
