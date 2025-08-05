import { ReactElement } from "react";
import { RadioOption } from "../../core";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the RadioOption interface.
 */
export function RadioOptionComponent<R>(props: RadioOption<R>): ReactElement {
  return <div>{props.id}</div>
}
