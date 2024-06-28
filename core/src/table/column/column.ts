import { CSSProperties } from "react";
import { getTableFixedMetaMap } from "../fixed/fixed";
import { TableProps } from "../table";

export interface TableColumnMeta {
	className: string;
	style?: CSSProperties;
}

/**
 * A Map from column index to the class names and styles that should be applied
 * to all TDs and THs inside the column.
 */
export type TableColumnMetaMap = Map<number, TableColumnMeta>;

// These meta info can be calculated in each cell, but we put it here so it
// can be calculated once for each table
export const getTableColumnMetaMap = <R>(
	props: TableProps<R>,
): TableColumnMetaMap => {
	// We only have fixed meta for now. If we have more in the future, we should
	// merge them here
	return getTableFixedMetaMap(props);
};
