import * as ReactDOM from "react-dom";

const unmount = (container: HTMLElement) => {
  const result = ReactDOM.unmountComponentAtNode(container);
  if (result === false) throw Error("No component to unmount");
  container.remove();
};

type Render = (unmount: () => void) => JSX.Element;

export const renderDialog = (render: Render): void => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const dialog = render(() => unmount(container));
  ReactDOM.render(dialog, container);
};
