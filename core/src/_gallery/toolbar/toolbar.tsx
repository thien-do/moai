import { border, DivPx, ThemeSwitcher } from "..";
import { BackgroundSwitcher } from "./background";
import s from "./toolbar.module.css";

export const GalleryToolbar = () => (
	<div className={[s.container, border.strong].join(" ")}>
		<ThemeSwitcher />
		<DivPx size={16} />
		<BackgroundSwitcher />
	</div>
);
