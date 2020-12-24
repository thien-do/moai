import fs from "fs";
import path from "path";
import url from "url";
import { PROJECTS } from "../projects.mjs";
import { pascalCase } from "change-case";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const srcRoot = path.resolve(here, "../src");
const resRoot = path.resolve(srcRoot, "resources");

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
	const body = ["// Generated content"];
	const pathPrefix = path.relative(src, res);

	// Add exports
	svgs.forEach((name) => {
		const key = pascalCase(name.replace(".svg", ""));
		const target = `${pathPrefix}/${name}`;
		body.push(`export { default as ${key} } from "${target}";`);
	});

	fs.writeFileSync(path.resolve(src, "index.js"), body.join("\n"));
};

// MAIN

PROJECTS.forEach(generateProject);
