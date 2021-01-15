import s from "./div.module.css";

export const DivEm = () => <span> </span>;

export type DivSize = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64 | 96;

export const DivPx = ({ size }: { size: DivSize }) => (
	<span className={s.px} style={{ width: size, height: size }} />
);

export const DivGrow = () => <span className={s.grow} />;
