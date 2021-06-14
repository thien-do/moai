// run this file with node to create listOfBooks.json
//install node-fetch beforehand

const fs = require("fs");
const fetch = require("node-fetch");

// this is the link of a list on openlibrary
const URL = `https://openlibrary.org/people/rustypalagi/lists/OL195194L/seeds.json`;

fetch(URL)
	.then((res) => res.json())
	.then((result) => {
		if (result) {
			const jsbook = JSON.stringify(result);
			fs.writeFile("listOfBooks.json", jsbook, function (error) {
				if (error) console.log("fs" + error);
			});
		}
	})
	.catch((error) => console.log("error " + error));
