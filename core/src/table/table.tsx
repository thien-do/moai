import { ReactNode, useState } from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { text } from "../text/text";
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
	 * Rows of the Table. The type of Row is [generic][1], which is usually the
	 * interface of a model.
	 * [1]: https://www.typescriptlang.org/docs/handbook/generics.html
	 */
	rows: R[];
	/**
	 * A function that returns the [key][1] of a Row.
	 * [1]: https://reactjs.org/docs/lists-and-keys.html#keys
	 */
	rowKey: (row: R) => string;
	/**
	 * Columns of the Table. See the "TableColumn" tab for detail.
	 */
	columns: TableColumn<R>[];
	/**
	 * A [render prop][1] that enables row expanding. Setting this prop will
	 * add a button to each row that allows users to expand or collapse it.
	 *
	 * This should return the React element to be rendered when the given row
	 * is expanded.
	 *
	 * [1]: https://reactjs.org/docs/render-props.html
	 */
	expandRowRender?: (row: R) => ReactNode;
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
	props.rows.forEach((row) => {
		const elements = getTableRow({ row, state, table: props });
		body.push(...elements);
	});
	return (
		<table className={[s.container, background.strong].join(" ")}>
			<thead>
				<tr>{props.columns.map(renderTh)}</tr>
			</thead>
			<tbody children={body} />
		</table>
	);
};
