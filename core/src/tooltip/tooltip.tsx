import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import { Paragraph } from "../text/text";
import s from "./tooltip.module.css";

export interface TooltipProps {
	/**
	 * The content of the tooltip.
	 * It could be either a `ReactNode` or function which returns a `ReactNode`
	 */
	content: React.ReactNode;
	/**
	 * The element to be wrapped
	 */
	children: TippyProps["children"];
	/**
	 * Placement position
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
