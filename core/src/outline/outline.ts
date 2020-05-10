import s from "./outline.module.scss";

const { inner, outer } = s;

if (!inner) { throw Error("Inner outline is not defined"); }
if (!outer) { throw Error("Outer outline is not defined"); }

export const outline = { inner, outer };
