import { render } from "react-dom";
import RHTToast from "react-hot-toast";
import { ToastContainer } from "./container/container";
import { ToastPane, ToastPaneType } from "./pane/pane";

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

type ToastHandler = typeof RHTToast["success"];

export interface ToastType {
	handler: ToastHandler;
	paneType: ToastPaneType;
}

export const toast = async (
	type: ToastType,
	message: string
): Promise<void> => {
	if (inited.current === false) await init();
	await new Promise((resolve) => setTimeout(resolve, 0));
	type.handler(message);
};

toast.types = {
	success: {
		handler: RHTToast.success,
		paneType: ToastPane.types.success,
	} as ToastType,
	failure: {
		handler: RHTToast.error,
		paneType: ToastPane.types.failure,
	} as ToastType,
};
