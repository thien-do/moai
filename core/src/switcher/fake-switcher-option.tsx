import { SwitcherOption } from "./switcher";

/**
 * DO NOT USE THIS COMPONENT.
 *
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the SelectOption interface.
 */
export const SwitcherOptionComponent = <R,>(
	props: SwitcherOption<R>
): JSX.Element => <div>{props.key}</div>;
