import sb from "./button.module.scss";

const { button: main, highlight } = sb;

if (!main) throw Error("form.button.button style is not defined");
if (!highlight) throw Error("form.button.highlight style is not defined");

export const button = { main, highlight };
