import * as React from "react";

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
	expanded?: Set<string>;
	/**
	 * Callback to set expanded rows, for controlled usage.
	 */
	setExpanded?: React.Dispatch<React.SetStateAction<Set<string>>>;
	/**
	 * Initial expanded rows, for uncontrolled usage.
	 */
	initialExpanded?: Set<string>;
}

export interface TableExpandableState {
	expanded: Set<string>;
	// Note that this is not the setter from React's state but an easier-to-use
	// version that works on each row.
	setExpanded: (key: string, expanded: boolean) => void;
}

type Props<R> = TableExpandableProps<R>;
type State = TableExpandableState;

export const useTableExpandable = <R>(props?: Props<R>): State => {
	const internal = React.useState(() => {
		return props?.initialExpanded ?? new Set<string>();
	});

	const value: State["expanded"] = props?.expanded ?? internal[0];

	// The original internal setter that set the whole "expanded" state
	const setExpanded = props?.setExpanded ?? internal[1];

	// A easier-to-use public setter that set row by row
	const setValue: State["setExpanded"] = React.useCallback(
		(key: string, expanded: boolean) => {
			setExpanded((prev) => {
				const next = new Set(prev);
				expanded ? next.add(key) : next.delete(key);
				return next;
			});
		},
		[setExpanded]
	);

	return { expanded: value, setExpanded: setValue };
};
