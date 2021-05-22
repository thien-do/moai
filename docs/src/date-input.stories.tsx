import { Meta } from "@storybook/react/types-6-0";
import { useState } from "react";
import { DateInput } from "../../core/src";
import { Utils } from "./utils";

const meta: Meta = {
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
};

Utils.page.component(meta, { sticky: true, shots: [] });

export default meta;

interface Props {
	style?: string;
	size?: string;
	format?: string;
	disabled?: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 200 }}>
			<DateInput
				value={date}
				setValue={setDate}
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

export const Basic = (): JSX.Element => {
	const [date, setDate] = useState<null | Date>(() => new Date());
	return (
		<div style={{ width: 200 }}>
			<DateInput value={date} setValue={setDate} />
		</div>
	);
};

Utils.desc(Basic)(`
The Date Input component should be used like [controlled][1] components: you
have the date as a [state][4] and give the control to a Date Input via the
\`value\` and \`setValue\` props.

Moai's Date Input follows the [standard behaviour][2] of the HTML \`<input>\`
element, so the type of your state should be \`null | Date\`. The \`null\`
value happens when the current date is invalid, like when the user is still
typing (e.g. "13/") or they entered an invalid date (e.g. "30/2/2021").

Similar to the [Input][3] component, the width of Date Inputs is 100% of their
containers' width.

[1]: https://reactjs.org/docs/uncontrolled-components.html
[2]: https://html.spec.whatwg.org/multipage/input.html#dom-input-valueasdate
[3]: /docs/components-input--width
[4]: https://reactjs.org/docs/hooks-state.html
`);

export const MinMax = (): JSX.Element => {
	const today = new Date();
	const lastWeek = new Date();
	lastWeek.setDate(lastWeek.getDate() - 7);
	return (
		<div style={{ width: 200 }}>
			<DateInput minDate={lastWeek} maxDate={today} />
		</div>
	);
};

Utils.desc(MinMax)(`
The \`minDate\` and \`maxDate\` props can be used to prevent the users from
**selecting** dates outside of a range. They are inclusive, and both are
optional (e.g. you can accept all dates after today).

Note that these props are for convenient reason, as they only disable dates
in the pop-up calendar. In other words, users can still type any date directly
into the text box. This is intentional. If you need strict validation, see the
[Form][1] guide.

[1]: /docs/patterns-form--primary
`);
