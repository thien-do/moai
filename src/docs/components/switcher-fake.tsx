import { ReactElement } from "react";
import { SwitcherOption } from "../../core";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the Option interface.
 */
export function SwitcherOptionComponent<R>(
  props: SwitcherOption<R>
): ReactElement {
  return <div>{props.key}</div>
}
