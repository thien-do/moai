import s from "./scrollbar.module.css";
import { validateStyles } from "../utils/utils";

const { custom } = s;

export const scrollbar = { custom };

console.log("s", s);

validateStyles(scrollbar);
