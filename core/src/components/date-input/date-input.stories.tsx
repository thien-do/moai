import { Meta } from "@storybook/react/types-6-0";
import React, { useRef, useState } from "react";
import DayPickerInput from "react-day-picker/types/DayPickerInput";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { DateInput } from "./date-input";
import { _StoryUtils } from "../utils/_story";

export default {
	title: "Components/DateInput",
	component: DateInput,
	argTypes: {
		style: _StoryUtils.makeObjArg(DateInput.styles),
		size: _StoryUtils.makeObjArg(DateInput.sizes),
		format: _StoryUtils.makeObjArg(DateInput.formats),
		disabled: { control: { type: "boolean" } },
		minDate: { control: { type: "date" } },
		maxDate: { control: { type: "date" } },
		value: { control: { type: null } },
		setValue: { control: { type: null } },
		defaultValue: { control: { type: null } },
		forwardedRef: { control: { type: null } },
		icon: { control: { type: null } },
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
