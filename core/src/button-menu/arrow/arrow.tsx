import * as React from "react";
import { background } from "../../background/background";
import { borderColor } from "../../border/border";
import s from "./arrow.module.scss";

interface Props {
	style: React.CSSProperties;
	setArrow: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
	attributes: { [key: string]: string } | undefined;
}

export const ButtonMenuArrow = (props: Props) => (
	<div
		style={props.style}
		className={s.container}
		ref={props.setArrow}
		{...props.attributes}
	>
		<div
			className={[
				s.shape,
				borderColor.strong,
				background.primary,
			].join(" ")}
		/>
	</div>
);
