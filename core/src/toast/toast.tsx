import { render } from "react-dom";
import { ToastContainer } from "./container/container";
import { ToastType, toastTypes } from "./type/type";

export * from "./pane/pane";

const inited = { current: false };

const init = (): Promise<HTMLDivElement> => {
	return new Promise((resolve) => {
		const element = document.createElement("div");
		document.body.append(element);
		const callback = async () => {
			inited.current = true;
			await new Promise((resolve) => setTimeout(resolve, 100));
			resolve(element);
		};
		render(<ToastContainer />, element, callback);
	});
};

export const toast = async (
	type: ToastType,
	message: string
): Promise<void> => {
	console.log(inited.current);
	if (inited.current === false) await init();
	type.handler(message);
};

toast.types = toastTypes;
