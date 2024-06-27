import { ReactElement, useState } from "react";
import { Checkbox } from "../../../core/src";
import { Book, someBooks } from "../../utils/example";

// [!region usage]
export function CheckboxGroupExample(): ReactElement {
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
}
// [!endregion usage]
