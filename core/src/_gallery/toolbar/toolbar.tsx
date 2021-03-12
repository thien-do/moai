import { border, ThemeSwitcher } from "..";
import { background } from "../../background/background";
import { BackgroundSwitcher } from "./background";
import s from "./toolbar.module.css";

export const GalleryToolbar = () => (
	<div className={[s.container, border.weak, background.strong].join(" ")}>
		<div children={<ThemeSwitcher />} />
		<div children={<BackgroundSwitcher />} />
	</div>
);
