import { background, Border, ThemeSwitcher } from "@moai/core";
import { ToolbarBackground } from "./background/background";

export const GalleryToolbar = (): JSX.Element => (
	<div className={["mb-16 sticky top-0 z-10", background.strong].join(" ")}>
		<div className="flex space-x-16 py-16">
			<ThemeSwitcher />
			<ToolbarBackground />
		</div>
		<Border color="strong" />
	</div>
);
