import { SwitcherOption } from "../core/src";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the Option interface.
 */
export const SwitcherOptionComponent = <R,>(
	props: SwitcherOption<R>
): JSX.Element => <div>{props.key}</div>;
