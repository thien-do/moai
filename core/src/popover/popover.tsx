import { Placement } from "@popperjs/core";
import * as React from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { background } from "../background/background";
import { borderColor } from "../border/border";
import { boxShadow } from "../box-shadow/box-shadow";
import { getPortalContainer } from "../utils/utils";
import s from "./popover.module.css";

interface TargetProps {
	toggle: () => void;
	opened: boolean;
}

interface ContentProps {
	close: () => void;
}

export interface PopoverProps {
	target: (props: TargetProps) => React.ReactNode;
	content: (props: ContentProps) => React.ReactNode;
	TargetWrapper?: () => JSX.Element;
	placement?: Placement;
	onClose?: () => void;
}

const DefaultTargetWrapper = (props: {
	setTarget: (element: HTMLDivElement | null) => void;
	children: React.ReactNode;
}): JSX.Element => <div ref={props.setTarget} children={props.children} />;

interface State {
	styles: { [key: string]: React.CSSProperties };
	attributes: { [key: string]: { [key: string]: string } | undefined };
	setContent: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
	setArrow: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
	toggle: () => void;
}

const Content = (props: PopoverProps & { state: State }) => (
	<div
		ref={props.state.setContent}
		style={props.state.styles.popper}
		className={[
			s.content,
			background.primary,
			borderColor.strong,
			boxShadow.strong,
		].join(" ")}
		{...props.state.attributes.popper}
	>
		{props.content({ close: props.state.toggle })}

		{/* Popper will apply inline transform to the ref-ed elemenet so we
		need another element so we can rotate it */}
		<div
			style={props.state.styles.arrow}
			ref={props.state.setArrow}
			className={s.arrow}
			{...props.state.attributes.arrow}
		>
			<div
				className={[
					s.arrowShape,
					borderColor.strong,
					background.primary,
				].join(" ")}
			/>
		</div>
	</div>
);

export const Popover = (props: PopoverProps) => {
	const [opened, setOpened] = React.useState(false);
	const [target, setTarget] = React.useState<HTMLDivElement | null>(null);
	const [content, setContent] = React.useState<HTMLDivElement | null>(null);
	const [arrow, setArrow] = React.useState<HTMLDivElement | null>(null);
	const { styles, attributes, update } = usePopper(
		target,
		opened ? content : null,
		{
			placement: props.placement ?? "bottom",
			modifiers: [
				{ name: "offset", options: { offset: [0, 8] } },
				{ name: "arrow", options: { element: arrow } },
			],
		}
	);

	// Because Arrow and Menu is rendered conditionally, the position of arrow
	// in initial render may be wrong. This forces a Popper's update to fix it
	React.useEffect(() => {
		if (opened && update !== null) update();
	}, [opened, update]);

	// Close on outside click
	const { onClose } = props;
	React.useEffect(() => {
		if (!opened || content === null) return;
		const listener = (event: MouseEvent) => {
			if (!(event.target instanceof Node)) return;
			if (content.contains(event.target)) return;
			onClose?.();
			setOpened(false);
		};
		// Avoid trigger immediately
		window.setTimeout(() => {
			document.addEventListener("click", listener);
		}, 0);
		return () => document.removeEventListener("click", listener);
	}, [opened, content, onClose]);

	const toggle = () => setOpened((b) => !b);
	const state = { setArrow, setContent, attributes, styles, toggle };
	const TargetWrapper = props.TargetWrapper ?? DefaultTargetWrapper;

	return (
		<div>
			<TargetWrapper setTarget={setTarget}>
				{props.target({ toggle, opened })}
			</TargetWrapper>
			{opened &&
				createPortal(
					<Content {...props} state={state} />,
					getPortalContainer()
				)}
		</div>
	);
};
