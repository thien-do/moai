import { TableProps, TableState } from "../table";
import { TableHeadCell } from "./cell";

interface Props<R> {
	tableProps: TableProps<R>;
	tableState: TableState;
}

export const TableHead = <R,>(props: Props<R>): JSX.Element => (
	<thead>
		<tr>
			{props.tableProps.columns.map((column, index) => (
				<TableHeadCell
					key={index}
					column={column}
					index={index}
					tableProps={props.tableProps}
					tableState={props.tableState}
				/>
			))}
		</tr>
	</thead>
);
