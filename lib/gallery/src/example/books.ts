export interface IBook {
	id: string;
	title: string;
	cover: string;
	authorID: string;
	authorName: {
		firstName: string;
		lastName: string;
	};
	authorPhoto: string;
	numberOfPages: number;
	price: string;
	rating: string;
	note: string;
}

export const BOOKS: IBook[] = [
	{
		id: "89e5dfe2",
		title: "Fahrenheit 451",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "6eacd440",
		authorName: {
			firstName: "Cayla",
			lastName: "Upton",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 597,
		price: "$660.00",
		rating: "1.0",
		note:
			"Et quia expedita consectetur. Reprehenderit ut numquam. At rerum dignissimos voluptatibus. Molestias",
	},
	{
		id: "7565d7eb",
		title: "1984",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "3f909707",
		authorName: {
			firstName: "Amir",
			lastName: "Bechtelar",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 825,
		price: "$860.00",
		rating: "0.0",
		note:
			"Inventore ut dolores optio. Est ex occaecati nisi quaerat aut. Quia beatae numquam harum ut debitis ",
	},
	{
		id: "60c187f2",
		title: "The Help",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "a39e8363",
		authorName: {
			firstName: "Marjolaine",
			lastName: "Nicolas",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 566,
		price: "$701.00",
		rating: "5.0",
		note:
			"Voluptas excepturi voluptatibus fugit dolor. Autem aspernatur similique voluptas unde. At in ipsum q",
	},
	{
		id: "aaad440c",
		title: "Little Women",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "5c44b792",
		authorName: {
			firstName: "Shyann",
			lastName: "Bergstrom",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 927,
		price: "$45.00",
		rating: "1.0",
		note:
			"Neque hic consectetur. Molestiae possimus numquam. Voluptas minus explicabo quod aperiam sint nostru",
	},
	{
		id: "c5cf13f6",
		title: "The Hobbit",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "0eaa4390",
		authorName: {
			firstName: "Deonte",
			lastName: "Ortiz",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 511,
		price: "$42.00",
		rating: "0.0",
		note:
			"Id repudiandae in. Possimus eius veritatis. Dolor ipsa eos ad maxime dolore aut. Voluptas ea sunt mi",
	},
	{
		id: "eb1ed3f0",
		title: "The Hobbit",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "41c8c614",
		authorName: {
			firstName: "Cynthia",
			lastName: "Friesen",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 209,
		price: "$411.00",
		rating: "3.0",
		note:
			"Saepe enim nesciunt autem asperiores blanditiis. Quisquam ipsa maxime et et alias. Voluptatum iusto ",
	},
	{
		id: "1fbd692e",
		title: "Pride and Prejudice",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "4047d38e",
		authorName: {
			firstName: "Jermey",
			lastName: "Jacobs",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 850,
		price: "$64.00",
		rating: "2.0",
		note:
			"Quia ut error explicabo delectus non saepe ipsa. Magnam doloremque iusto omnis accusamus labore et m",
	},
	{
		id: "4dbfee96",
		title: "The Diary of Anne Frank",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "e5064d26",
		authorName: {
			firstName: "Tyrell",
			lastName: "Lind",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 793,
		price: "$682.00",
		rating: "0.0",
		note:
			"Consequatur provident minus autem. Impedit qui id provident voluptate et et maxime culpa deserunt. A",
	},
	{
		id: "1efe0a66",
		title: "The Diary of Anne Frank",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "a0aec43e",
		authorName: {
			firstName: "Amara",
			lastName: "Kuphal",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 411,
		price: "$372.00",
		rating: "1.0",
		note:
			"Et voluptate minima officiis. A aliquid aliquam voluptatibus ut non nam. Ea est aliquam voluptate. V",
	},
	{
		id: "9ce3652c",
		title: "The Lion, the Witch, and the Wadrobe",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "504c9b8b",
		authorName: {
			firstName: "Ulises",
			lastName: "Howell",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 935,
		price: "$312.00",
		rating: "5.0",
		note:
			"Voluptatum incidunt aut qui. Vero nesciunt ipsum ut cupiditate cum molestias dolore. Nobis quisquam ",
	},
	{
		id: "bbe91877",
		title: "Harry Potter and the Sorcerer's Stone",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "366f6eea",
		authorName: {
			firstName: "Mike",
			lastName: "Cruickshank",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 356,
		price: "$746.00",
		rating: "5.0",
		note:
			"Tempore recusandae molestias. Magnam ea enim saepe placeat. Quia recusandae distinctio omnis eos. Su",
	},
	{
		id: "dc766d54",
		title: "Animal Farm",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "e9498f1e",
		authorName: {
			firstName: "Gwen",
			lastName: "Gutmann",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 933,
		price: "$219.00",
		rating: "5.0",
		note:
			"Nisi cupiditate voluptas possimus quae laboriosam quo nihil. Et debitis voluptatibus at amet deserun",
	},
	{
		id: "59cc17a8",
		title: "1984",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "c5046725",
		authorName: {
			firstName: "Valentin",
			lastName: "Rutherford",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 210,
		price: "$924.00",
		rating: "5.0",
		note:
			"Maxime eaque suscipit voluptate voluptas reiciendis ut ratione voluptates. Amet unde autem. Quis lab",
	},
	{
		id: "e9225bed",
		title: "The Hobbit",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "bbb2e323",
		authorName: {
			firstName: "Roel",
			lastName: "Jenkins",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 800,
		price: "$988.00",
		rating: "1.0",
		note:
			"Totam sed ut praesentium placeat earum. Repudiandae veniam illum eligendi qui culpa laborum recusand",
	},
	{
		id: "91a0a7ab",
		title: "The Help",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "e24a5b5b",
		authorName: {
			firstName: "Aleen",
			lastName: "Brakus",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 229,
		price: "$672.00",
		rating: "4.0",
		note:
			"Ut atque quo maiores. Rerum repellendus beatae rem nesciunt voluptas veniam. Pariatur ipsum omnis co",
	},
	{
		id: "533597cb",
		title: "The Diary of Anne Frank",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "4a8981f7",
		authorName: {
			firstName: "Marcelina",
			lastName: "Kirlin",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 449,
		price: "$567.00",
		rating: "3.0",
		note:
			"Impedit cumque voluptates omnis quas dolore possimus rerum. Quaerat sed numquam. Aut omnis nulla odi",
	},
	{
		id: "4dc47b9c",
		title: "The Adventures of Huckleberry Finn",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "b129ad54",
		authorName: {
			firstName: "Milton",
			lastName: "Hessel",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 455,
		price: "$133.00",
		rating: "5.0",
		note:
			"Sed autem dolorem ducimus doloribus quae. Repellendus similique in ducimus. Doloremque incidunt eos ",
	},
	{
		id: "41847951",
		title: "The Lord of the Rings",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "34316da3",
		authorName: {
			firstName: "Morton",
			lastName: "Blick",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 249,
		price: "$509.00",
		rating: "1.0",
		note:
			"Consequatur ipsa vel fugiat quasi. Quidem voluptas magni officiis ut et beatae et quia voluptatibus.",
	},
	{
		id: "0f6b2535",
		title: "Charlotte's Web",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "d58d8a48",
		authorName: {
			firstName: "Isac",
			lastName: "Harris",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 932,
		price: "$512.00",
		rating: "3.0",
		note:
			"Aperiam quasi quasi vel autem cumque. Autem dolorem at veniam impedit voluptatum magnam. Ut quas max",
	},
	{
		id: "4661c467",
		title: "Fahrenheit 451",
		cover: "http://lorempixel.com/640/480/city",
		authorID: "04366e13",
		authorName: {
			firstName: "Amparo",
			lastName: "Stiedemann",
		},
		authorPhoto: "http://lorempixel.com/640/480/people",
		numberOfPages: 976,
		price: "$981.00",
		rating: "0.0",
		note:
			"Porro cum voluptatibus esse quod labore eaque ut impedit. Aliquid et ut iure est distinctio harum ut",
	},
];
