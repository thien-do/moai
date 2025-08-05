import { ReactElement } from "react";
import { Tab } from "../../core";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the Tab interface.
 */
export function TabComponent(props: Tab): ReactElement {
  return <div>{props.id}</div>
}
