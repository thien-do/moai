import toastController, { useToaster as useRHTToaster } from "react-hot-toast";
import type * as RHT from "react-hot-toast/dist/core/types";
import { ToastPane, ToastPaneType } from "../pane/pane";
import { TOAST_TYPE_MAP } from "../toast";
import s from "./container.module.css";

const getType = (from: RHT.ToastType): ToastPaneType => {
	const type = TOAST_TYPE_MAP[from];
	if (type !== undefined) return type.paneType;
	throw Error(`Unknown type: "${from}"`);
};

export const ToastContainer = () => {
	const { toasts, handlers } = useRHTToaster();
	const { startPause, endPause, calculateOffset, updateHeight } = handlers;

	const renderToast = (toast: RHT.Toast): JSX.Element => {
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
