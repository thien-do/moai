import { TableColumn } from "../../core/src";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the TableColumn interface.
 */
export const TableColumnComponent = <R,>(
	props: TableColumn<R>
): JSX.Element => <div>{props.title}</div>;
