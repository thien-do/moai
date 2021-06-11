import { background } from "../../background/background";
import { border } from "../../border/border";
import { text } from "../../text/text";
import { TableColumn, TableProps, TableState } from "../table";
import sFixed from "../fixed/fixed.module.css";

const thCls = [border.weak, background.weak, text.strong].join(" ");

interface Props<R> {
	tableProps: TableProps<R>;
	tableState: TableState;
	column: TableColumn<R>;
	index: number;
}

export const TableHeadCell = <R,>(props: Props<R>): JSX.Element => {
	const columnMeta = props.tableState.columnMetaMap.get(props.index);
	return (
		<th
			className={[
				thCls,
				props.column.className,
				props.tableProps.fixed?.header ? sFixed.top : "",
				columnMeta?.className ?? "",
			].join(" ")}
			style={columnMeta?.style}
			children={props.column.title}
		/>
	);
};
