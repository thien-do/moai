import { background, border, shadow, Popover } from "main/src/core";
import s from "./popover.module.css";

Popover.styles.outset = {
  content: [shadow.boxStrong, border.radius, background.strong].join(" "),
  arrow: s.arrow,
};
