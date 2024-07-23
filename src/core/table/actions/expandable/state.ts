import * as React from "react";
import { SetState } from "../../../utils/utils";

type Expanded = Set<string>;

export interface TableExpandableProps<R> {
	/**
	 * A [render prop][1] that should return the React node to be rendered in
	 * the expanded area the given row.
	 *
	 * [1]: https://reactjs.org/docs/render-props.html
	 */
	render: (row: R) => React.ReactNode;
	/**
	 * List of key of expanded rows, for controlled usage.
	 */
	expanded?: Expanded;
	/**
	 * Callback to set expanded rows, for controlled usage.
	 */
	setExpanded?: SetState<Expanded>;
	/**
	 * Initial expanded rows, for uncontrolled usage.
	 */
	initialExpanded?: Expanded;
}

export interface TableExpandableState {
	expanded: Expanded;
	setExpanded: SetState<Expanded>;
}

type Props<R> = TableExpandableProps<R>;
type State = TableExpandableState;

export const useTableExpandable = <R>(props?: Props<R>): State => {
	const [_expanded, _setExpanded] = React.useState(() => {
		return props?.initialExpanded ?? new Set<string>();
	});
	return {
		expanded: props?.expanded ?? _expanded,
		setExpanded: props?.setExpanded ?? _setExpanded,
	};
};
