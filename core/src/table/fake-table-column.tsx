import { TableColumn as TableColumnProps } from "../..";

/**
 * DO NOT USE THIS COMPONENT.
 * 
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the TableColumn interface.
 */
export const TableColumn = <R,>(props: TableColumnProps<R>): JSX.Element => (
	<div>{props.title}</div>
);
