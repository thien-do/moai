import React from "react";

import { IconC } from "../icon/icon";
import { button } from "../form/form";
import { outline } from "../outline/outline";
import s from "./checkbox.module.scss";

interface Props {
	value: boolean;
	setValue: (checked: boolean) => void;
	children: React.ReactNode;
}

const tickIcon = {
	d:
		"M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z",
};
const tick = (
	<span className={s.tick}>
		<IconC icon={tickIcon} />
	</span>
);

export const Checkbox: React.FC<Props> = ({ value, setValue, children }) => (
	<label className={s.container}>
		{value && tick}
		<input
			type="checkbox"
			className={`${s.input} ${button.main} ${outline.outer}`}
			checked={value}
			onChange={(e) => setValue(e.target.checked)}
		/>
		<span className={s.label}>{children}</span>
	</label>
);
