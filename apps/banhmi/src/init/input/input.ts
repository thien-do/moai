import { border, Input, TextArea } from "main/src/core";
import outset from "./outset.module.css";
import flat from "./flat.module.css";

Input.styles.outset = { main: [outset.main, border.radius].join(" ") };
Input.styles.flat = { main: [flat.main, border.radius].join(" ") };

TextArea.styles.outset = Input.styles.outset;
TextArea.styles.flat = Input.styles.flat;
