import React from "react";
import { Button } from "../../button/button";
import { coreIcons } from "../../icons/icons";
import s from "./item.module.css";

export interface TreeNodeBase {
	id?: string;

	label: string;

	children?: React.ReactNode;

	expanded?: boolean;

	selected?: boolean;

	/**
	 * Whether collapse icon of a tree item should be show.
	 */
	showCollapseIcon?: boolean;

	onItemClick?: () => void;

	onCollapseIconClick?: () => void;
}

interface TreeNodeProps extends TreeNodeBase {
	level: number;
}

const Tab = () => (
	<div className={[Button.sizes.smallIcon.main, s.tab].join(" ")} />
);

export const TreeItem = (props: TreeNodeProps): JSX.Element => {
	const {
		expanded,
		selected,
		children,
		label,
		showCollapseIcon,
		onItemClick,
		onCollapseIconClick,
	} = props;

	const onClickContainer = React.useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			e?.stopPropagation();
			onItemClick?.();
		},
		[onItemClick]
	);

	const onCollapseButtonClick = React.useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			e?.stopPropagation();
			onCollapseIconClick?.();
		},
		[onCollapseIconClick]
	);

	return (
		<div className={[s.container].join(" ")} onClick={onClickContainer}>
			<div
				className={[
					s.content,
					Button.styles.flat.main,
					selected ? Button.styles.flat.selected : "",
				].join(" ")}
			>
				{[...Array(props.level ?? 0)].map((_v, i) => (
					<Tab key={i} />
				))}
				<div className={s.toggle}>
					{showCollapseIcon ? (
						<Button
							icon={
								expanded
									? coreIcons.chevronDown
									: coreIcons.chevronRight
							}
							iconLabel={
								expanded ? "Collapse group" : "Expand group"
							}
							onClick={onCollapseButtonClick}
							style={Button.styles.flat}
							size={Button.sizes.smallIcon}
						/>
					) : (
						<Tab />
					)}
				</div>
				<div className={s.label}>{label}</div>
			</div>
			{children ? <div>{children}</div> : null}
		</div>
	);
};
