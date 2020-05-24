import React from "react";

import { outline } from "../outline/outline";
import s from "./range.module.scss";

interface Props {
	value: number;
	setValue: (value: number) => void;
	list?: { id: string; numbers: number[] };
	min: number;
	max: number;
	step: number;
}

export const RangeInput: React.FC<Props> = (props) => (
	<>
		<input
			className={`${s.input} ${outline.outer}`}
			type="range"
			value={props.value}
			onChange={(e) => props.setValue(e.target.valueAsNumber)}
			list={props.list?.id ?? undefined}
			min={props.min}
			max={props.max}
			step={props.step}
		/>
		{props.list && (
			<datalist id={props.list.id}>
				{props.list.numbers.map((num) => (
					<option key={num} value={num} />
				))}
			</datalist>
		)}
	</>
);
