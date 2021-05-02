import { storiesOf } from "@storybook/react";
import { RecursiveTree } from "./tree";
import React from "react";

storiesOf("Tree", module).add("Basic Tree", () => {
	const [selected, setSelected] = React.useState<Set<string>>(
		new Set(["root"])
	);
	const [expanded, setExpanded] = React.useState<Set<string>>(
		new Set(["root"])
	);
	const TreeData = {
		id: "root",
		label: "root",
		children: [
			{
				id: "child1",
				label: "child1",
				children: [
					{
						id: "child1-1",
						label: "child1-1",
					},
				],
			},
			{
				id: "child2",
				label: "child2",
			},
		],
	};

	return (
		<RecursiveTree
			root={TreeData}
			setSelected={setSelected}
			selected={selected}
			expanded={expanded}
			setExpanded={setExpanded}
		/>
	);
});
