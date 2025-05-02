import { ReactElement } from "react";
import { TableColumn } from "../../core";
import { TableExpandableProps } from "../../core";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the TableColumn interface.
 */
export function TableColumnComponent<R>(props: TableColumn<R>): ReactElement {
  return <div>{props.title}</div>
}

export function TableExpandableComponent<R>(
  props: TableExpandableProps<R>
): ReactElement {
  return <div>{props.render.length}</div>
}
