import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { boxShadow } from "../box-shadow/box-shadow";
import { Paragraph } from "../text/text";
import s from "./tooltip.module.css";

export interface TooltipProps {
	content: React.ReactNode;
	children: TippyProps["children"];
	placement?: TippyProps["placement"];
}

interface PaneProps {
	children: TooltipProps["content"];
	attrs?: object;
}

export const TooltipPane = (props: PaneProps): JSX.Element => (
	<div className="dark">
		<div
			className={[s.content, boxShadow.strong].join(" ")}
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
