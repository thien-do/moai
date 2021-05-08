import { storiesOf } from "@storybook/react";
import { Tree } from "./tree";
import React from "react";

storiesOf("Tree", module).add("Basic Tree", () => {
	const [selectedNodes, setSelectedNodes] = React.useState<Set<string>>(
		new Set(["root"])
	);
	const [expandedNodes, setExpandedNodes] = React.useState<Set<string>>(
		new Set(["root"])
	);
	const TreeData = {
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
			root={TreeData}
			selectedNodes={selectedNodes}
			expandedNodes={expandedNodes}
			setSelected={setSelectedNodes}
			setExpanded={setExpandedNodes}
		/>
	);
});
