import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pane, Table, TableColumn } from "../../core";
import { Robot, ROBOTS } from "../../../gallery/src";
import { GalleryTable } from "../../../gallery/src";
import { Book, someBooks } from "../utils/example";
import { Utils } from "../utils/utils";
import { TableColumnComponent, TableExpandableComponent } from "./table-fake";

const meta: Meta = {
  title: "Components/Table",
  component: Table,
  subcomponents: {
    TableColumn: TableColumnComponent,
    TableExpandable: TableExpandableComponent,
  },
  argTypes: {
    fill: Utils.arg("boolean"),
    size: Utils.arg(Table.sizes),
    fixed: Utils.arg(null),
    rows: Utils.arg(null),
    rowKey: Utils.arg(null),
    columns: Utils.arg(null),
    expandable: Utils.arg(null),
  },
};

Utils.page.component(meta, {
  primary: "default",
  shots: [<GalleryTable key="1" />],
});

export default meta;

const bookColumns: TableColumn<Book>[] = [
  { title: "Title", render: "title" },
  { title: "Author", render: "author" },
];

const bookKey = (book: Book): string => book.isbn.toString();

export const Primary: StoryObj<typeof Table> = {
  render: (props) => (
    <Table<Book>
      rows={someBooks}
      rowKey={bookKey}
      columns={bookColumns}
      fill={props.fill}
      size={props.size}
    />
  )
};

/**
 * The Table component is based on data.
 * This means you don't build tables by manually assembling different parts (`td`, `th`) like in HTML.
 * Instead, you provide the data (rows) and describe how to render them (columns).
 * Specifically, a table requires 3 props:
 * 
 * - `rows`: an array of items to be rendered as rows (e.g. `Book[]`})
 * - `rowKey`: a function that returns the [key][2] for a given row (e.g. the `isbn` of a `Book`})
 * - `columns`: an array of `TableColumn` to describe how to render your `rows`.
 *   Each `TableColumn` requires:
 *   - `title`: the title of the column
 *   - `render`: what to render for each row. Usually it's the name of a property (e.g. the `title` of a `Book`}).
 * 
 * Note that Table is a [generic][1] component.
 * The type of `rows`, `rowKey` and `TableColumn.render` should match each other.
 * 
 * [1]: https://www.typescriptlang.org/docs/handbook/2/generics.html
 * [2]: https://reactjs.org/docs/lists-and-keys.html
 */
export const Basic: StoryObj = {
  render: () => {
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
  }
};

/**
 * The Table component intentionally has [minimal][1] CSS 
 * to preserve the behaviour of the [HTML `table`][2] element.
 * For example, the size of tables depend on their content, 
 * with their text breaks ["normally"][3].
 * They also doesn't have any outer border or shadow, 
 * which can be provided by the [Pane][4] component:
 * 
 * [1]: https://github.com/moaijs/moai/blob/main/core/src/table/table.module.css
 * [2]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 * [3]: https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
 * [4]: /docs/components-pane--primary
 */
export const Style: StoryObj = {
  render: () => (
    <Pane noPadding contentWidth>
      <Table<Book> rows={someBooks} rowKey={bookKey} columns={bookColumns} />
    </Pane>
  )
};

/**
 * Similar to the HTML `table` element, 
 * the widths of Moai's tables depend on their content.
 * To make them fill their container (i.e. like `width: 100%`), 
 * set the `fill` prop to `true`.
 * This is also how you should control the width of tables 
 * (via the width of their containers).
 */
export const Fill: StoryObj = {
  render: () => (
    <Table<Book> fill rows={someBooks} rowKey={bookKey} columns={bookColumns} />
  )
};

/**
 * The header, first column, and last column of a table 
 * can be set to stay fixed while users scroll the rest of the table.
 * This [provides the context][1] for users to know what they are looking at.
 * It's especially useful in mobile devices, 
 * where the tables are usually much bigger than the users' screens.
 * 
 * The `fixed` prop expects an object that indicates which parts to be fixed:
 * 
 * ```ts
 * interface TableFixed {
 *   firstColumn?: boolean;
 *   lastColumn?: boolean;
 *   header?: boolean;
 * }
 * ```
 * 
 * Note that the "fixed" positioning is relative to a table's nearest scrollable ancestor.
 * In other words, this means the container of a table should have:
 * 
 * - `auto` or `scroll` [overflow][2], and
 * - an [extrinsic][3] height, either fixed (e.g. "400px") or relative (e.g. "100%")
 * 
 * Since Moai's tables don't have any line-breaking CSS, 
 * you may also need `white-space: nowrap` or defining widths for your columns 
 * to avoid the [default line-break behaviour][4].
 * 
 * [1]: https://www.nngroup.com/articles/mobile-tables/
 * [2]: https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
 * [3]: https://www.w3.org/TR/css-sizing-3/#extrinsic
 * [4]: https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
 */
