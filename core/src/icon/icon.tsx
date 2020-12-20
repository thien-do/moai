import s from "./icon.module.css";

export type IconSize = 12 | 16 | 36;
export type IconPath = string;

export interface IconProps {
	path: IconPath;
	size?: IconSize;
	display: "block" | "inline";
}

export const Icon = ({ path, size, display }: IconProps): JSX.Element => (
	<svg
		className={[s.icon, display === "block" ? s.block : s.inline].join(" ")}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		width={size ?? 16}
		height={size ?? 16}
		children={<path d={path} />}
	/>
);
