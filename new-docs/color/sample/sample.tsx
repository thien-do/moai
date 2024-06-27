import Color from "color";
import { ReactElement, useEffect, useRef, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { CategoryColor, Icon, Tag, categoryColors } from "../../../core/src";
import s from "./sample.module.css";

export type ColorSampleUsage = "text" | "icon" | "both";

interface Props {
	background: string;
	foreground:
		| { type: "text"; cls: string; usage: ColorSampleUsage }
		| { type: "border"; cls: string };
}

const getColor = (contrast: number): CategoryColor => {
	const rounded = Math.round(contrast * 10) / 10;
	if (rounded >= 4.5) return categoryColors.green;
	if (rounded >= 3) return categoryColors.yellow;
	return categoryColors.red;
};

const getContrast = (
	props: Props,
	backElement: HTMLDivElement,
	foreElement: HTMLElement,
): number => {
	const back = window.getComputedStyle(backElement).backgroundColor;
	const foreStyle = window.getComputedStyle(foreElement);
	const isText = props.foreground.type === "text";
	// Only use long hand name.
	// See: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle#notes
	const fore = foreStyle[isText ? "color" : "borderLeftColor"];
	return Color(back).contrast(Color(fore));
};

function ColorIcon(): ReactElement {
	return <Icon component={HiCheckCircle} size={16} display="inline" />;
}

export function ColorSample(props: Props): ReactElement {
	const backRef = useRef<HTMLDivElement>(null);
	const foreRef = useRef<HTMLElement>(null);
	const [contrast, setContrast] = useState(0);

	useEffect(() => {
		window.setTimeout(() => {
			const [back, fore] = [backRef.current, foreRef.current];
			if (back === null) throw Error("backElm is null");
			if (fore === null) throw Error("foreElm is null");
			setContrast(getContrast(props, back, fore));
		}, 0); // Wait for all styles are applied
	}, [setContrast]);

	return (
		<div
			ref={backRef}
			className={[props.background, s.container].join(" ")}
		>
			{/* "background" also set color so the "fore" must be in another
			element of the "back" */}
			{props.foreground.type === "text" ? (
				<span ref={foreRef} className={props.foreground.cls}>
					{props.foreground.usage !== "icon" && <span>Aa</span>}
					{props.foreground.usage === "both" && <span> </span>}
					{props.foreground.usage !== "text" && <ColorIcon />}
				</span>
			) : (
				<span
					ref={foreRef}
					className={[s.border, props.foreground.cls].join(" ")}
				/>
			)}
			<span title="Color contrast" aria-label="Color contrast">
				<Tag
					color={getColor(contrast)}
					children={contrast.toFixed(1)}
				/>
			</span>
		</div>
	);
}
