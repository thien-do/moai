import { ReactNode, useState } from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { text } from "../text/text";
import fixed from "./fixed.module.css";
import { getTableRow } from "./row/row";
import s from "./table.module.css";

export interface TableColumn<R> {
	/**
	 * Title of the column. Note that this is not just "string" but "ReactNode".
	 */
	title: ReactNode;
	/**
	 * Classes to add to this column's "td" and "th". Use this to control the
	 * style, especially the width, of your columns.
	 */
	className?: string;
	/**
	 * The render of this column's cells ("td"). This can be a function that
	 * returns a ReactNode to display for a Row (a.k.a [render prop][1]), or
	 * the key of a property of the Row model to display (a.k.a [accessor][2]).
	 *
	 * [1]: https://reactjs.org/docs/render-props.html
	 * [2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
	 */
	render:
		| keyof R // Accessor
		| ((row: R) => ReactNode); // Render function;
}

export interface TableProps<R> {
	/**
	 * An array of [generic][1] items to render as rows of the table (e.g. a
	 * list of `Book`).
	 *
	 * [1]: https://www.typescriptlang.org/docs/handbook/generics.html
	 */
	rows: R[];
	/**
	 * A function to return the [React's key][1] of an item (e.g. a book's
	 * ISBN).
	 *
	 * [1]: https://reactjs.org/docs/lists-and-keys.html#keys
	 */
	rowKey: (row: R, index: number) => string;
	/**
	 * An array of `TableColumn`s which describe how to render the table's
	 * `rows` (e.g. a book's title, author). See the "TableColumn" tab for
	 * detail.
	 */
	columns: TableColumn<R>[];
	/**
	 * A [render prop][1] that, when set, allows users to expand or collapse
	 * the table's rows. This should return the React element to be rendered
	 * when a row is expanded.
	 *
	 * [1]: https://reactjs.org/docs/render-props.html
	 */
	expandRowRender?: (row: R) => ReactNode;
	/**
	 * Whether to fix the table's header and first column position while the
	 * rest is scrolled. These positions are relative to the table's nearest
	 * scrolling ancestor (i.e. one with "auto" or "scroll" overflow).
	 */
	fixed?: boolean;
	/**
	 *	 when you want to make the table takes 100% of its container width
	 */
	fill?: boolean;
}

const thCls = [border.weak, background.weak, text.strong].join(" ");

const renderTh = <R,>(column: TableColumn<R>, index: number): JSX.Element => (
	<th key={index} className={[thCls, column.className].join(" ")}>
		{column.title}
	</th>
);

export interface TableState {
	expanded: Set<string>;
	setExpanded: (key: string, value: boolean) => void;
}

export const Table = <R,>(props: TableProps<R>) => {
	const [expanded, _setExpanded] = useState(() => new Set<string>());
	const setExpanded: TableState["setExpanded"] = (key, value) => {
		_setExpanded((prev) => {
			const next = new Set(prev);
			value ? next.add(key) : next.delete(key);
			return next;
		});
	};
	const state = { expanded, setExpanded };

	const body: JSX.Element[] = [];
	props.rows.forEach((row, index) => {
		const elements = getTableRow({ row, index, state, table: props });
		body.push(...elements);
	});

	return (
		<table
			className={[
				s.container,
				props.fixed ? fixed.container : "",
				props.fill ? s.containerFill : "",
				background.strong,
			].join(" ")}
		>
			<thead>
				<tr>{props.columns.map(renderTh)}</tr>
			</thead>
			<tbody children={body} />
		</table>
	);
};
