import React from "react";
import { Meta } from "@storybook/react";
import { Tree } from "./tree";

export default {
	title: "Draft/Tree",
	component: Tree,
} as Meta;

export const Primary = (): JSX.Element => {
	const [selectedNodes, setSelectedNodes] = React.useState<Set<string>>(
		new Set(["root"])
	);
	const [expandedNodes, setExpandedNodes] = React.useState<Set<string>>(
		new Set(["root"])
	);
	const Root = {
		id: "root",
		label: "root",
		children: [
			{
				id: "child-1",
				label: "child-1",
				children: [
					{
						id: "child-1.1",
						label: "child-1.1",
					},
					{
						id: "child-1.2",
						label: "child-1.2",
					},
				],
			},
			{
				id: "child-2",
				label: "child-2",
			},
		],
	};

	return (
		<Tree
			root={Root}
			selectedNodes={selectedNodes}
			expandedNodes={expandedNodes}
			setSelected={setSelectedNodes}
			setExpanded={setExpandedNodes}
		/>
	);
};
