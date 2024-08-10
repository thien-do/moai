import { Tab } from "../../../core/src";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the Tab interface.
 */
export const TabComponent = (props: Tab): JSX.Element => (
  <div>{props.title}</div>
);
