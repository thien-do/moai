import _fs from "fs";
import _path from "path";
import _url from "url";
import { walkLeafDirs } from "../utilities/walk.js";

const toCamel = (text) => text.replace(/-(\w)/g, (g) => g[1].toUpperCase());

const toExport = (name) => {
	const key = toCamel(name.replace(".svg", ""));
	return `export { default as ${key} } from "./${name}"`;
};

/**
 * Generate an index file based on the svg inside path
 * @param {string} path
 * @returns {void}
 */
const generateIndex = (path) => {
	const names = _fs.readdirSync(path).filter((name) => name.endsWith(".svg"));
	const body = names.map(toExport).join("\n");
	_fs.writeFileSync(_path.resolve(path, "index.js"), body);
};

// MAIN

const here = _path.dirname(_url.fileURLToPath(import.meta.url));
const src = _path.resolve(here, "../src");
walkLeafDirs(generateIndex, src);
