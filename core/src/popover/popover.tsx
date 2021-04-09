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
	target: (props: TargetProps) => React.ReactNode;
	content: (props: ContentProps) => React.ReactNode;
	TargetWrapper?: () => JSX.Element;
	placement?: Placement;
}

const DefaultTargetWrapper = (props: {
	setTarget: (element: HTMLDivElement | null) => void;
	children: React.ReactNode;
}): JSX.Element => <div ref={props.setTarget} children={props.children} />;

export const Popover = (props: PopoverProps): JSX.Element => {
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
