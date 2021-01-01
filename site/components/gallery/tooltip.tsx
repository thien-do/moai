import { Button, Tooltip, TooltipPane } from "@moai/core";

export const GalleryTooltip = () => (
	<div className="space-y-16">
		<Tooltip content="Sample Tooltip">
			<Button.Forwarded children="Hover to show a tooltip" />
		</Tooltip>
		<TooltipPane children="Tooltip with short text" />
		<TooltipPane children="Tooltip with long text. Lorem ipsum dolor sit amet, consectetur." />
	</div>
);
