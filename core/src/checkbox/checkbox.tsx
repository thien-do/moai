import React from "react";

import { Icon } from "../icon/icon";
import { outline } from "../outline/outline";
import outset from "../button/outset.module.scss";
import s from "./checkbox.module.scss";

interface Props {
	value: boolean;
	setValue: (checked: boolean) => void;
	children: React.ReactNode;
}

const tickPath =
	"M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z";

export const Checkbox: React.FC<Props> = ({ value, setValue, children }) => (
	<label className={s.container}>
		{value && (
			<span className={s.tick}>
				<Icon path={tickPath} />
			</span>
		)}
		<input
			type="checkbox"
			className={`${s.input} ${outset.main} ${outline.normal}`}
			checked={value}
			onChange={(e) => setValue(e.target.checked)}
		/>
		<span className={s.label}>{children}</span>
	</label>
);
