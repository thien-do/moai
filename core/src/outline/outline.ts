import s from "./outline.module.scss";
import { validateStyles } from "../utils/utils";

const { inner, outer } = s;

export const outline = { inner, outer };

validateStyles(outline);
