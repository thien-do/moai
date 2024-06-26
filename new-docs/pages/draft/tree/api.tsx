import { APIData } from "../../../utils/api/api";

export const TreeAPI: APIData[] = [
	{
		prop: "parentMode",
		description: {
			type: "select | expand",
			description: (
				<>
					Whether clicking on a parent&lsquo; s title will select or
					expand it. If set to &quot;select&quot;, clicking on the
					chevron arrow will expand it.
				</>
			),
		},
		required: true,
	},
	{
		prop: "_level",
		description: {
			type: "number",
			description: (
				<>
					Nested level. This is only used to render the left padding
					of nested nodes. The consumer usually should not set this
					since they are passing the root node.
				</>
			),
		},
	},
	{
		prop: "node",
		description: {
			type: "TreeNode",
			description:
				"The tree node itself. The Tree component simply renders this.",
		},
	},
	{
		prop: "loadChildren",
		description: {
			type: "((node: TreeNode) => Promise<void>)",
			description: (
				<>
					Because Tree is a controlled component, it can only ask the
					host to load children and update the root on their side.
					Because Tree is a controlled component, it can only ask the
					host to load children and update the root on their side.
				</>
			),
		},
	},
	{
		prop: "getRowActions",
		description: {
			type: "((node: TreeNode) => MenuItemAction[])",
			description: (
				<>
					Actions to display for a given node/row. Return an empty
					array will be the same as not define this prop.
				</>
			),
		},
	},
	{
		prop: "selected",
		description: {
			type: "Set<string>",
			description: "Selected nodes in controlled mode",
		},
		required: true,
	},
	{
		prop: "setSelected",
		description: {
			type: "(set: Set<string>) => void",
			description: "Handler to set selected nodes in controlled mode",
		},
		required: true,
	},
	{
		prop: "expanded",
		description: {
			type: "Set<string>",
			description: "Expanded nodes in controlled mode.",
		},
		required: true,
	},
	{
		prop: "setExpanded",
		description: {
			type: "(set: Set<string>) => void",
			description: "Handler to set expanded nodes in controlled mode",
		},
		required: true,
	},
];
