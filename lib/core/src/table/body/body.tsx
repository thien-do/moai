import { TableProps, TableState } from "../table";
import { TableRow } from "./row";

interface Props<R> {
	tableProps: TableProps<R>;
	tableState: TableState;
}

export const TableBody = <R,>(props: Props<R>): JSX.Element => {
	const { tableProps, tableState } = props;

	const body: JSX.Element[] = [];
	tableProps.rows.forEach((row, rowIndex) => {
		const rows = TableRow({ row, rowIndex, tableState, tableProps });
		body.push(...rows);
	});

	return <tbody children={body} />;
};
