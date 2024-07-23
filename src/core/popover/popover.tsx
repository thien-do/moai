import { Placement } from "@popperjs/core";
import { Fragment, useCallback, useState } from "react";
import { PopoverPane } from "./pane/pane";

export interface PopoverTargetProps {
	toggle: () => void;
	opened: boolean;
}

export interface PopoverContentProps {
	close: () => void;
}

export type PopoverPlacement = Placement;

export interface PopoverProps {
	/**
	 * The element that will receive a callback to display the popover's
	 * content. The content is positioned relative to this element.
	 */
	target: (props: PopoverTargetProps) => React.ReactNode;
	/**
	 * The elements to be displayed inside the pop-up container.
	 */
	content: (props: PopoverContentProps) => React.ReactNode;
	/**
	 * The wrapper of the `target` element. Popover uses this wrapper to
	 * position its content. Use one from "Popover.targetWrappers".
	 */
	TargetWrapper?: (props: TargetWrapperProps) => JSX.Element;
	/**
	 * The preferred placement of the popover content, relative to the
	 * `target` element. This is [Popper's placement][1] option.
	 *
	 * [1]: https://popper.js.org/docs/v2/constructors/#options
	 */
	placement?: PopoverPlacement;
}

export interface TargetWrapperProps {
	setTarget: (element: HTMLDivElement | null) => void;
	children: React.ReactNode;
}

/**
 * A popover is a pop-up container. It contains other elements and displays
 * them on top of the app when triggered by a user action, usuallly by
 * clicking. It is built on top of [Popper.js][1].
 *
 * Popovers are [non-modal][2] elements. They don't block the main flow, and
 * users can easily dismiss them by clicking outside or pressing "Escape".
 *
 * [1]: https://popper.js.org
 * [2]: https://www.nngroup.com/articles/modal-nonmodal-dialog/
 */
export const Popover = (props: PopoverProps): JSX.Element => {
	const [opened, setOpened] = useState(false);
	const [target, setTarget] = useState<HTMLDivElement | null>(null);

	const toggle = useCallback(() => setOpened((b) => !b), []);
	const close = useCallback(() => void setOpened(false), []);
	const TargetWrapper =
		props.TargetWrapper ?? Popover.targetWrappers.blockContent;

	return (
		<Fragment>
			<TargetWrapper setTarget={setTarget}>
				{props.target({ toggle, opened })}
			</TargetWrapper>
			{opened && target && (
				<PopoverPane
					children={props.content({ close })}
					target={target}
					placement={props.placement}
					onOutsideClick={close}
				/>
			)}
		</Fragment>
	);
};

Popover.styles = PopoverPane.styles;
Popover.targetWrappers = {
	block: (props: TargetWrapperProps): JSX.Element => (
		<div ref={props.setTarget} children={props.children} />
	),
	blockContent: (props: TargetWrapperProps): JSX.Element => (
		<div
			ref={props.setTarget}
			children={props.children}
			style={{ width: "fit-content" }}
		/>
	),
	inline: (props: TargetWrapperProps): JSX.Element => (
		<span ref={props.setTarget} children={props.children} />
	),
};
