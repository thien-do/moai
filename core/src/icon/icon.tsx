import s from "./icon.module.css";
import { IconType } from "react-icons";

export type IconSize = 12 | 16 | 20 | 24 | 32 | 36 | 48;

export type IconComponent = IconType;

export interface IconProps {
	display: "block" | "inline";
	component: IconComponent;
	size?: IconSize;
}

export const Icon = (props: IconProps): JSX.Element =>
	props.component({
		size: props.size ?? 16,
		className: props.display === "block" ? s.block : s.inline,
	});
