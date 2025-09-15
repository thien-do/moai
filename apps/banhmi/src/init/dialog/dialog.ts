import { background, border, Dialog, shadow } from "main/src/core";

Dialog.Pane.styles.outset = [
  shadow.boxStrong,
  background.strong,
  border.radius,
].join(" ");
