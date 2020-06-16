import React from "react";

import s from "./div.module.scss";
import { borderColor } from "../border/border";

export const DivEm = () => <span> </span>;

export const DivLine = () => <hr className={`${s.line} ${borderColor.weak}`} />;

type Size = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64 | 96;

export const DivPx = ({ size }: { size: Size }) => (
	<span className={s.px} style={{ width: size, height: size }} />
);

export const DivGrow = () => <span className={s.grow} />;
