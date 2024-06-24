import RHTToast from "react-hot-toast";
import { ToastPane, ToastPaneType } from "../pane/pane";

type ToastHandler = (typeof RHTToast)["success"];

export interface ToastType {
	handler: ToastHandler;
	paneType: ToastPaneType;
}

export const toastTypes = {
	success: {
		handler: RHTToast.success,
		paneType: ToastPane.types.success,
	} as ToastType,
	failure: {
		handler: RHTToast.error,
		paneType: ToastPane.types.failure,
	} as ToastType,
};
