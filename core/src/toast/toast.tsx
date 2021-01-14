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

export const toast = async (
	type: ToastType,
	message: string
): Promise<void> => {
	if (inited.current === false) await init();
	await new Promise((resolve) => setTimeout(resolve, 0));
	type.handler(message);
};

toast.types = toastTypes;
