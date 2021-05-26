import { Meta } from "@storybook/react";
import { useState } from "react";
import { DivPx, Select, SelectOption, Table, TableSize } from "../../core/src";
import { Robot, ROBOTS } from "../../gallery/src/table/robots";
import { GalleryTable } from "../../gallery/src/table/table";
import { TableColumnComponent } from "./table-fake";
import { Utils } from "./utils";

export default {
	title: "Components/Table",
	component: Table,
	subcomponents: { TableColumn: TableColumnComponent },
} as Meta;

export const Primary = (): JSX.Element => (
	// This table is quite complicated. Please see the "Basic" section for
	// simpler code to get started with Table.
	<GalleryTable />
);

Utils.fixPrimary(Primary);

export const Basic = (): JSX.Element => {
	// The definition of interface here is only for explanation purpose. In
	// practice the interface/type/model should already be defined outside of
	// your component.
	interface Book {
		isbn: number;
		title: string;
		author: string;
	}

	return (
		<Table<Book>
			rows={[
				{
					isbn: 9780679783268,
					title: "Pride and Prejudic",
					author: "Jane Austen",
				},
				{
					isbn: 9780743273565,
					title: "The Great Gatsby",
					author: "Francis Scott Fitzgerald",
				},
				{
					isbn: 9780684830490,
					title: "The Old Man and the Sea",
					author: "Ernest Hemingway",
				},
			]}
			rowKey={(book) => book.isbn.toString()}
			columns={[
				{ title: "Title", render: "title" },
				{ title: "Author", render: "author" },
			]}
		/>
	);
};

Utils.desc(Basic)(`
Every table requires 3 props: \`rows\`, \`columns\` and \`rowKey\`. See the
argument table above for the detail of these props.

The CSS of Moai's Table is kept [as little as possible][1] to preserve the
native behaviour of the \`table\` tag. For example, the size of a table depends
on its content, while text breaks ["normally"][2]. It also doesn't have any
outer border or shadow. For that, use the \`Pane\` component.

[1]: https://github.com/moaijs/moai/blob/main/core/src/table/table.module.css
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
`);

export const Fill = (): JSX.Element => {
	return (
		<Table<Robot>
			rows={ROBOTS.slice(0, 3)}
			rowKey={(robot) => robot.id.toString()}
			columns={[
				{ title: "Bot", render: "MAC" },
				{ title: "Id", render: "id" },
			]}
			fill
		/>
	);
};

Utils.desc(Fill)(`
If the \`fill\` prop is set to \`true\`, the table's width will full \`100%\` and depend on it's container.
`);

export const Fixed = (): JSX.Element => (
	<div>
		{/* In practice these CSS are usually defined via better methods, 
		such as CSS Modules, Tailwind or just external files. */}
		<style
			dangerouslySetInnerHTML={{
				__html: `
.fixed-table {
	height: 200px; /* limit the height of the table */
	overflow: auto; /* show scrollbar(s) */
	white-space: nowrap;
}
				`,
			}}
		/>
		<div className="fixed-table">
			<Table<Robot>
				rows={ROBOTS}
				rowKey={(robot) => robot.id.toString()}
				columns={[
					{ title: "Bot", render: "MAC" },
					{ title: "Id", render: "id" },
					{ title: "Seen", render: "lastSeen" },
					{ title: "Email", render: "email" },
					{ title: "Avatar", render: "avatar" },
				]}
				fixed={{ firstColumn: true, lastColumn: true }}
			/>
		</div>
	</div>
);

Utils.desc(Fixed)(`
The \`fixed\` prop is an object, which indicates if the table's header
and/or first column and/or last column would stay fixed while the user
scrolls the rest of the table. Note that the fixed position here is
relative to the table's nearets scrolling ancestor. In practice,
this means the container of the table should have:

- "auto" or "scroll" overflow, and
- a defined height, either fixed (e.g. "400px") or relative (e.g. "100%")

Since Moai's Table doesn't alter the line breaking CSS, you may also need
\`white-space: nowrap\` or defining width for your columns to avoid the default
line break behaviour.
`);

export const Expandable = (): JSX.Element => (
	<Table<Robot>
		rows={ROBOTS.slice(0, 3)}
		rowKey={(robot) => robot.id.toString()}
		columns={[
			{ title: "Bot", className: "name", render: "MAC" },
			{ title: "Id", render: "id" },
		]}
		expandRowRender={(robot) => robot.email}
	/>
);

Utils.desc(Expandable)(`
The users can expand a table's rows if the \`expandRowRender\` is prop provided.
It should be a function that returns what to be rendered when the user expands
a row. The returned result is rendered below the row, spanning all columns
(i.e. a \`td\` with \`colSpan={columns.length}\`).
`);

export const Size = (): JSX.Element => {
	const [size, setSize] = useState<TableSize>(Table.sizes.small);
	const options: SelectOption<TableSize>[] = [
		{ id: "small", label: "Small", value: Table.sizes.small },
		{ id: "medium", label: "Medium", value: Table.sizes.medium },
		{ id: "large", label: "Large", value: Table.sizes.large },
	];
	return (
		<div>
			<Select<TableSize>
				value={size}
				setValue={setSize}
				options={options}
			/>
			<DivPx size={16} />
			<Table<Robot>
				rows={ROBOTS.slice(0, 3)}
				rowKey={(robot) => robot.id.toString()}
				columns={[
					{ title: "Bot", className: "name", render: "MAC" },
					{ title: "Id", render: "id" },
				]}
				size={size}
			/>
		</div>
	);
};

Utils.desc(Size)(`
To make a table looks more compact or loose, use the \`size\` prop. It controls
the vertical padding of a table's cells. Choose a value from the \`Table.sizes\`
list.
`);
