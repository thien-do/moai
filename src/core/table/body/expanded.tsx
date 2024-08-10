import { background } from "../../background/background";
import { border } from "../../border/border";
import { TableProps } from "../table";

interface Props<R> {
  tableProps: TableProps<R>;
  row: R;
}

const ERRORS = {
  EXPAND_RENDER: "Row is expanded but expandable.render is not defined.",
};

export const TableBodyExpandedCell = <R,>(props: Props<R>): JSX.Element => {
  const { tableProps, row } = props;
  const render = tableProps.expandable?.render;
  if (render === undefined) throw Error(ERRORS.EXPAND_RENDER);
  return (
    <td
      className={[background.weak, border.weak].join(" ")}
      colSpan={tableProps.columns.length}
      children={render(row)}
    />
  );
};
