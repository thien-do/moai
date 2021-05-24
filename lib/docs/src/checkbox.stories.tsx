import { useState } from "react";
import { DivPx, Checkbox } from "../../core/src";
import { Utils } from "./utils";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	argTypes: {
		children: Utils.arg(null),
		checked: Utils.arg("boolean"),
		indeterminate: Utils.arg("boolean"),
		disabled: Utils.arg("boolean"),
		setChecked: Utils.arg(null),
		defaultChecked: Utils.arg(null),
		forwardedRef: Utils.arg(null),
	},
};

interface Props {
	indeterminate: boolean;
	disabled: boolean;
	checked: boolean;
}

export const Primary = (props: Props): JSX.Element => {
	return (
		<>
			<Checkbox
				defaultChecked
				checked={props.checked}
				disabled={props.disabled}
				indeterminate={props.indeterminate}
			>
				Checkbox
			</Checkbox>
			<DivPx size={8} />
		</>
	);
};

Utils.fixPrimary(Primary);

type Book = {
	id: string;
	name: string;
	author: string;
};

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
		if (!isSelected) {
			newArray.push(id);
		} else {
			newArray.splice(newArray.indexOf(id), 1);
		}
		setSelected(newArray);
	}

	return (
		<>
			<div style={{ fontWeight: "bold" }}>Select books to buy:</div>
			{books.map((book) => (
				<div
					key={book.id}
					style={{ margin: "4px 0" }}
					onClick={() => toggleSelect(book.id)}
				>
					<Checkbox checked={selected.includes(book.id)}>
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

Utils.desc(Group)(
	`Checkboxes allow users to select multiple options from a list of options. All possible options are exposed up front for users to compare.`
);
