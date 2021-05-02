import React from "react";
import { TreeItem, TreeNodeBase } from "./item/item";

export interface TreeContainerProps {
	children?: React.ReactNode;
}

export const TreeContainer = (props: TreeContainerProps): JSX.Element => {
	return <div>{props.children}</div>;
};

export interface TreeProps {
	children?: React.ReactNode;
}

export const Tree = (props: TreeProps): JSX.Element => {
	return <TreeContainer>{props.children}</TreeContainer>;
};

interface RecursiveTreeAction {
	/**
	 * Selected nodes in controlled mode
	 */
	selected?: Set<string>;

	/**
	 * Expanded nodes in controlled mode
	 */
	expanded?: Set<string>;

	/**
	 * Handler to set selected nodes in controlled mode
	 */
	setSelected?: (set: Set<string>) => void;

	/**
	 * Handler to set expanded nodes in controlled mode
	 */
	setExpanded?: (set: Set<string>) => void;
}

interface RecursiveTreeNode extends TreeNodeBase {
	children?: RecursiveTreeNode[];
}

interface RecursiveTreeTemplateProps extends RecursiveTreeAction {
	node: RecursiveTreeNode;
	level: number;
}

const RecursiveTreeTemplate = (
	props: RecursiveTreeTemplateProps
): React.ReactElement<RecursiveTreeTemplateProps> => {
	const { node, level, setSelected, setExpanded, ...rest } = props;
	const shouldExpand = props.expanded?.has(node.id);
	const selected = props.selected?.has(node.id);

	const onTreeItemClick = React.useCallback(() => {
		props.setSelected?.(new Set([node.id]));
	}, [setSelected]);

	const onIconClick = React.useCallback(() => {
		const expanded = props.expanded;
		if (expanded.has(node.id)) {
			expanded.delete(node.id);
		} else {
			expanded.add(node.id);
		}
		props.setExpanded?.(new Set(expanded));
	}, [setExpanded]);

	return (
		<TreeItem
			id={node.id}
			label={node.label}
			level={level}
			expanded={shouldExpand}
			selected={selected}
			onItemClick={onTreeItemClick}
			showCollapseIcon={!!node.children?.length}
			onCollapseIconClick={onIconClick}
		>
			{shouldExpand &&
				node.children?.map((childNode, index) => {
					return (
						<RecursiveTreeTemplate
							node={childNode}
							level={props.level + 1}
							key={index}
							setSelected={setSelected}
							setExpanded={setExpanded}
							{...rest}
						/>
					);
				})}
		</TreeItem>
	);
};

export interface RecursiveTreeProps extends RecursiveTreeAction {
	root: RecursiveTreeNode;
}

export const RecursiveTree = (props: RecursiveTreeProps): JSX.Element => {
	return (
		<TreeContainer>
			<RecursiveTreeTemplate node={props.root} level={0} {...props} />
		</TreeContainer>
	);
};
