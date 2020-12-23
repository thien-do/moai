import toCamel from "camelcase";
import fs from "fs";
import path from "path";
import url from "url";
import { PROJECTS } from "../projects.js";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const srcPath = path.resolve(here, "../src");
const resourcePath = path.resolve(srcPath, "resources");

// FUNCTIONS

const toExport = (project) => (name) => {
	const fromPath = path.relative(
		path.resolve(srcPath, project.id),
		path.resolve(resourcePath, project.resource, name)
	);
	const key = toCamel(name.replace(".svg", ""));
	return `export { default as ${key} } from "${fromPath}"`;
};

/**
 * Generate an index file based on the svg inside path
 * @param {string} path
 * @returns {void}
 */
const generateProject = (project) => {
	const projectPath = path.resolve(srcPath, project.id);
	const names = fs
		.readdirSync(path.resolve(resourcePath, project.resource))
		.filter((name) => name.endsWith(".svg"));
	const body = names.map(toExport(project)).join("\n");
	if (fs.existsSync(projectPath) === false) fs.mkdirSync(projectPath);
	fs.writeFileSync(path.resolve(projectPath, "index.js"), body);
};

// MAIN

PROJECTS.forEach(generateProject);