export const Fixed: StoryObj = {
  render: () => {
    // These CSS are defined inline here for demo purpose. In practice, they
    // are defined via many better methods, such as CSS Modules, Tailwind or
    // just using external files.
    const css = `
    .fixed-table {
      height: 300px; /* limit the height of the table */
      overflow: auto; /* show scrollbar(s) */
      white-space: nowrap;
    }`;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div className="fixed-table">
          <Table<Robot>
            fixed={{
              firstColumn: true,
              header: true,
              lastColumn: true,
            }}
            rows={ROBOTS}
            rowKey={(robot) => robot.id.toString()}
            columns={[
              { title: "Bot", render: "MAC" },
              { title: "Id", render: "id" },
              { title: "Seen", render: "lastSeen" },
              { title: "Email", render: "email" },
              { title: "Avatar", render: "avatar" },
              { title: "Bot", render: "MAC" },
            ]}
          />
        </div>
      </div>
    );
  }
};

/**
 * If the `expandable` prop is defined, 
 * each row will have a button for users to expand it.
 * It only requires a `render` function 
 * that returns what to be rendered when the given row is expanded.
 * 
 * ```ts
 * interface TableExpandable {
 *   render: (row: R) => ReactNode;
 *   initialExpanded?: Set<string>;
 *   expanded?: Set<string>;
 *   setExpanded?: (set: Set<string>) => void;
 * }
 * ```
 * 
 * Other properties are optional and help you set the initial expanded rows, 
 * or even control the state yourself.
 * They all work on a [Set][1] of [row keys][2].
 * See the [TableExpandable][3] table at the end of the page for detail of each prop.
 * 
 * [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * [2]: #basic
 * [3]: #props
 */
export const Expandable: StoryObj = {
  render: () => (
    <Table<Book>
      rows={someBooks}
      rowKey={bookKey}
      columns={bookColumns}
      expandable={{ render: (row) => row.isbn }}
    />
  )
};

/**
 * The `selectable` prop lets users select rows in a table.
 * It expects an object that control the selection 
 * (a `selected` state and a `setSelected` callback to set the state).
 * It supports both single and multiple selection, 
 * based on the type of the `selected` state:
 * 
 * - `selected: string` if the users can only select one row
 * - `selected: Set<key>` if the users can select several rows
 */
export const SelectableMultiple: StoryObj = {
  name: "Selectable (Multiple)",
  render: () => {
    // Multiple selection
    const [selected, setSelected] = useState<Set<string>>(new Set());
    return (
      <Table<Book>
        rows={someBooks}
        rowKey={bookKey}
        columns={bookColumns}
        selectable={{ selected, setSelected }}
      />
    );
  }
};

/**
 * As mentioned above, if the `selected` state is a string, 
 * then the users can only select a single row.
 * In this case, Moai will render radio buttons instead of checkboxes, 
 * so the `selectable` prop also require a `radioGroupName` as the [name][1] for these radio buttons.
 * 
 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group
 */
export const SelectableSingle: StoryObj = {
  name: "Selectable (Single)",
  render: () => {
    const [selected, setSelected] = useState<string>("");
    const radioGroupName = "single-selectable-demo";
    return (
      <Table<Book>
        rows={someBooks}
        rowKey={bookKey}
        columns={bookColumns}
        selectable={{ selected, setSelected, radioGroupName }}
      />
    );
  }
};

/**
 * To make Tables look more compact or loose, use the `size` prop.
 * It controls the vertical padding of a Table's cells.
 * There are defined at `Table.sizes`.
 * You can try different sizes using the [All Props table][1] below.
 * 
 * [1]: #props
 */
export const Size: StoryObj = {
  render: () => (
    <Table<Book>
      size={Table.sizes.large}
      rows={someBooks}
      rowKey={bookKey}
      columns={bookColumns}
    />
  )
};

/**
 * The `rowClassName` lets you set a custom class for a table's rows.
 * It expects a function that receives the current row and should return a class for it.
 */
export const RowClassName: StoryObj = {
  render: () => {
    const css = `
    /* Moai applies background color on "td", not "tr" */
    .red-row td,
    /* Optionally override the hover color */
    .red-row:not(#x):hover td {
      background: red;
    }`;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <Table<Book>
          rows={someBooks}
          rowKey={bookKey}
          columns={bookColumns}
          rowClassName={(_row, index) => (index === 1 ? "red-row" : "")}
        />
      </div>
    );
  }
};

export const AllInOne: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    return (
      <div className="fixed-table">
        <Table<Robot>
          fixed={{ firstColumn: true, header: true, lastColumn: true }}
          expandable={{ render: (row) => row.note }}
          selectable={{ selected, setSelected }}
          rows={ROBOTS}
          rowKey={(robot) => robot.id.toString()}
          columns={[
            { title: "Bot", render: "MAC" },
            { title: "Id", render: "id" },
            { title: "Seen", render: "lastSeen" },
            { title: "Email", render: "email" },
            { title: "Avatar", render: "avatar" },
            { title: "Bot", render: "MAC" },
          ]}
        />
      </div>
    );
  }
};
