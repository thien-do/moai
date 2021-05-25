import { useState } from "react";
import { DivPx, Checkbox } from "../../core/src";
import { Utils } from "./utils";
import { Meta } from "@storybook/react";

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
	indeterminate: boolean;
	disabled: boolean;
	checked: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		<>
			<Checkbox
				checked={props.checked ?? true}
				disabled={props.disabled}
				indeterminate={props.indeterminate}
			>
				Checkbox
			</Checkbox>
			<DivPx size={8} />
		</>
	);
};

export const Basic = (): JSX.Element => {
	const [checked, setChecked] = useState(false);
	return (
		<Checkbox checked={checked} setChecked={() => setChecked(!checked)}>
			Default
		</Checkbox>
	);
};

Utils.desc(Basic)(`
Checkbox is shown as a square box that is checked when activated. To get start, you only need to provide a label via children:
`);

interface Book {
	id: string;
	name: string;
	author: string;
}

export const Group = (): JSX.Element => {
	const books: Book[] = [
		{
			id: "tokillamockingbird",
			name: "To Kill a Mockingbird",
			author: "Harper Lee",
		},
		{
			id: "thegreatgatsby",
			name: "The Great Gatsby",
			author: "F. Scott Fitzgerald",
		},
		{
			id: "prideandprejudice",
			name: "Pride and Prejudice",
			author: "Jane Austen",
		},
	];
	const [selected, setSelected] = useState<string[]>([]);

	function toggleSelect(id: string) {
		const newArray = selected.slice();
		const isSelected = selected.includes(id);
		if (isSelected) {
			setSelected(newArray.filter((value) => value != id));
		} else {
			setSelected([...newArray, id]);
		}
	}

	return (
		<>
			<div style={{ fontWeight: "bold" }}>Select books to buy:</div>
			{books.map((book) => (
				<div key={book.id} style={{ margin: "4px 0" }}>
					<Checkbox
						checked={selected.includes(book.id)}
						setChecked={() => toggleSelect(book.id)}
					>
						{book.name} by {book.author}
					</Checkbox>
				</div>
			))}
			<div>
				You choose:{" "}
				{books.map((book) =>
					selected.includes(book.id) ? book.name + ", " : ""
				)}
			</div>
		</>
	);
};

Utils.desc(Group)(`
A group of checkboxes allow users to select multiple options from a list of options. All possible options are exposed up front for users to compare.
`);
