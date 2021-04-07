import { Placement } from "@popperjs/core";
import { useCallback, useState } from "react";
import { PopoverPane } from "./pane/pane";

interface TargetProps {
	toggle: () => void;
	opened: boolean;
}

interface ContentProps {
	close: () => void;
}

export interface PopoverProps {
	/**
	 * The component that will be render Popover when action on it
	 */
	target: (props: TargetProps) => React.ReactNode;
	/**
	 * The elements to be displayed within the Popover
	 */
	content: (props: ContentProps) => React.ReactNode;
	/**
	 * `target`'s wrapper
	 */
	TargetWrapper?: () => JSX.Element;
	/**
	 * Describes the preferred placement of the Popover relative to the `target`
	 */
	placement?: Placement;
}

const DefaultTargetWrapper = (props: {
	setTarget: (element: HTMLDivElement | null) => void;
	children: React.ReactNode;
}): JSX.Element => <div ref={props.setTarget} children={props.children} />;

/**
 * A Popover is a pop-up container. It can also contain controls.
 * 
 * Popover are displayed when triggered by a user action, usally by clicking.
 */
export const Popover = (props: PopoverProps) => {
	const [opened, setOpened] = useState(false);
	const [target, setTarget] = useState<HTMLDivElement | null>(null);

	const toggle = useCallback(() => setOpened((b) => !b), []);
	const close = useCallback(() => void setOpened(false), []);
	const TargetWrapper = props.TargetWrapper ?? DefaultTargetWrapper;

	return (
		<div>
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
		</div>
	);
};

Popover.styles = PopoverPane.styles;
