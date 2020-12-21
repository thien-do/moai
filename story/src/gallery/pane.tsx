import * as M from "../../../core/src";
import { Paragraph } from "../../../core/src";

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
			content={() => <div className="p-8">Popover</div>}
			target={(popover) => (
				<M.Button
					onClick={popover.toggle}
					selected={popover.opened}
					children="Open popover"
					fill
				/>
			)}
			placement="top"
		/>
		<M.Pane>
			<Paragraph>
				Pane
				<br />
				<br />
				Lorem ipsum dolor sit amet, consectetur.
			</Paragraph>
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

export const GalleryPane = () => (
	<div className="flex space-x-8">
		<PopoverColumn />
		<MenuColumn />
	</div>
);
