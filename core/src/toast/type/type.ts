import RHTToast from "react-hot-toast";
import { ToastPane, ToastPaneType } from "../pane/pane";
import type { ToastType as RHTToastType } from "react-hot-toast/dist/core/types";

type ToastHandler = typeof RHTToast["success"];

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

export const TOAST_TYPE_MAP: Record<RHTToastType, ToastType | undefined> = {
	blank: undefined,
	error: toastTypes.failure,
	loading: undefined,
	success: toastTypes.success,
};
