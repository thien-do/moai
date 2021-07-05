import { RadioOption } from "../../../core/src";

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the RadioOption interface.
 */
export const RadioOptionComponent = <R,>(
	props: RadioOption<R>
): JSX.Element => <div>{props.id}</div>;
