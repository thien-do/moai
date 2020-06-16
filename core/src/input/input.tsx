import React from "react";

import { outline } from "../outline/outline";
import { borderColor } from "../border/border";
import { background } from "../background/background";
import s from "./input.module.scss";

// @TODO: T actually must be T extends (number | string)
interface Props<T> {
	type: "number" | "text";
	value: T;
	setValue: (value: T) => void;
	list?: {
		id: string;
		values: T[];
	};
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const onChange = <T,>(props: Props<T>) => (e: ChangeEvent) => {
	const { currentTarget: target } = e;
	const isNumber = typeof props.value === "number";
	props.setValue(isNumber ? target.valueAsNumber : (target.value as any));
};

export const Input = <T extends number | string>(props: Props<T>) => (
	<>
		<input
			className={[
				s.input,
				outline.inner,
				borderColor.weak,
				background.primary,
			].join(" ")}
			type={props.type}
			value={props.value}
			onChange={onChange(props)}
			list={props.list?.id ?? undefined}
		/>
		{props.list && (
			<datalist id={props.list.id}>
				{props.list.values.map((value) => (
					<option key={value} value={value} />
				))}
			</datalist>
		)}
	</>
);
