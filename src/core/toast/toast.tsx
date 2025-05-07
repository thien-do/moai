import { createRoot } from "react-dom/client";
import { ToastContainer } from "./container/container";
import { ToastType, toastTypes } from "./type/type";

export * from "./pane/pane";

export type { ToastType };

const inited = { current: false };

const init = async (resolve: (div: HTMLDivElement) => void): Promise<void> => {
  const element = document.createElement("div");
  const root = createRoot(element);
  document.body.append(element);
  root.render(<ToastContainer />);
  // The callback in "render" is called after the component is rendered,
  // but we need to wait after it is mounted, thus this timeout
  await new Promise((resolve) => setTimeout(resolve, 100));
  // Report back
  inited.current = true;
  resolve(element);
};

export const toast = async (
  type: ToastType,
  message: string,
): Promise<void> => {
  if (inited.current === false) await new Promise(init);
  type.handler(message);
};

toast.types = toastTypes;
