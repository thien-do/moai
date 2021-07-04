import Color from "color";
import { useEffect, useRef, useState } from "react";
import { text } from "@moai/core";
import s from "./sample.module.css";

interface Props {
	name: string;
}

export const ColorStaticSample = (props: Props): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null);
	const [hex, setHex] = useState("");

	useEffect(() => {
		window.setTimeout(() => {
			const div = ref.current;
			if (div === null) throw Error("Ref is not attached");
			const bg = window.getComputedStyle(div).backgroundColor;
			setHex(Color(bg).hex());
		}, 0); // Wait for all colors to be applied correctly
	}, []);

	return (
		<div className={s.container}>
			<div
				ref={ref}
				className={s.circle}
				style={{ backgroundColor: `var(--${props.name})` }}
			/>
			<div className={text.muted}>{hex}</div>
		</div>
	);
};
