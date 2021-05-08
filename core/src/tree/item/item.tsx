import React from "react";
import { Button } from "../../button/button";
import { coreIcons } from "../../icons/icons";
import s from "./item.module.css";

export interface TreeNode {
	id: string;

	label: string;

	children?: React.ReactNode;

	/**
	 * Nested level which is used to render the left padding of nested nodes.
	 * @default 0
	 */
	level?: number;

	/**
	 * Whether node is expanded.
	 */
	expanded?: boolean;

	/**
	 * Whether node is selected.
	 */
	selected?: boolean;

	/**
	 * Whether collapse icon should be showed.
	 * @default true
	 */
	showCollapseIcon?: boolean;

	/**
	 * Handler for when item is clicked on.
	 */
	onItemClick?: () => void;

	/**
	 * Handler for when collapse icon is clicked.
	 */
	onCollapseIconClick?: () => void;
}

const Tab = (): JSX.Element => (
	<div className={[Button.sizes.smallIcon.main, s.tab].join(" ")} />
);

export const TreeItem = (props: TreeNode): JSX.Element => {
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

TreeItem.defaultProps = {
	showCollapseIcon: true,
};
