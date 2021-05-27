/* eslint-disable */
const cp = require("child_process");

const files = ["esm.js", "cjs.js", "bundle.css"];

files.forEach((file) => {
	const command = `gzip -c dist/${file} | wc -c`;
	let size = cp.execSync(command).toString();
	size = size.replace("\n", "");
	console.log(`${size} ${file}`);
});
