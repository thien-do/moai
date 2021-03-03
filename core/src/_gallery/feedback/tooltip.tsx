import { DivPx, Button, Tooltip, TooltipPane } from "..";

export const GalleryFeedbackTooltip = () => (
	<div>
		<Tooltip content="Sample Tooltip">
			<Button.Forwarded children="Hover to show a Tooltip" />
		</Tooltip>
		<DivPx size={8} />
		<TooltipPane children="Short Tooltip" />
		<DivPx size={8} />
		<TooltipPane children="Multi-line Tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
	</div>
);
