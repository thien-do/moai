/**
 * Terminology:
 * - left				a, b
 * - left last			b
 * - left adjacent		c
 * - right 				g
 * - right last			g
 * - right adjacent		f
 *
 * a | b | c | d | e | f | g
 * . | . | . | . | . | . | .
 * . | . | . | . | . | . | .
 */

import {
	getTableActionsColumnWidth,
	isTableActionsExist,
} from "../actions/actions";
import { TableColumnMetaMap } from "../column/column";
import { TableProps } from "../table";
import s from "./fixed.module.css";

export const getTableFixedMetaMap = <R>(
	props: TableProps<R>,
): TableColumnMetaMap => {
	const map: TableColumnMetaMap = new Map();
	if (props.fixed === undefined) return map;
	const hasActions = isTableActionsExist(props);

	if (props.fixed.firstColumn) {
		const leftLast = hasActions ? 1 : 0;
		if (leftLast === 1) map.set(0, { className: s.left });
		map.set(leftLast, {
			className: [s.left, s.leftLast].join(" "),
			style: { left: getTableActionsColumnWidth(props) },
		});
		map.set(leftLast + 1, { className: s.leftAdjacent });
	}

	if (props.fixed.lastColumn) {
		const length = props.columns.length + (hasActions ? 1 : 0);
		map.set(length - 1, { className: [s.right, s.rightLast].join(" ") });
		map.set(length - 2, { className: s.rightAdjacent });
	}

	return map;
};
