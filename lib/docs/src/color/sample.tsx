import Color from "color";
import { useEffect, useRef, useState } from "react";
import { CategoryColor, categoryColors } from "../../src/category/category";
import { DivEm } from "../../src/div/div";
import { Tag } from "../../src/tag/tag";

interface Props {
	fore: string;
	back: string;
	text: string;
}

const getColor = (contrast: number): CategoryColor => {
	const rounded = Math.round(contrast * 10) / 10;
	if (rounded >= 4.5) return categoryColors.green;
	if (rounded >= 3) return categoryColors.yellow;
	return categoryColors.red;
};

export const ColorSample = (props: Props): JSX.Element => {
	const ref = useRef<HTMLDivElement>(null);
	const [contrast, setContrast] = useState(0);

	useEffect(() => {
		window.setTimeout(() => {
			const element = ref.current;
			if (element === null) throw Error("Ref is not attached");
			const style = window.getComputedStyle(element);
			const back = Color(style.backgroundColor);
			const fore = Color(style.color);
			setContrast(back.contrast(fore));
		}, 0); // The delay is required for correct color
	}, [setContrast]);

	return (
		<div
			ref={ref}
			className={[props.back, props.fore].join(" ")}
			style={{
				padding: 8,
				fontVariantNumeric: "tabular-nums",
				width: 100,
			}}
		>
			<Tag color={getColor(contrast)} children={contrast.toFixed(1)} />
			<DivEm />
			{props.text}
		</div>
	);
};
