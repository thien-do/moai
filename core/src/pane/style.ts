import { background } from "../background/background";
import { borderColor } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import s from "./style.module.css";

export const pane = {
	outset: [
		s.outset,
		background.primary,
		boxShadow.strong,
		borderColor.strong,
	].join(" "),
};
