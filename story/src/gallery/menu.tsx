import { ButtonMenu, Menu, MenuItemProps } from "../../../core/src";

const items1: MenuItemProps[] = [
	{ label: "Insert before" },
	{ label: "Insert after" },
	{ label: "Duplicate", disabled: true },
	"divider",
	{ label: "Remove block" },
];

const items2: MenuItemProps[] = [
	{ label: "Cut" },
	{ label: "Copy" },
	{ label: "Paste" },
];

export const GalleryMenu = () => (
	<div className="space-y-8">
		<ButtonMenu
			items={items2}
			button={{ fill: true, children: "Open menu" }}
			placement="right"
		/>
		<Menu items={items1} />
	</div>
);
