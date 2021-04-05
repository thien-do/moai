import { Meta } from "@storybook/react";
import { useState } from "react";
import { _Story } from "../_story";
import { TimeInput } from "./time-input";

export default {
	title: "Components/TimeInput",
	component: TimeInput,
	argTypes: {
		style: _Story.arg(TimeInput.styles),
		size: _Story.arg(TimeInput.sizes),
		fill: _Story.arg("boolean"),
		disabled: _Story.arg("boolean"),
		value: _Story.arg(null),
		setValue: _Story.arg(null),
		id: _Story.arg(null),
	},
} as Meta;

interface Props {
	style?: string;
	size?: string;
	fill?: boolean;
	disabled?: boolean;
}

export const Primary = (props: Props) => {
	const [value, setValue] = useState<Date>(() => {
		const date = new Date();
		date.setSeconds(0); // TimeInput's value's second must be 0
		return date;
	});
	return (
		<TimeInput
			value={value}
			setValue={setValue}
			interval={TimeInput.intervals.minute}
			// Storybook's controllers
			style={TimeInput.styles[props.style]}
			size={TimeInput.sizes[props.size]}
			fill={props.fill}
			disabled={props.disabled}
		/>
	);
};

_Story.fixPrimary(Primary);

export const Intervals = (): JSX.Element => {
	const [value, setValue] = useState<Date>(() => {
		const date = new Date();
		date.setSeconds(0); // Ensure second is zero
		date.setMinutes(15); // Ensure value follows interval
		return date;
	});
	return (
		<TimeInput
			interval={TimeInput.intervals.quarter}
			value={value}
			setValue={setValue}
		/>
	);
};

_Story.desc(Intervals)(`
To specify the interval between 2 time options, use the "interval" prop. It
should receive a value from the "TimeInput.intervals" list. There are 2
important notes:

1. The "value" prop must always satisfy your "interval" prop. If not, the
TimeInput will throw a runtime error. You may want to use the ["setMinutes"][1]
method to ensure this (see the code of the example below).
2. It also means you should never change your "interval" prop at runtime, which
will easily invalidating your "value" prop.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes
`);
