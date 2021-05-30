import Color from "color";
import { useEffect, useRef, useState } from "react";
import {
	CategoryColor,
	categoryColors,
	DivEm,
	Icon,
	Tag,
} from "../../../core/src";
import { HiCheckCircle } from "react-icons/hi";
import s from "./sample.module.css";

export interface ColorSampleProps {
	fore: string;
	back: string;
	content: "text" | "icon" | "both";
}

const getColor = (contrast: number): CategoryColor => {
	const rounded = Math.round(contrast * 10) / 10;
	if (rounded >= 4.5) return categoryColors.green;
	if (rounded >= 3) return categoryColors.yellow;
	return categoryColors.red;
};

export const ColorSample = (props: ColorSampleProps): JSX.Element => {
	const backRef = useRef<HTMLDivElement>(null);
	const foreRef = useRef<HTMLDivElement>(null);
	const [contrast, setContrast] = useState(0);

	useEffect(() => {
		window.setTimeout(() => {
			const [backElm, foreElm] = [backRef.current, foreRef.current];
			if (backElm === null) throw Error("backElm is null");
			if (foreElm === null) throw Error("foreElm is null");
			const back = window.getComputedStyle(backElm).backgroundColor;
			const fore = window.getComputedStyle(foreElm).color;
			setContrast(Color(back).contrast(Color(fore)));
		}, 0); // The delay is required for correct color
	}, [setContrast]);

	return (
		<div ref={backRef} className={[props.back, s.container].join(" ")}>
			{/* "background" also set color so the "fore" must be in another
			element of the "back" */}
			<span ref={foreRef} className={props.fore}>
				{props.content !== "icon" && <span>Aa</span>}
				{props.content === "both" && <span> </span>}
				{props.content !== "text" && (
					<Icon
						component={HiCheckCircle}
						size={16}
						display="inline"
					/>
				)}
			</span>
			<DivEm />
			<Tag color={getColor(contrast)} children={contrast.toFixed(1)} />
		</div>
	);
};
