import toCamel from "camelcase";
import fs from "fs";
import path from "path";
import url from "url";
import { PROJECTS } from "../projects.js";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const srcRoot = path.resolve(here, "../src");
const resRoot = path.resolve(srcRoot, "resources");

// FUNCTIONS

const KEYWORDS = ["delete", "import", "export", "switch", "function"];

const safeKey = (key) => {
	return KEYWORDS.includes(key) ? `${key}_` : key;
};

/**
 * Generate an index file based on the svg inside path
 * @param {string} path
 * @returns {void}
 */
const generateProject = (project) => {
	const src = path.resolve(srcRoot, project.id);
	const res = path.resolve(resRoot, project.resource);
	if (fs.existsSync(src)) fs.rmSync(src, { recursive: true });
	fs.mkdirSync(src);

	const svgs = fs
		.readdirSync(path.resolve(resRoot, project.resource))
		.filter((name) => name.endsWith(".svg"));

	// Create body to write
	const keys = [];
	const body = ["// Generated content"];
	const pathPrefix = path.relative(src, res);

	// Add imports
	svgs.forEach((name) => {
		const key = safeKey(toCamel(name.replace(".svg", "")));
		keys.push(key); // Save to create export later
		body.push(`import ${key} from "${pathPrefix}/${name}";`);
	});

	// Add export
	body.push(`export const ${toCamel(project.id)} = {`);
	body.push(`\t${keys.join(",\n\t")}`);
	body.push("};");

	fs.writeFileSync(path.resolve(src, "index.js"), body.join("\n"));
};

// MAIN

PROJECTS.forEach(generateProject);
