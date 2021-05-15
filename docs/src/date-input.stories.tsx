import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";
import { Button, DateInput, DivPx } from "../../core/src";
import { Utils } from "./utils";

export default {
	title: "Components/DateInput",
	component: DateInput,
	argTypes: {
		style: Utils.arg(DateInput.styles),
		size: Utils.arg(DateInput.sizes),
		format: Utils.arg(DateInput.formats),
		disabled: Utils.arg("boolean"),
		minDate: Utils.arg(null),
		maxDate: Utils.arg(null),
		value: Utils.arg(null),
		setValue: Utils.arg(null),
		defaultValue: Utils.arg(null),
		forwardedRef: Utils.arg(null),
		icon: Utils.arg(null),
	},
	parameters: { stickyPrimary: true },
} as Meta;

interface Props {
	style?: string;
	size?: string;
	format?: string;
	disabled?: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 240 }}>
			<DateInput
				value={date}
				setValue={setDate}
				// Storybook's controls
				// eslint-disable-next-line
				size={(DateInput.sizes as any)[props.size!]}
				// eslint-disable-next-line
				format={(DateInput.formats as any)[props.format!]}
				// eslint-disable-next-line
				style={(DateInput.styles as any)[props.style!]}
				disabled={props.disabled}
			/>
		</div>
	);
};

Utils.fixPrimary(Primary);

export const MinMax = (): JSX.Element => {
	const today = new Date();
	const lastWeek = new Date();
	lastWeek.setDate(lastWeek.getDate() - 7);
	return (
		<div style={{ width: 240 }}>
			<DateInput minDate={lastWeek} maxDate={today} />
		</div>
	);
};

Utils.desc(MinMax)(
	`If set, users can only select dates between minDate and maxDate
	(inclusive). You can set one or both options. These options only disable
	dates on the pop-up calendar, and do not have any limitation if the user
	inputs via keyboard.`
);

export const Controlled = (): JSX.Element => {
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

Utils.desc(Controlled)(
	`The state (selected date) is maintained by the user's component. For
	example, it can be set from outside the DateInput.`
);

// export const Uncontrolled = (): JSX.Element => {
// 	const ref = useRef<DayPickerInput>(null);
// 	return (
// 		<div style={{ display: "flex", alignItems: "center" }}>
// 			<div style={{ width: 240 }}>
// 				<DateInput defaultValue={new Date()} forwardedRef={ref} />
// 			</div>
// 			<DivPx size={8} />
// 			<Button
// 				onClick={() => {
// 					const value = ref.current?.state.value ?? null;
// 					window.alert(JSON.stringify(value));
// 				}}
// 				children="Get value from ref"
// 			/>
// 		</div>
// 	);
// };

// Utils.desc(Uncontrolled)(
// 	`The state (selected date) is maintained by the DateInput itself. In
// 	general, it cannot be set from outside. The user can still get the selected
// 	date by querying directly from a reference to the ReactDayPicker instance.`
// );
