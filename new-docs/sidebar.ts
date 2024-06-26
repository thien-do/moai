import { SidebarItem } from "vocs";
import fs from "fs";
import path from "path";

function capitalize(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

function generateSidebar(dirPath: string, parentDir: string): SidebarItem[] {
	const entries = fs.readdirSync(dirPath, { withFileTypes: true });

	const items: SidebarItem[] = [];

	entries.forEach((entry) => {
		// If entry is file end with '.stories.mdx', add sidebar item with link
		if (entry.isFile() && entry.name.endsWith(".stories.mdx")) {
			const fileName = entry.name.replace(".stories.mdx", "");
			if (fileName === "index") {
				items.unshift({
					text: "Primary",
					link: parentDir,
				});
			} else {
				items.push({
					text: capitalize(fileName.replace(/-/g, " ")),
					link: `${parentDir}/${fileName}`,
				});
			}
			return;
		}

		// If entry is directory, add collapsable sidebar item
		if (entry.isDirectory()) {
			const subDirPath = path.join(dirPath, entry.name);
			const subItems = generateSidebar(
				subDirPath,
				`${parentDir}/${entry.name}`,
			);
			if (subItems.length === 0) return;

			const item = {
				text: capitalize(entry.name),
				collapsed: false,
				items: subItems,
			};
			items.push(item);
		}
	});

	return items;
}

const TOP_LEVEL_ORDER = ["Intro", "Patterns", "Components", "Draft"];
export const sidebar = generateSidebar("./pages", "").sort((a, b) => {
	return TOP_LEVEL_ORDER.indexOf(a.text) - TOP_LEVEL_ORDER.indexOf(b.text);
});
