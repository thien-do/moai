import { Meta } from "@storybook/react/types-6-0";
import React, { useRef, useState } from "react";
import DayPickerInput from "react-day-picker/types/DayPickerInput";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { DateInput } from "./date-input";

const makeObjArg = (object: object) => ({
	control: { type: "radio", options: Object.keys(object) },
});

const nullArg = { control: { type: null } };

export default {
	title: "Components/DateInput",
	component: DateInput,
	argTypes: {
		style: makeObjArg(DateInput.styles),
		size: makeObjArg(DateInput.sizes),
		format: makeObjArg(DateInput.formats),
		disabled: { control: { type: "boolean" } },
		value: nullArg,
		setValue: nullArg,
		defaultValue: nullArg,
		forwardedRef: nullArg,
	},
} as Meta;

interface Props {
	style?: string;
	size?: string;
	format?: string;
	disabled?: boolean;
}

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const lastWeek = new Date();
lastWeek.setDate(today.getDate() - 7);

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

export const MinMaxRange = () => (
	<div style={{ width: 240 }}>
		<DateInput maxDate={today} minDate={lastWeek} />
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
				<DateInput defaultValue={yesterday} forwardedRef={ref} />
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
