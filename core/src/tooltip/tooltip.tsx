import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import { Paragraph } from "../text/text";
import s from "./tooltip.module.css";

export interface TooltipProps {
	/**
	 * The content inside of the tooltip
	 */
	content: React.ReactNode;
	/**
	 * The element that hover on will show the Tooltip
	 */
	children: TippyProps["children"];
	/**
	 * The *preferred* placement where the Tooltip should appear relative to its `children`.
	 * 
	 * [Reference](https://atomiks.github.io/tippyjs/v6/all-props/#placement) to the tippy's placement
	 */
	placement?: TippyProps["placement"];
}

interface PaneProps {
	children: TooltipProps["content"];
	attrs?: object;
}

export const TooltipPane = (props: PaneProps): JSX.Element => (
	<div className="dark">
		<div
			className={[s.content, shadow.boxStrong, border.radius].join(" ")}
			tabIndex={-1}
			{...props.attrs}
		>
			{props.attrs && (
				<div data-popper-arrow className={s.arrowWrapper}>
					<div className={[s.arrow].join(" ")} />
				</div>
			)}
			<Paragraph children={props.children} />
		</div>
	</div>
);

export const Tooltip = (props: TooltipProps): JSX.Element => (
	<Tippy
		children={props.children}
		placement={props.placement ?? "top"}
		render={(attrs) => (
			<TooltipPane children={props.content} attrs={attrs} />
		)}
	/>
);
