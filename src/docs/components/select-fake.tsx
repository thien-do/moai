import { SelectOption } from "../../../core/src";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the SelectOption interface.
 */
export const SelectOptionComponent = <R,>(
  props: SelectOption<R>,
): JSX.Element => <div>{props.id}</div>;
