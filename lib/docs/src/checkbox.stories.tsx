import { Meta } from "@storybook/react";
import { useRef, useState } from "react";
import { Button, Checkbox } from "../../core/src";
import { Book, someBooks } from "./utils/example";
import { Utils } from "./utils/utils";

const meta: Meta = {
	title: "Components/Checkbox",
	component: Checkbox,
	argTypes: {
		checked: Utils.arg("boolean", "Visual"),
		indeterminate: Utils.arg("boolean", "Visual"),
		disabled: Utils.arg("boolean", "Visual"),
		children: Utils.arg(null, "Controlled"),
		setChecked: Utils.arg(null, "Controlled"),
		defaultChecked: Utils.arg(null, "Uncontrolled"),
		forwardedRef: Utils.arg(null, "Uncontrolled"),
	},
};

Utils.page.component(meta, { sticky: true, shots: [] });

export default meta;

interface Props {
	indeterminate?: boolean;
	disabled?: boolean;
	checked?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<Checkbox
		checked={props.checked ?? true}
		disabled={props.disabled}
		indeterminate={props.indeterminate}
		children="Checkbox"
	/>
);

export const Basic = (): JSX.Element => {
	const [checked, setChecked] = useState(false);
	return (
		<Checkbox
			checked={checked}
			setChecked={setChecked}
			children="Subscribe to newsletter"
		/>
	);
};

Utils.story(Basic, {
	expanded: true,
	desc: `
Checkbox is a [controlled][1] component. You should have a boolean [state][2]
for the checked state, and give its control to a checkbox via the \`checked\`
and \`setChecked\` props.

[1]: https://reactjs.org/docs/forms.html#controlled-components
[2]: https://reactjs.org/docs/hooks-state.html
`,
});

export const IndeterminateImperative = (): JSX.Element => {
	const ref = useRef<HTMLInputElement>(null);
	const toggle = () => {
		const input = ref.current;
		if (input === null) throw Error("Input is null");
		input.indeterminate = !input.indeterminate;
	};
	return (
		<div>
			<Button onClick={toggle} children="Toggle indeterminate" />
			<div style={{ height: 8 }} />
			<Checkbox forwardedRef={ref} children="Select all" />
		</div>
	);
};

Utils.story(IndeterminateImperative, {
	name: "Indeterminate (Imperative)",
	expanded: true,
	desc: `
Moai checkboxes support the [indeterminate][1] state. It's recommended to set
this state in JavaScript, like when using the HTML \`checkbox\`. This is done
by having a [reference][2] to the checkbox via the \`forwardedRef\`.

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
[2]: https://reactjs.org/docs/refs-and-the-dom.html
`,
});

export const IndeterminateDeclarative = (): JSX.Element => (
	<Checkbox indeterminate={true} children="Select all" />
);

Utils.story(IndeterminateDeclarative, {
	name: "Indeterminate (Declarative)",
	expanded: true,
	desc: `
Moai also supports having the indeterminate state delacratively, via the
\`indeterminate\` prop, where it does [the imperative work][1] for you.
However, this should be considered experimental. See the [List][2] section
below for a full example.

[1]: https://github.com/moaijs/moai/blob/5ff5ee97d594954b160b375a984e9f44bfb34f9a/lib/core/src/checkbox/checkbox.tsx#L69-L74
[2]: #list
`,
});

export const List = (): JSX.Element => {
	const [books, setBooks] = useState<Book["isbn"][]>([someBooks[0].isbn]);

	const toggle = (isbn: Book["isbn"]): void => {
		const selected = books.includes(isbn);
		const next = selected
			? books.filter((i) => i !== isbn)
			: books.concat(isbn);
		setBooks(next);
	};

	const renderBook = (book: Book): JSX.Element => (
		<li key={book.isbn} style={{ marginLeft: 8 }}>
			<Checkbox
				checked={books.includes(book.isbn)}
				setChecked={() => toggle(book.isbn)}
				children={book.title}
			/>
		</li>
	);

	return (
		<ul style={{ display: "flex", flexDirection: "column", gap: 8 }}>
			<Checkbox
				checked={books.length === someBooks.length}
				setChecked={(checked) => {
					setBooks(checked ? someBooks.map((b) => b.isbn) : []);
				}}
				indeterminate={
					books.length > 0 && books.length !== someBooks.length
				}
				children="Select all"
			/>
			{someBooks.map(renderBook)}
		</ul>
	);
};

Utils.story(List, {
	desc: `
To have a list of checkboxes, render them with \`map\` and \`key\` [as
usual][1]. The type of your state is up to you: a \`Map\` of boolean values, a
\`Set\` of ids, or just an array:

[1]: https://reactjs.org/docs/lists-and-keys.html
`,
});
