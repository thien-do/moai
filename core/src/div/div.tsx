import s from "./div.module.css";

// eslint-disable-next-line no-irregular-whitespace
export const DivEm = (): JSX.Element => <span> </span>;

export const DivPx = ({ size }: { size: number }): JSX.Element => (
	<span className={s.px} style={{ width: size, height: size }} />
);

export const DivGrow = (): JSX.Element => <span className={s.grow} />;
