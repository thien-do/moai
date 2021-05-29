import { Meta } from "@storybook/react";
import { useState } from "react";
import { Radio, RadioGroup, RadioOption } from "../../../core/src";
import { Book, someBooks } from "../utils/example";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Components/Radio",
	component: Radio,
	subcomponents: { RadioGroup },
	argTypes: {
		disabled: Utils.arg("boolean"),
		checked: Utils.arg("boolean"),
		value: Utils.arg(null),
		children: Utils.arg(null),
		name: Utils.arg(null),
		setValue: Utils.arg(null),
		defaultChecked: Utils.arg(null),
		forwardedRef: Utils.arg(null),
	},
};

Utils.page.component(meta, {
	primary: "sticky",
	shots: [],
});

export default meta;

interface Props {
	disabled?: boolean;
	checked?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<Radio
		checked={props.checked ?? true}
		disabled={props.disabled}
		name="radio"
		value="1"
		children="Radio"
	/>
);

export const Basic = (): JSX.Element => {
	const [selected, setSelected] = useState(someBooks[1].isbn.toString());

	const toRadio = (book: Book): JSX.Element => (
		<li key={book.isbn}>
			<Radio
				name="basic-radios"
				checked={selected === book.isbn.toString()}
				value={book.isbn.toString()}
				setValue={setSelected}
				children={book.title}
			/>
		</li>
	);

	return <ul>{someBooks.map(toRadio)}</ul>;
};

export const Group = (): JSX.Element => {
	const [selected, setSelected] = useState(someBooks[1].isbn);
	const toRadioOption = (book: Book): RadioOption<number> => ({
		id: book.isbn.toString(),
		label: book.title,
		value: book.isbn,
	});
	return (
		<RadioGroup<number>
			value={selected}
			setValue={setSelected}
			name="group-radios"
			options={someBooks.map(toRadioOption)}
		/>
	);
};
