import { TableColumn } from "../../../core/src";
import { TableExpandableProps } from "../../../core/src";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the TableColumn interface.
 */
export const TableColumnComponent = <R,>(
  props: TableColumn<R>,
): JSX.Element => <div>{props.title}</div>;

export const TableExpandableComponent = <R,>(
  props: TableExpandableProps<R>,
): JSX.Element => <div>{props.render.length}</div>;
