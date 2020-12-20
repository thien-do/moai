import * as M from "../../../core/src";
import { Paragraph } from "../../../core/src";

const items: M.MenuItemProps[] = [
	{ label: "Menu item 1" },
	{ label: "Menu item 2" },
	{ label: "Disabled", disabled: true },
	"divider",
	{ label: "Menu item 3" },
];

export const GalleryPane = () => (
	<div className="flex space-x-8">
		<div style={{ width: 120 }} className="space-y-8">
			<M.Popover
				content={() => "Ahih"}
				target={({ toggle, opened }) => (
					<M.Button
						onClick={toggle}
						selected={opened}
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
		<div style={{ width: 120 }} className="space-y-8">
			<M.ButtonMenu
				items={items}
				button={{ fill: true, children: "Open menu" }}
				placement="top"
			/>
			<M.Menu items={items} />
		</div>
	</div>
);
