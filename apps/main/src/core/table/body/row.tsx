import { background } from "../../background/background";
import { isTableRowSelected } from "../actions/selectable/state";
import { TableProps, TableState } from "../table";
import { TableBodyCell } from "./cell";
import { TableBodyExpandedCell } from "./expanded";

interface Props<R> {
  tableProps: TableProps<R>;
  tableState: TableState;
  row: R;
  rowIndex: number;
}

// All cells in a row have the same color so we calculate it here. However, we
// need to apply to "td", not "tr", so that sticky cells can hide other cells
const getBackground = <R,>(props: Props<R>, rowKey: string): string => {
  const { tableState, tableProps } = props;
  const dimmed =
    tableState.expandable.expanded.has(rowKey) ||
    isTableRowSelected(tableProps.selectable?.selected, rowKey);
  return dimmed ? background.weak : background.strong;
};

export const TableRow = <R,>(props: Props<R>): JSX.Element[] => {
  const { tableProps, tableState, row, rowIndex } = props;
  const rowKey = tableProps.rowKey(row, rowIndex);
  const background = getBackground(props, rowKey);
  const className = props.tableProps.rowClassName?.(row, rowIndex);

  // Main row
  const mainTr = (
    <tr key={rowKey} className={className}>
      {tableProps.columns.map((column, columnIndex) => (
        <TableBodyCell
          key={columnIndex}
          background={background}
          column={column}
          columnIndex={columnIndex}
          row={row}
          rowIndex={rowIndex}
          rowKey={rowKey}
          tableState={tableState}
        />
      ))}
    </tr>
  );
  if (tableState.expandable.expanded.has(rowKey) === false) return [mainTr];

  // Expanded row
  const expandedTr = (
    <tr key={`${rowKey}-expand`}>
      <TableBodyExpandedCell tableProps={tableProps} row={row} />
    </tr>
  );
  return [mainTr, expandedTr];
};
