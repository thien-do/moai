import { background } from "../../background/background";
import { border } from "../../border/border";
import { TableColumn, TableState } from "../table";

export const tableTdCls = [border.weak, background.strong].join(" ");

interface Props<R> {
  tableState: TableState;
  row: R;
  rowIndex: number;
  rowKey: string;
  column: TableColumn<R>;
  columnIndex: number;
  background: string;
}

export const TableBodyCell = <R,>(props: Props<R>): JSX.Element => {
  const { column, row } = props;
  const children =
    typeof column.render === "function"
      ? column.render(row, props.rowIndex, props.rowKey) // Render function
      : row[column.render]; // Accessor
  const columnMeta = props.tableState.columnMetaMap.get(props.columnIndex);
  return (
    <td
      className={[
        border.weak,
        props.background,
        columnMeta?.className ?? "",
        column.className,
      ].join(" ")}
      style={columnMeta?.style}
      children={children}
    />
  );
};
