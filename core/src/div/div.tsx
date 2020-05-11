import React from "react";

import s from "./div.module.scss";

const { line, px4, px8, px16, px24, px32, px48, px64, px96, grow } = s;

/**
 * Dividers via class names
 */
export const div = { line, px4, px8, px16, px24, px32, px48, px64, px96, grow };

// Validate
Object.keys(div).forEach((key) => {
	const value = (div as any)[key];
	if (value === undefined) throw Error(`div.${key} is undefined`);
});

export const DivLine = () => <hr className={div.line} />;

export const DivPx4 = () => <span className={div.px4} />;
export const DivPx8 = () => <span className={div.px8} />;
export const DivPx16 = () => <span className={div.px16} />;
export const DivPx24 = () => <span className={div.px24} />;
export const DivPx32 = () => <span className={div.px32} />;
export const DivPx48 = () => <span className={div.px48} />;
export const DivPx64 = () => <span className={div.px64} />;
export const DivPx96 = () => <span className={div.px96} />;

export const DivGrow = () => <span className={div.grow} />;
