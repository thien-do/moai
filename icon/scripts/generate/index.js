const fs = require("fs");
const path = require("path");

const here = __filename;

const src = path.resolve(here, "../../../src");
const projects = fs
	.readdirSync(src)
	.map((name) => path.resolve(src, name))
	.filter((name) => fs.statSync(name).isDirectory());

console.log(projects);
