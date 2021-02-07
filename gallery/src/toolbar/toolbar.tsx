import { ThemeSwitcher } from "@moai/core";
import { ToolbarBackground } from "./background/background";

export const GalleryToolbar = (): JSX.Element => (
	<div className="flex py-16 space-x-16">
		<ThemeSwitcher />
		<ToolbarBackground />
	</div>
);
