import { Meta } from "@storybook/react";
import { Pane, Table, TableColumn } from "../../../core/src";
import { Robot, ROBOTS } from "../../../gallery/src/table/robots";
import { GalleryTable } from "../../../gallery/src/table/table";
import { TableColumnComponent } from "./table-fake";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Components/Table",
	component: Table,
	subcomponents: { TableColumn: TableColumnComponent },
	argTypes: {
		fill: Utils.arg("boolean"),
		size: Utils.arg(Table.sizes),
		rows: Utils.arg(null),
		rowKey: Utils.arg(null),
		columns: Utils.arg(null),
		expandRowRender: Utils.arg(null),
		fixed: Utils.arg(null),
	},
};

Utils.page.component(meta, {
	sticky: false,
	shots: [<GalleryTable key="1" />],
});

export default meta;

const exampleBookColumns: TableColumn<ExampleBook>[] = [
	{ title: "Title", render: "title" },
	{ title: "Author", render: "author" },
];

const exampleBookKey = (book: ExampleBook): string => book.isbn.toString();

interface Props {
	size?: string;
	fill?: boolean;
}

export const Primary = (props: Props): JSX.Element => (
	<Table<ExampleBook>
		rows={exampleBooks}
		rowKey={exampleBookKey}
		columns={exampleBookColumns}
		fill={props.fill}
		// eslint-disable-next-line
		size={(Table.sizes as any)[props.size!]}
	/>
);

export const Basic = (): JSX.Element => {
	// The definition of interface here is only for explanation purpose. In
	// practice, the interface of your models should be defined outside of
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

Utils.story(Basic, { desc: `
The Table component is based on data. This means you don't build Tables by
manually assembling different parts (\`td\`, \`th\`}) like in HTML. Instead, you
provide the data (rows) and describe how to render them (columns).
Specifically, a Table requires 3 props:

- \`rows\`: an array of items to be rendered as rows (e.g. \`Book[]\`})
- \`rowKey\`: a function that returns the [key][2] for a given row (e.g. the
\`isbn\` of a \`Book\`})
- \`columns\`: an array of \`TableColumn\` to describe how to render your
\`rows\`. Each \`TableColumn\` requires:
	- \`title\`: the title of the column
	- \`render\`: what to render for each row. Usually it's the name of a property
	(e.g. the \`title\` of a \`Book\`}).

Note that Table is a [generic][1] component. The type of \`rows\`, \`rowKey\`
and \`TableColumn.render\` should match each other.

[1]: https://www.typescriptlang.org/docs/handbook/2/generics.html
[2]: https://reactjs.org/docs/lists-and-keys.html
`});

export const Style = (): JSX.Element => (
	<Pane noPadding contentWidth>
		<Table<ExampleBook>
			rows={exampleBooks}
			rowKey={exampleBookKey}
			columns={exampleBookColumns}
		/>
	</Pane>
);

Utils.story(Style, { desc: `
The CSS of Moai's Table is intentionally [minimal][1] to preserve the behaviour
of the [HTML \`table\`][2] element. For example, the size of Tables depend on
their content, with their text breaks ["normally"][3]. They also doesn't have
any outer border or shadow, which can be provided by the [Pane][4] component:

[1]: https://github.com/moaijs/moai/blob/main/core/src/table/table.module.css
[2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
[4]: /docs/components-pane--primary
`});

export const Fill = (): JSX.Element => (
	<Table<ExampleBook>
		fill
		rows={exampleBooks}
		rowKey={exampleBookKey}
		columns={exampleBookColumns}
	/>
);

Utils.story(Fill, { desc: `
Similar to the HTML \`table\` element, the widths of Moai's Tables depend on
their content. To make them fill their container (i.e. like \`width: 100%\`}),
set the \`fill\` prop to \`true\`. This is also how you should control the
width of Tables (via the width of their containers).
`});

export const Fixed = (): JSX.Element => {
	// These CSS are defined inline here for demo purpose. In practice, they
	// are defined via many better methods, such as CSS Modules, Tailwind or
	// just using external files.
	const css = `
.fixed-table {
	height: 200px; /* limit the height of the table */
	overflow: auto; /* show scrollbar(s) */
	white-space: nowrap;
}`;
	return (
		<div>
			<style dangerouslySetInnerHTML={{ __html: css }} />
			<div className="fixed-table">
				<Table<Robot>
					fixed={{ firstColumn: true, header: true }}
					rows={ROBOTS}
					rowKey={(robot) => robot.id.toString()}
					columns={[
						{ title: "Bot", render: "MAC" },
						{ title: "Id", render: "id" },
						{ title: "Seen", render: "lastSeen" },
						{ title: "Email", render: "email" },
						{ title: "Avatar", render: "avatar" },
					]}
				/>
			</div>
		</div>
	);
};

Utils.story(Fixed, { desc: `
The header, first column, and last column of a Table can be set to stay fixed
while users scroll the rest of the Table. This [provides the context][1] for
users to know what they are looking at. It's especially useful in mobile
devices, where the Tables are usually much bigger than the users' screens.

The \`fixed\` prop expects an object that indicates which parts to be fixed:

~~~ts
interface TableFixed {
	firstColumn?: boolean;
	lastColumn?: boolean;
	header?: boolean;
}
~~~

Note that the "fixed" positioning is relative to a Table's nearest scrollable
ancestor. In other words, this means the container of a Table should have:

- \`auto\` or \`scroll\` [overflow][2], and
- an [extrinsic][3] height, either fixed (e.g. "400px") or relative (e.g. "100%")

Since Moai's Tables don't have any line-breaking CSS, you may also need
\`white-space: nowrap\` or defining widths for your columns to avoid the
[default line-break behaviour][4].

[1]: https://www.nngroup.com/articles/mobile-tables/
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
[3]: https://www.w3.org/TR/css-sizing-3/#extrinsic
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
`});

export const Expandable = (): JSX.Element => (
	<Table<ExampleBook>
		rows={exampleBooks}
		rowKey={exampleBookKey}
		columns={exampleBookColumns}
		expandRowRender={(row) => row.isbn}
	/>
);

Utils.story(Expandable, { desc: `
Users can expand a Table's rows if the \`expandRowRender\` prop is provided.
It expects a function that returns what to be rendered in the expanded area of
a row. The expanded area is below a row, spanning all columns (i.e. similar to
a \`td\` with \`colSpan={columns.length}\`}).
`});

export const Size = (): JSX.Element => (
	<Table<ExampleBook>
		size={Table.sizes.large}
		rows={exampleBooks}
		rowKey={exampleBookKey}
		columns={exampleBookColumns}
	/>
);

Utils.story(Size, { desc: `
To make Tables look more compact or loose, use the \`size\` prop. It controls
the vertical padding of a Table's cells. There are defined at \`Table.sizes\`.
You can try different sizes using the "All Props" table at the end of this page.
`});
