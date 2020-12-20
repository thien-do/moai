import Tippy, { TippyProps } from "@tippyjs/react/headless";
import React from "react";
import { background } from "../background/background";
import { boxShadow } from "../box-shadow/box-shadow";
import { Paragraph } from "../text/text";
import s from "./tooltip.module.css";

export interface TooltipProps {
	content: React.ReactNode;
	children: TippyProps["children"];
	placement?: TippyProps["placement"];
}

export const Tooltip = (props: TooltipProps): JSX.Element => (
	<Tippy
		children={props.children}
		placement={props.placement}
		render={(attrs) => (
			<div
				className={[
					s.content,
					background.inverse,
					boxShadow.strong,
				].join(" ")}
				tabIndex={-1}
				{...attrs}
			>
				<div data-popper-arrow className={s.arrowWrapper}>
					<div className={[s.arrow, background.inverse].join(" ")} />
				</div>
				<Paragraph children={props.content} />
			</div>
		)}
	/>
);
