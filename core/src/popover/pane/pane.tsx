import { Placement } from "@popperjs/core";
import { background } from "../../background/background";
import { border } from "../../border/border";
import { shadow } from "../../shadow/shadow";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { getPortalContainer } from "../../utils/utils";
import s from "./pane.module.css";

interface Props {
	target: HTMLDivElement;
	children: ReactNode;
	placement?: Placement;
	onOutsideClick?: () => void;
}

export const PopoverPane = (props: Props): JSX.Element => {
	const [content, setContent] = useState<HTMLDivElement | null>(null);
	const [arrow, setArrow] = useState<HTMLDivElement | null>(null);
	const style = PopoverPane.styles.outset;

	const { styles, attributes, update } = usePopper(props.target, content, {
		placement: props.placement ?? "bottom",
		modifiers: [
			{ name: "offset", options: { offset: [0, 8] } },
			{ name: "arrow", options: { element: arrow } },
		],
	});

	// Close on outside click
	const { onOutsideClick } = props;
	useEffect(() => {
		if (content === null) return;
		const listener = (event: MouseEvent) => {
			if (!(event.target instanceof Node)) return;
			if (content.contains(event.target)) return;
			onOutsideClick?.();
		};
		// Avoid trigger immediately
		window.setTimeout(() => {
			document.addEventListener("click", listener);
		}, 0);
		return () => void document.removeEventListener("click", listener);
	}, [content, onOutsideClick]);

	// Because Arrow and Menu is rendered conditionally, the position of arrow
	// in initial render may be wrong. This forces a Popper's update to fix it
	useEffect(() => {
		update?.();
	}, [update]);

	const element = (
		<div
			ref={setContent}
			style={styles.popper}
			className={[s.container, style.content].join(" ")}
			{...attributes.popper}
		>
			{props.children}

			{/* Popper will apply inline transform to the ref-ed elemenet so we
		need another element so we can rotate it */}
			<div
				style={styles.arrow}
				ref={setArrow}
				className={s.arrow}
				{...attributes.arrow}
			>
				<div className={[s.arrowShape, style.arrow].join(" ")} />
			</div>
		</div>
	);

	return createPortal(element, getPortalContainer());
};

PopoverPane.styles = {
	outset: {
		content: [
			shadow.dropStrong,
			border.px1,
			border.strong,
			background.strong,
		].join(" "),
		arrow: "", // Looks below
	},
};

PopoverPane.styles.outset.arrow = PopoverPane.styles.outset.content;