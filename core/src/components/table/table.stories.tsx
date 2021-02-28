import { Meta } from "@storybook/react";
import { _Story } from "../../_story";
import { DocsPage } from "@storybook/addon-docs/blocks";
import { Table } from "./table";
import { TableColumn } from "./fake-table-column";
import { TableGallery } from "../../gallery/table/table";
import { Robot, ROBOTS } from "../../gallery/table/robots";

export default {
	title: "Components/Table",
	component: Table,
	subcomponents: { Table, TableColumn },
	parameters: { docs: { page: DocsPage }, stickyPrimary: false },
} as Meta;

export const Primary = () => (
	// This table is quite complicated. Please see the "Basic" section for
	// simpler code to get started with Table.
	<TableGallery />
);

export const Basic = () => {
	// The definition of interface here is only for explanation purpose. In
	// practice the interface/type/model should already be defined outside of
	// your component.
	interface Person {
		id: number;
		name: string;
		email: string;
	}

	return (
		<Table<Person>
			rows={[
				{ id: 0, name: "Jensen", email: "jensen.romaguera@gmail.com" },
				{ id: 1, name: "Enos", email: "enos@yahoo.com" },
				{ id: 2, name: "Kasey", email: "kaseykoelpin@hotmail.com" },
			]}
			rowKey={(person) => person.id.toString()}
			columns={[
				{ title: "Name", render: "name" },
				{ title: "Email", render: "email" },
			]}
		/>
	);
};

_Story.desc(Basic)(`
To display your data with the Table component, first provide the data via
the \`rows\` prop, then describe how to render them with the \`columns\`
prop, and how to get their keys with the \`rowKey\` prop. See the argument
table above for the details of these props.

Note that Table does not have any border or shadow built-in. For that, you can
wrap it inside a \`Pane\` component.
`);

export const Fixed = () => (
	<div>
		<style
			dangerouslySetInnerHTML={{
				__html: `
.fixed-table {
	height: 200px; /* limit the height of the table */
	overflow: auto; /* show scrollbar(s) */
}
.fixed-table table {
	/* set big table width to trigger horizontal overflow. In practice, this
	usually happen by defining width for each columns. */
	min-width: 2000px;
}
.name-column {
	width: 160px;
}
				`,
			}}
		/>
		<div className="fixed-table">
			<Table<Robot>
				rows={ROBOTS}
				rowKey={(robot) => robot.id.toString()}
				columns={[
					{ title: "MAC", className: "name-column", render: "MAC" },
					{ title: "Id", render: "id" },
					{ title: "Last seen", render: "lastSeen" },
					{ title: "Email", render: "email" },
				]}
			/>
		</div>
	</div>
);

_Story.desc(Fixed)(`
Out of the box, the Table component fills 100% of horizontal space (i.e. 
\`width: 100%\`) and takes as much vertical space as necessary (i.e.
\`height: fit-content\`).

If there is not enough horizontal space, usually when you define the width for
columns or the whole table, the table will have horizontal scrollbar, with the
first column is always visible (fixed/stickied). Likewise, when the height of
the table is limited, it will have vertical scrollbar, with the header is kept
fixed at top.
`);
