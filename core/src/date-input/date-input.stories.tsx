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
yesterday.setDate(yesterday.getDate() - 1);

export const Primary = () => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 240 }}>
			<DateInput
				format={DateInput.formats.dmy}
				value={date}
				setValue={setDate}
			/>
		</div>
	);
};

export const Disabled = () => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 240 }}>
			<DateInput
				format={DateInput.formats.dmy}
				value={date}
				setValue={setDate}
				disabled
				icon
			/>
		</div>
	);
};

export const MinMax = () => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 240 }}>
			<DateInput
				format={DateInput.formats.dmy}
				value={date}
				setValue={setDate}
				maxDate={today}
				minDate={yesterday}
				icon
			/>
		</div>
	);
};

export const Controlled = () => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ display: "flex", alignItems: "center" }}>
			<div style={{ width: 240 }}>
				<DateInput
					format={DateInput.formats.dmy}
					value={date}
					setValue={setDate}
				/>
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
				<DateInput format={DateInput.formats.dmy} forwardedRef={ref} />
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
		<DateInput format={DateInput.formats.dmy} defaultValue={yesterday} />
	</div>
);

export const DateFormats = () => (
	<div style={{ width: 240 }}>
		<DateInput format={DateInput.formats.dmy} defaultValue={today} />
		<DivPx size={8} />
		<DateInput format={DateInput.formats.mdy} defaultValue={today} />
		<DivPx size={8} />
		<DateInput format={DateInput.formats.ymd} defaultValue={today} />
	</div>
);

export const SmallSize = () => (
	<div style={{ width: 240 }}>
		<DateInput
			format={DateInput.formats.dmy}
			defaultValue={today}
			size={DateInput.sizes.small}
		/>
	</div>
);

export const FlatStyle = () => (
	<div style={{ width: 240 }}>
		<DateInput
			format={DateInput.formats.mdy}
			defaultValue={today}
			style={DateInput.styles.flat}
		/>
	</div>
);
