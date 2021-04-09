import s from "./div.module.css";

// eslint-disable-next-line no-irregular-whitespace
export const DivEm = (): JSX.Element => <span> </span>;

export type DivSize = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64 | 96;

export const DivPx = ({ size }: { size: DivSize }): JSX.Element => (
	<span className={s.px} style={{ width: size, height: size }} />
);

export const DivGrow = (): JSX.Element => <span className={s.grow} />;
