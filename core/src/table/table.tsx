import { ReactNode } from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { text } from "../text/text";
import s from "./table.module.css";

export interface TableColumn<R> {
	title: ReactNode;
	className?: string;
	render:
		| keyof R // Accessor
		| ((row: R) => ReactNode); // Render function;
}

interface Props<R> {
	columns: TableColumn<R>[];
	rows: R[];
	rowKey: (row: R) => string;
}

const thCls = [border.weak, background.weak, text.strong].join(" ");

const renderTh = <R,>(column: TableColumn<R>, index: number): JSX.Element => (
	<th key={index} className={[thCls, column.className].join(" ")}>
		{column.title}
	</th>
);

const tdCls = [border.weak, background.strong].join(" ");

const renderTd = <R,>(row: R) => (
	column: TableColumn<R>,
	index: number
): JSX.Element => (
	<td
		key={index}
		className={[tdCls, column.className].join(" ")}
		children={
			typeof column.render === "function"
				? column.render(row) // Render function
				: row[column.render] // Accessor
		}
	/>
);

export const Table = <R,>(props: Props<R>) => (
	<table className={[s.container, background.strong].join(" ")}>
		<thead>
			<tr>{props.columns.map(renderTh)}</tr>
		</thead>
		<tbody>
			{props.rows.map((row) => (
				<tr key={props.rowKey(row)}>
					{props.columns.map(renderTd(row))}
				</tr>
			))}
		</tbody>
	</table>
);
