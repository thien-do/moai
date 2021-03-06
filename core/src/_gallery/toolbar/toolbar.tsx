import { border, DivPx, ThemeSwitcher } from "..";
import { Border } from "../../border/border";
import { BackgroundSwitcher } from "./background";
import s from "./toolbar.module.css";

export const GalleryToolbar = () => (
	<div className={s.wrapper}>
		<div className={s.container}>
			<div children={<ThemeSwitcher />} />
			<div children={<BackgroundSwitcher />} />
		</div>
		<Border color="strong" />
	</div>
);
