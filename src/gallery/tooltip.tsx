import { DivPx, Button, Tooltip, TooltipPane } from "@moai/core";
import { Shot } from "./shot/shot";

export const GalleryTooltip = (): JSX.Element => (
	<Shot>
		<Tooltip content="Sample Tooltip">
			<Button children="Hover to show Tooltip" />
		</Tooltip>
		<DivPx size={8} />
		<TooltipPane children="Short Tooltip" />
		<DivPx size={8} />
		<TooltipPane children="Multi-line Tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
	</Shot>
);
