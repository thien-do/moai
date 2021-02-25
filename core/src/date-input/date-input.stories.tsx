import { Meta } from "@storybook/react/types-6-0";
import React, { useRef, useState } from "react";
import DayPickerInput from "react-day-picker/types/DayPickerInput";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { DateInput } from "./date-input";

export default {
	title: "Components/DateInput",
	component: DateInput,
} as Meta;

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const lastWeek = new Date();
lastWeek.setDate(today.getDate() - 7);

export const Primary = () => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 240 }}>
			<DateInput value={date} setValue={setDate} />
		</div>
	);
};

export const DateFormats = () => (
	<div style={{ width: 240 }}>
		<DateInput defaultValue={today} />
		<DivPx size={8} />
		<DateInput format={DateInput.formats.mdy} defaultValue={today} />
		<DivPx size={8} />
		<DateInput format={DateInput.formats.ymd} defaultValue={today} />
	</div>
);

export const MinMaxRange = () => (
	<div style={{ width: 240 }}>
		<DateInput maxDate={today} minDate={lastWeek} />
	</div>
);

export const Disabled = () => (
	<div style={{ width: 240 }}>
		<DateInput disabled />
	</div>
);

export const Controlled = () => {
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

export const Uncontrolled = () => {
	const ref = useRef<DayPickerInput>(null);
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div style={{ width: 240 }}>
				<DateInput forwardedRef={ref} />
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

export const UncontrolledWithInitialValue = () => (
	<div style={{ width: 240 }}>
		<DateInput defaultValue={yesterday} />
	</div>
);

export const SmallSize = () => (
	<div style={{ width: 240 }}>
		<DateInput defaultValue={today} size={DateInput.sizes.small} />
	</div>
);

export const FlatStyle = () => (
	<div style={{ width: 240 }}>
		<DateInput defaultValue={today} style={DateInput.styles.flat} />
	</div>
);
