import React from "react";

import { outline } from "../outline/outline";
import outset from "../button/outset.module.scss";
import s from "./radio.module.scss";

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
				className={`${s.input} ${outset.main} ${outline.outer}`}
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
