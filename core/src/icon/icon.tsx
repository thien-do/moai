import React from "react";

import s from "./icon.module.scss";

export interface Icon {
	d: string;
}

interface Props {
	icon: Icon;
}

export const IconC: React.FC<Props> = ({ icon }) => (
	<svg
		className={s.icon}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 16 16"
	>
		<path d={icon.d} />
	</svg>
);
