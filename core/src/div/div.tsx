import React from "react";

import s from "./div.module.scss";
import { validateStyles } from "../utils/utils";

const { line, px4, px8, px16, px24, px32, px48, px64, px96, grow } = s;

export const div = { line, px4, px8, px16, px24, px32, px48, px64, px96, grow };

validateStyles(div);

export const DivLine = () => <hr className={s.line} />;

export const DivPx4 = () => <span className={s.px4} />;
export const DivPx8 = () => <span className={s.px8} />;
export const DivPx16 = () => <span className={s.px16} />;
export const DivPx24 = () => <span className={s.px24} />;
export const DivPx32 = () => <span className={s.px32} />;
export const DivPx48 = () => <span className={s.px48} />;
export const DivPx64 = () => <span className={s.px64} />;
export const DivPx96 = () => <span className={s.px96} />;

export const DivGrow = () => <span className={s.grow} />;
