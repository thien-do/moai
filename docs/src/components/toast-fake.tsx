import { ToastType } from "../../../core/src";

interface Props {
	/**
	 * The type of the toast. This controls the toast's color and icon. Choose
	 * one from `toast.types`.
	 */
	type: ToastType;
	/**
	 * The message to render inside the toast.
	 */
	message: string;
}

/**
 * This is not a part of the source code. It exists only for Storybook's
 * ArgsTable to describe the `toast` utility interface.
 */
export const ToastFunction = (props: Props): JSX.Element => (
	<div children={props.message} />
);
