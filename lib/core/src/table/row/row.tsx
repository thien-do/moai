import { background } from "../../background/background";
import { border } from "../../border/border";
import { TableCell } from "../cell/cell";
import { TableColumn, TableProps, TableState } from "../table";

const ERRORS = {
	EXPAND_RENDER: "Row is expanded but expandRowRender is not defined.",
};

interface Props<R> {
	table: TableProps<R>;
	state: TableState;
	row: R;
	index: number;
}

const renderTd = <R,>(
	table: TableProps<R>,
	state: TableState,
	row: R,
	rowIndex: number
) => (column: TableColumn<R>, index: number): JSX.Element => (
	<TableCell
		{...{ row, rowIndex, state, column, index, table }}
		key={index}
	/>
);

const FullCell = <R,>(props: Props<R>): JSX.Element => {
	const { table, row } = props;
	const render = table.expandRowRender;
	if (render === undefined) throw Error(ERRORS.EXPAND_RENDER);
	return (
		<td
			className={[background.weak, border.weak].join(" ")}
			colSpan={table.columns.length}
			children={render(row)}
		/>
	);
};

export const getTableRow = <R,>(props: Props<R>): JSX.Element[] => {
	const { table, state, row, index } = props;
	const key = table.rowKey(row, index);

	const cells = table.columns.map(renderTd(table, state, row, index));
	const mainTr = <tr key={key} children={cells} />;
	if (state.expanded.has(key) === false) return [mainTr];

	// Expanded
	const cell = <FullCell {...props} />;
	const expandedTr = <tr key={`${key}-expand`} children={cell} />;
	return [mainTr, expandedTr];
};
