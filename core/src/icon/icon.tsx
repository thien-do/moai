import { SVGAttributes } from "react";
import s from "./icon.module.css";

export type IconSize = 12 | 16 | 32 | 36 | 48;
export type IconPath = React.FC<SVGAttributes<SVGElement>>;

export interface IconProps {
	path: IconPath;
	size?: IconSize;
	display: "block" | "inline";
}

export const Icon = (props: IconProps): JSX.Element => {
	const element = props.path({
		width: props.size ?? 16,
		height: props.size ?? 16,
		className: props.display === "block" ? s.block : s.inline,
	});
	if (element === null) throw Error("Icon element is null");
	return element;
};
