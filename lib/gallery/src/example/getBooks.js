//run this file with node to create books.json
//install node-fetch beforehand
//please make sure you go to books.json to remove excessive "," and add "]" before using the file.

const fs = require("fs");
const fetch = require("node-fetch");

const jsbooks = fs.readFileSync("listOfBooks.json");

const data = JSON.parse(jsbooks);

//flag a+ allow continue writing
fs.writeFile("books.json", "[", function (error) {
  if (error) console.log(error);
});

data.entries.forEach(async (value) => {
  // this link goes to each book on listOfBooks
  const link = `https://openlibrary.org/api/books?bibkeys=OLID:${
    value.url.split("/")[2]
  }&jscmd=data&format=json`;
  await fetch(link)
    .then((res) => res.json())
    .then((result) => {
      if (result) {
        let jsbook = JSON.stringify(result) + ",";
        fs.writeFile("books.json", jsbook, { flag: "a+" }, function (error) {
          if (error) console.log(error);
        });
      }
    })
    .catch((error) => console.log(error));
});
