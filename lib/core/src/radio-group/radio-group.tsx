import React from "react";
import { Radio } from "../radio/radio";
import s from "./radio-group.module.css";

export interface RadioOption<T> {
	/**
	 * The value of the option. This can be of any type.
	 */
	value: T;
	/**
	 * The id of the option. It's used to identify each option, so it must be
	 * unique.
	 */
	id: string;
	/**
	 * The label of the option.
	 */
	label: React.ReactNode;
}

interface Props<T> {
	/**
	 * If true, place the radio buttons horizontally. Not recommend if their
	 * labels are long.
	 */
	row?: boolean;
	/**
	 * The [HTML `name`][1] attribute, use to group the radio buttons.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group
	 */
	name: string;
	/**
	 * The current value. RadioGroup only supports controlled mode.
	 */
	value: T;
	/**
	 * Callback to set the current value. RadioGroup only supports controlled
	 * mode.
	 */
	setValue: (value: T) => void;
	/**
	 * The options for users to choose from. Each will be rendered as a radio
	 * button. See the `RadioOption` for more detail.
	 */
	options: RadioOption<T>[];
}

type Foo<T> = Props<T> & { option: RadioOption<T> };

const SingleRadio = <T,>({ name, value, setValue, option }: Foo<T>) => (
	<Radio
		name={name}
		checked={value === option.value}
		children={option.label}
		value={option.id}
		setValue={() => setValue(option.value)}
	/>
);

/**
 * RadioGroup is the recommended way to have radio buttons. They are a wrapper
 * of the [Radio][1] component that has a simpler, common interface (e.g. with
 * the `value` and `setValue` pair). It's similar to [selects][2] but displays
 * all options upfront.
 *
 * [1]: /docs/components-radio--primary
 * [2]: /docs/components-select--primary
 */
export const RadioGroup = <T,>(props: Props<T>): JSX.Element => (
	<div
		className={[s.container, props.row === true ? s.hor : s.ver].join(" ")}
	>
		{props.options.map((option) => (
			<div className={s.item} key={option.id}>
				<SingleRadio {...props} option={option} />
			</div>
		))}
	</div>
);

RadioGroup.toStringOption = (text: string): RadioOption<string> => ({
	id: text,
	value: text,
	label: text,
});
