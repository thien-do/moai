import { Button, Tooltip, TooltipPane } from "@moai/core/src";

export const TooltipGallery = () => (
	<div className="space-y-8">
		<Tooltip content="Sample Tooltip">
			<Button.Forwarded children="Hover to show a Tooltip" />
		</Tooltip>
		<TooltipPane children="Short Tooltip" />
		<TooltipPane children="Multi-line Tooltip. Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
	</div>
);
