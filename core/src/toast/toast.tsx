import { render } from "react-dom";
import toastController from "react-hot-toast";
import { ToastContainer } from "./container/container";

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

export type ToastType = "success" | "error";

export const toast = async (
	type: ToastType,
	message: string
): Promise<void> => {
	if (inited.current === false) await init();
	await new Promise((resolve) => setTimeout(resolve, 0));
	switch (type) {
		case "success":
			toastController.success(message);
			break;
		case "error":
			toastController.error(message);
			break;
	}
};
