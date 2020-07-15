import React from "react";
import { IconSize } from "../icon/icon";
import s from "./circle.module.scss";

// This file follows blueprint's spinner. Please see the source here:
// https://github.com/palantir/blueprint/blob/develop/packages/core/src/components/spinner/spinner.tsx

interface Props {
	size: IconSize | 24 | 32;
	value: number | null;
}

const R = 45;
// prettier-ignore
const SPINNER_TRACK = `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,${R * 2} a ${R},${R} 0 1 1 0,-${R * 2}`;
const PATH_LENGTH = 280;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;
const SIZE_LARGE = 100;

const getViewBox = (strokeWidth: number) => {
	const radius = R + strokeWidth / 2;
	const viewBoxX = (50 - radius).toFixed(2);
	const viewBoxWidth = (radius * 2).toFixed(2);
	return `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
};

export const ProgressCircle = (props: Props) => {
	// keep spinner track width consistent at all sizes (down to about 10px).
	// prettier-ignore
	const strokeWidth = Math.min(MIN_STROKE_WIDTH, (STROKE_WIDTH * SIZE_LARGE) / props.size);
	const strokeOffset = PATH_LENGTH - PATH_LENGTH * (props.value ?? 0.25);

	return (
		<div>
			<svg
				className={[
					s.container,
					props.value === null ? s.animate : "",
				].join(" ")}
				width={props.size}
				height={props.size}
				strokeWidth={strokeWidth}
				viewBox={getViewBox(strokeWidth)}
			>
				<path className={s.track} d={SPINNER_TRACK} />
				<path
					className={s.head}
					d={SPINNER_TRACK}
					pathLength={PATH_LENGTH}
					strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
					strokeDashoffset={strokeOffset}
				/>
			</svg>
		</div>
	);
};
