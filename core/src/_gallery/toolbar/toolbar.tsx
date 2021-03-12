import { border, ThemeSwitcher } from "..";
import { background } from "../../background/background";
import { DivPx } from "../../div/div";
import s from "./toolbar.module.css";

export const GalleryToolbar = () => (
	<div className={[s.container, border.weak, background.strong].join(" ")}>
		<span>Theme:</span>
		<DivPx size={16} />
		<ThemeSwitcher />
		{/* <div children={<BackgroundSwitcher />} /> */}
	</div>
);
