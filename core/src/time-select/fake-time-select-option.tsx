import { SelectOption as SelectOptionProps } from "./time-select";

/**
 * DO NOT USE THIS COMPONENT.
 *
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the SelectOption interface.
 */
export const SelectOptionComponent = (
	props: SelectOptionProps
): JSX.Element => <div>{props.id}</div>;
