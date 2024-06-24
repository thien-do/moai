import { SetState } from "../../../utils/utils";

export type TableSelected = string | Set<string>;

export interface TableSelectableProps<T extends TableSelected> {
	/**
	 * Key of selected row (or rows).
	 */
	selected: T;
	/**
	 * Callback to set selected row (or rows).
	 */
	setSelected: T extends string ? SetState<string> : SetState<Set<string>>;
	/**
	 * The [HTML `name`][1] attribute for radio buttons, required when
	 * "selected" is an array.
	 *
	 * [1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#defining_a_radio_group
	 */
	radioGroupName?: string;
}

export const isTableRowSelected = (
	selected: TableSelected | undefined,
	rowKey: string,
): boolean => {
	if (selected === undefined) return false;
	if (typeof selected === "string") return selected === rowKey;
	return selected.has(rowKey);
};
