import React from "react";
import { TreeItem, TreeNode } from "./item/item";

export interface TreeContainerProps {
	children?: React.ReactNode;
}

export const TreeContainer = (props: TreeContainerProps): JSX.Element => {
	return <div>{props.children}</div>;
};

export interface TreeBase {
	/**
	 * Selected nodes.
	 */
	selectedNodes?: Set<string>;

	/**
	 * Expanded nodes.
	 */
	expandedNodes?: Set<string>;
	/**
	 * Handler to set selected nodes.
	 */
	setSelected?: (set: Set<string>) => void;

	/**
	 * Handler to set expanded nodes.
	 */
	setExpanded?: (set: Set<string>) => void;
}

interface NestedNode extends TreeNode {
	children?: NestedNode[];
}

interface NestedNodeTemplateProps extends TreeBase {
	node: NestedNode;

	/**
	 * Nested level which is used to render the left padding of nested nodes.
	 */
	level: number;
}

const NestedNodeTemplate = (
	props: NestedNodeTemplateProps
): React.ReactElement<NestedNodeTemplateProps> => {
	const {
		node,
		level,
		expandedNodes,
		selectedNodes,
		setSelected,
		setExpanded,
	} = props;

	const shouldExpand = expandedNodes?.has(node.id);

	const onItemClick = React.useCallback(() => {
		setSelected?.(new Set([node.id]));
	}, [setSelected]);

	const onCollapseIconClick = React.useCallback(() => {
		if (!expandedNodes) return;
		if (expandedNodes.has(node.id)) {
			expandedNodes.delete(node.id);
		} else {
			expandedNodes.add(node.id);
		}
		setExpanded?.(new Set(expandedNodes));
	}, [setExpanded]);

	return (
		<TreeItem
			id={node.id}
			label={node.label}
			level={level}
			expanded={shouldExpand}
			selected={selectedNodes?.has(node.id)}
			onItemClick={onItemClick}
			showCollapseIcon={!!node.children?.length}
			onCollapseIconClick={onCollapseIconClick}
		>
			{shouldExpand &&
				node.children?.map((childNode, index) => {
					return (
						<NestedNodeTemplate
							node={childNode}
							level={level + 1}
							key={index}
							setSelected={setSelected}
							setExpanded={setExpanded}
							expandedNodes={expandedNodes}
							selectedNodes={selectedNodes}
						/>
					);
				})}
		</TreeItem>
	);
};

export interface TreeProps extends TreeBase {
	/**
	 * The root node of tree which always have nested level = 0.
	 */
	root: NestedNode;
}

export const Tree = (props: TreeProps): JSX.Element => {
	return (
		<TreeContainer>
			<NestedNodeTemplate node={props.root} level={0} {...props} />
		</TreeContainer>
	);
};
