import { render } from "react-dom";
import { ToastContainer } from "./container/container";
import { ToastType, toastTypes } from "./type/type";

export * from "./pane/pane";

const inited = { current: false };

const init = async (resolve: (div: HTMLDivElement) => void): Promise<void> => {
	const element = document.createElement("div");
	document.body.append(element);
	render(<ToastContainer />, element);
	// The callback in "render" is called after the component is rendered,
	// but we need to wait after it is mounted, thus this timeout
	await new Promise((resolve) => setTimeout(resolve, 100));
	// Report back
	inited.current = true;
	resolve(element);
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
	console.log(inited.current);
	if (inited.current === false) await new Promise(init);
	type.handler(message);
};

toast.types = toastTypes;
