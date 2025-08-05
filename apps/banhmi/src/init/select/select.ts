import { border, Select } from "main/src/core";
import outset from "../button/outset.module.css";

Select.styles.outset = {
  select: [outset.main, border.radius].join(" "),
};
