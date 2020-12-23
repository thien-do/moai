import s from "./icon.module.css";

export type IconSize = 12 | 16 | 36;
export type IconPath = () => JSX.Element;

export interface IconProps {
	path: IconPath;
	size?: IconSize;
	display: "block" | "inline";
}

export const Icon = ({ path, size, display }: IconProps): JSX.Element => path();
