import { Meta } from "@storybook/react";
import { _Story } from "../../_story";
import { DocsPage } from "@storybook/addon-docs/blocks";
import { Table } from "./table";
import { TableColumn } from "./fake-table-column";
import { TableGallery } from "../../gallery/table/table";
import { Robot, ROBOTS } from "../../gallery/table/robots";
import { Select } from "../select/select";

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
		{/* In practice these CSS are usually defined via better methods, 
		such as CSS Modules, Tailwind or just external files. */}
		<style
			dangerouslySetInnerHTML={{
				__html: `
.fixed-table {
	height: 200px; /* limit the height of the table */
	overflow: auto; /* show scrollbar(s) */
}
.fixed-table .name {
	width: 160px;
}
/* For demo purpose, we intentionally define big width for these columns so
that the table's width exceeds the width of its container (.fixed-table) */
.fixed-table .id,
.fixed-table .seen,
.fixed-table .email {
	width: 500px;
}
				`,
			}}
		/>
		<div className="fixed-table">
			<Table<Robot>
				rows={ROBOTS}
				rowKey={(robot) => robot.id.toString()}
				columns={[
					{ title: "Bot", className: "name", render: "MAC" },
					{ title: "Id", className: "id", render: "id" },
					{ title: "Seen", className: "seen", render: "lastSeen" },
					{ title: "Email", className: "email", render: "email" },
				]}
			/>
		</div>
	</div>
);

_Story.desc(Fixed)(`
Out of the box, the Table component takes 100% of the horizontal space (i.e. 
\`width: 100%\`) and as much vertical space as necessary (i.e.
\`height: fit-content\`).

If the table's width is bigger than its container's width (which is usually
when its columns' \`(min-)width\` are defined), there will be a horizontal
scrollbar. When the user scrolls, the first column is kept fixed on the left
sided. Likewise, when the height of the table is limited, there will be a
vertical scrollbar, with the table's header is kept fixed at top.

Note that technically the table's container (\`.fixed-table\` in this example)
is the table's "viewport" and it is where scrollbars are defined.
`);

export const Expandable = () => (
	<Table<Robot>
		rows={ROBOTS.slice(0, 3)}
		rowKey={(robot) => robot.id.toString()}
		columns={[
			{ title: "Bot", className: "name", render: "MAC" },
			{ title: "Id", render: "id" },
		]}
		expandRowRender={(robot) => robot.note}
	/>
);

_Story.desc(Expandable)(`
The users can expand a table's rows if the \`expandRowRender\` is prop provided.
It should be a function that returns what to be rendered when the user expands
a row. The returned result is rendered below the row, spanning all columns (i.e.
\`colSpan={columns.length}\`).
`)
