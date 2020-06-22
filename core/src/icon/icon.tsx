import React from "react";

import s from "./icon.module.scss";

export type IconSize = 12 | 16;
export type IconPath = string;

interface Props {
	path: IconPath;
	size?: IconSize;
}

export const Icon: React.FC<Props> = ({ path, size }) => (
	<svg
		className={s.icon}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
		width={size ?? 16}
		height={size ?? 16}
	>
		<path d={path} />
	</svg>
);
