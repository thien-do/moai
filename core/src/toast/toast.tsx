import { render } from "react-dom";
import { ToastContainer } from "./container/container";
import { ToastType, toastTypes } from "./type/type";

export * from "./pane/pane";

const inited = { current: false };

const init = (): Promise<HTMLDivElement> => {
	return new Promise((resolve) => {
		const element = document.createElement("div");
		document.body.append(element);
		const callback = () => {
			inited.current = true;
			resolve(element);
		};
		render(<ToastContainer />, element, callback);
	});
};

/**
 * A toast is a lightweight, ephemeral notice from an application in direct response to a user's action.
 *
 * Toasts can be configured to appear at the top of an application window, and it is possible to have more than one toast onscreen at a time.
 *
 * Toast have a built-in timeout. Users can also dismiss them manually by clicking the x button.
 * Also, hovering the cursor over a toast prevents it from disappearing.
 * When the cursor leaves the toast, the toast's timeout restarts.
 */

export const toast = async (
	type: ToastType,
	message: string
): Promise<void> => {
	if (inited.current === false) await init();
	await new Promise((resolve) => setTimeout(resolve, 0));
	type.handler(message);
};

toast.types = toastTypes;
