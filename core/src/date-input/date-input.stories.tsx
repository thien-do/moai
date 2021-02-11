import { storiesOf } from "@storybook/react";
import { useRef, useState } from "react";
import DayPickerInput from "react-day-picker/types/DayPickerInput";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { DateInput } from "./date-input";

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

storiesOf("DateInput", module).add("Main", () => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	const ref = useRef<DayPickerInput>(null);
	return (
		<div style={{ width: 200 }}>
			<div>Uncontrolled</div>
			<DateInput format={DateInput.formats.dmy} forwardedRef={ref} />
			<DivPx size={8} />
			<Button
				onClick={() => void window.alert(ref.current.state.value)}
				children="Get value from ref"
			/>
			<DivPx size={16} />
			<div>Uncontrolled with initial value</div>
			<DateInput
				format={DateInput.formats.dmy}
				initialValue={yesterday}
			/>
			<DivPx size={16} />
			<div>Controlled: {date?.toDateString()}</div>
			<DivPx size={4} />
			<DateInput
				format={DateInput.formats.dmy}
				value={date}
				setValue={setDate}
			/>
			<DivPx size={8} />
			<Button
				onClick={() => void setDate(yesterday)}
				children="Set to yesterday"
			/>
			<DivPx size={16} />
			<div>Format DD/MM/YYYY</div>
			<DateInput format={DateInput.formats.dmy} />
			<DivPx size={16} />
			<div>Format MM/DD/YYYY</div>
			<DateInput format={DateInput.formats.mdy} />
			<DivPx size={16} />
			<div>Format YYYY/MM/DD</div>
			<DateInput format={DateInput.formats.ymd} />
		</div>
	);
});
