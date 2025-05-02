import { ReactElement } from "react";
import { SelectOption } from "../../core";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the SelectOption interface.
 */
export function SelectOptionComponent<R>(props: SelectOption<R>): ReactElement {
  return <div>{props.id}</div>
}
