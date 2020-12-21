import { useRef } from "react";
import * as M from "../../../core/src";
import { Button, Paragraph, Tooltip, TooltipPane } from "../../../core/src";

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

const TooltipBlock = () => (
	<div className="space-y-8">
		<div className="w-max">
			<TooltipPane children="Tooltip" />
		</div>
	</div>
);

const PopoverColumn = () => (
	<div className="flex-1 space-y-8">
		<M.Popover
			content={() => <div className="p-8">Hello!</div>}
			target={(popover) => (
				<Tooltip placement="top" content="Click to open a popover">
					<M.Button.Forwarded
						onClick={popover.toggle}
						selected={popover.opened}
						fill
						children="Open Popover"
					/>
				</Tooltip>
			)}
			placement="top"
		/>
		<M.Pane>
			<Paragraph>Pane</Paragraph>
			<Paragraph>Lorem ipsum dolor sit amet, consectetur.</Paragraph>
		</M.Pane>
		<TooltipBlock />
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
