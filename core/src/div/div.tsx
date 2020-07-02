import React from "react";

import s from "./div.module.scss";

export const DivEm = () => <span> </span>;

type Size = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64 | 96;

export const DivPx = ({ size }: { size: Size }) => (
	<span className={s.px} style={{ width: size, height: size }} />
);

export const DivGrow = () => <span className={s.grow} />;
