import s from "./icon.module.css";
import { IconType } from "react-icons";

export type IconComponent = IconType;

export interface IconProps {
	display: "block" | "inline";
	component: IconComponent;
	size?: number;
}

export const Icon = (props: IconProps): JSX.Element =>
	props.component({
		size: props.size ?? 16,
		className: props.display === "block" ? s.block : s.inline,
	});
