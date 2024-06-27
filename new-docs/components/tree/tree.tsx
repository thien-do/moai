import { ReactElement, useState } from "react";
import { Dialog, Tree } from "../../../core/src";

const root = {
	id: "root",
	label: "Document",
	children: [
		{
			id: "hello-file",
			label: "hello.txt",
		},
		{
			id: "gallery-folder",
			label: "Gallery",
			children: [
				{
					id: "autumn-picture",
					label: "autumn.png",
				},
				{
					id: "summer-picture",
					label: "summer.png",
				},
			],
		},
	],
};

export function TreeExample(): ReactElement {
	const [expanded, setExpanded] = useState<Set<string>>(new Set());
	const [selected, setSelected] = useState<Set<string>>(new Set());

	return (
		<div style={{ width: 200 }}>
			<Tree
				expanded={expanded}
				setExpanded={setExpanded}
				selected={selected}
				setSelected={setSelected}
				node={root}
				parentMode="select"
				getRowActions={(node) => [
					{ label: "Say", fn: () => Dialog.alert(node.label) },
				]}
			/>
		</div>
	);
}
