import fs from "fs";
import path from "path";
import url from "url";
import { PROJECTS } from "../projects.mjs";
import { pascalCase } from "change-case";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const src = path.resolve(here, "../src");
const projects = path.resolve(src, "generated");

/**
 * Generate a src folder for a project, which includes:
 * - the icons as svgs, copied from "resources"
 * - an index file to export those svgs
 *
 * Note that we should not import SVGs directly from the original "resources"
 * folder to avoid TypeScript compiling the "resources" (and generating types
 * for them).
 *
 * @param {string} path
 * @returns {void}
 */
const generateProject = (project) => {
	// Prepare target folder for project
	const target = path.resolve(projects, project.id);
	if (fs.existsSync(target)) fs.rmSync(target, { recursive: true });
	fs.mkdirSync(target);

	// Copy icons to target
	const resources = path.resolve(src, "resources", project.resource);
	const icons = fs
		.readdirSync(resources)
		.filter((name) => name.endsWith(".svg"));
	icons.forEach((icon) => {
		const from = path.resolve(resources, icon);
		const to = path.resolve(target, icon);
		fs.copyFileSync(from, to);
	});

	// Write index file
	const body = [];
	icons.forEach((icon) => {
		const key = pascalCase(icon.replace(".svg", ""));
		body.push(`export { default as ${key} } from "./${icon}";`);
	});
	fs.writeFileSync(path.resolve(target, "index.js"), body.join("\n"));
};

// Clean project root
if (fs.existsSync(projects)) fs.rmSync(projects, { recursive: true });
fs.mkdirSync(projects);

// Generate projects
PROJECTS.forEach(generateProject);
