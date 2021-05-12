import s from "./icon.module.css";
import { IconType } from "react-icons";

export type IconComponent = IconType;

export interface IconProps {
	display: "block" | "inline";
	component: IconComponent;
	size?: number;
}

export const Icon = (props: IconProps): JSX.Element => {
	const size = props.size ?? 16;
	return props.component({
		// react-icons support "size" option but avoid that because we want to
		// support all generic components
		style: { width: size, height: size },
		className: props.display === "block" ? s.block : s.inline,
	});
};
