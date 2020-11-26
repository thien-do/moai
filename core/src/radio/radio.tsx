import React from "react";

import { outline } from "../outline/outline";
import outset from "../button/outset.module.css";
import s from "./radio.module.css";

interface Props {
	name: string;
	value: string;
	setValue: () => void;
	checked: boolean;
	label: React.ReactNode;
}

export const Radio: React.FC<Props> = (props) => {
	const { name, value, setValue, checked, label } = props;
	return (
		<label className={s.container}>
			{checked && <span className={s.dot} />}
			<input
				className={`${s.input} ${outset.main} ${outline.normal}`}
				type="radio"
				name={name}
				checked={checked}
				value={value}
				onChange={() => setValue()}
			/>
			<span className={s.label}>{label}</span>
		</label>
	);
};
