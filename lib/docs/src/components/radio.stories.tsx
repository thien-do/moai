import { Meta } from "@storybook/react";
import { useState } from "react";
import { Radio } from "../../../core/src";
import { Book, someBooks } from "../utils/example";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Components/Radio",
	component: Radio,
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

	const toRadio = (book: Book, index: number): JSX.Element => (
		<li key={book.isbn} style={{ marginTop: index === 0 ? 0 : 8 }}>
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

Utils.story(Basic, {
	
	desc: `
It's recommended to use the [Radio Group][1] component. However, when you need
complex layout customization, you can still use the Radio component manually.
It should be used as a controlled component, but its props are a little bit
more complicated than other input components:

- \`checked\`: whether the radio should be checked
- \`value\`: the text value of the radio
- \`setValue\`: a callback to set the radio as selected

Like in HTML, a \`name\` prop is also required to group your radio buttons.

[1]: /docs/components-radio-group--primary
`,
});
