import toastController, { useToaster } from "react-hot-toast";
import type { Toast, ToastType } from "react-hot-toast/dist/core/types";
import { ToastPane, ToastPaneType } from "../pane/pane";
import s from "./container.module.css";

const getType = (from: ToastType): ToastPaneType => {
	switch (from) {
		case "error":
			return ToastPane.type.error;
		case "success":
			return ToastPane.type.success;
		default:
			throw Error(`Unsupported type: "${from}"`);
	}
};

export const ToastContainer = () => {
	const { toasts, handlers } = useToaster();
	const { startPause, endPause, calculateOffset, updateHeight } = handlers;

	const renderToast = (toast: Toast): JSX.Element => {
		const offsetOpts = { reverseOrder: false, margin: 8 };
		const offset = calculateOffset(toast.id, offsetOpts);
		const ref = (el: HTMLDivElement) => {
			if (!el || toast.height) return;
			const height = el.getBoundingClientRect().height;
			updateHeight(toast.id, height);
		};
		return (
			<div
				key={toast.id}
				ref={ref}
				className={s.item}
				style={{
					opacity: toast.visible ? 1 : 0,
					pointerEvents: toast.visible ? "auto" : "none",
					transform: `translate(-50%, ${offset}px)`,
				}}
			>
				<ToastPane
					type={getType(toast.type)}
					children={toast.message}
					close={() => toastController.dismiss(toast.id)}
				/>
			</div>
		);
	};

	return (
		<div
			className={s.container}
			onMouseEnter={startPause}
			onMouseLeave={endPause}
			children={toasts.map(renderToast)}
		/>
	);
};
