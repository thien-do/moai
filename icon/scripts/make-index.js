import _fs from "fs";
import _path from "path";
import _url from "url";

const herePath = _path.dirname(_url.fileURLToPath(import.meta.url));
const srcPath = _path.resolve(herePath, "../src");
const resourcesPath = _path.resolve(srcPath, "resources")

// FUNCTIONS

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
const generateProject = (path) => {
	const names = _fs.readdirSync(path).filter((name) => name.endsWith(".svg"));
	const body = names.map(toExport).join("\n");
	_fs.writeFileSync(_path.resolve(path, "index.js"), body);
};

// MAIN

const projects = [
	{ project: "bp", resource: "blueprint/resources/icons/16px" },
	{ project: "hr-ol", resource: "heroicons/src/outline" },
	{ project: "hr-sl", resource: "heroicons/src/solid" },
];

const a = _fs.readdirSync(_path.resolve(src, "icons", sources[0][0]));
console.log(a.slice(0, 10));
