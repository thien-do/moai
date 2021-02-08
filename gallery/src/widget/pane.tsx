import * as M from "@moai/core/src";

const items: M.MenuItemProps[] = [
	{ label: "Menu item 1" },
	{ label: "Menu item 2" },
	{ label: "Disabled", disabled: true },
	"divider",
	{ label: "Menu item 3" },
];

const items2: M.MenuItemProps[] = [
	{ label: "Duplicate" },
	{ label: "Delete", disabled: true },
];

const PopoverColumn = () => (
	<div className="flex-1 space-y-8">
		<M.Popover
			content={() => <div className="p-8">Hello!</div>}
			target={(popover) => (
				<M.Button
					onClick={popover.toggle}
					selected={popover.opened}
					fill
					children="Open Popover"
				/>
			)}
			placement="top"
		/>
		<M.Pane>
			<M.Paragraph>Pane</M.Paragraph>
			<M.Paragraph>Lorem ipsum dolor sit amet, consectetur.</M.Paragraph>
		</M.Pane>
	</div>
);

const MenuColumn = () => (
	<div className="flex-1 space-y-8">
		<M.ButtonMenu
			items={items2}
			button={{ fill: true, children: "Open menu" }}
			placement="top"
		/>
		<M.Menu items={items} />
	</div>
);

export const PaneGallery = () => (
	<div className="flex space-x-8">
		<PopoverColumn />
		<MenuColumn />
	</div>
);
