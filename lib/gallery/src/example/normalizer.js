// interface Book {
// 	url: string;
// 	key: string;
// 	title: string;
// 	author: string[];
// 	number_of_pages: number;
// 	isbn_10: string;
// 	publishers: string[];
// 	publish_date: string;
// 	subjects: string[];
// 	cover: { small: string; medium: string; large: string };
// }

function normalizer(book) {
	return {
		url: book.url,
		key: book.key,
		title: book.title,
		author: book.authors ? book.authors.map((value) => value.name) : [],
		number_of_pages: book.number_of_pages,
		isbn_10: book.identifiers.isbn_10,
		publishers: book.publishers
			? book.publishers.map((value) => value.name)
			: [],
		publish_date: book.publish_date,
		subjects: book.subjects ? book.subjects.map((value) => value.name) : [],
		cover: book.cover,
	};
}

function main() {
	const fs = require("fs");
	const jsbook = fs.readFileSync("books.json", (error) => console.log(error));
	const data = JSON.parse(jsbook);
	const books = data.map((value) => {
		const book = Object.values(value)[0];
		return normalizer(book);
	});
	fs.writeFileSync("normalizedBooks.json", JSON.stringify(books), (error) =>
		console.log(error)
	);
}

main();
