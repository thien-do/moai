import { DivPx, Input, InputStyle } from "../../../core/src";
import s from "../styles.module.css";

const Column = ({ style }: { style: InputStyle }): JSX.Element => (
	<div className={s.flex1}>
		<Input style={style} defaultValue="Text box" />
		<DivPx size={8} />
		<Input style={style} defaultValue="" placeholder="Placeholder" />
		<DivPx size={8} />
		<Input style={style} defaultValue="Read-only" readOnly />
		<DivPx size={8} />
		<Input style={style} defaultValue="Disabled" disabled />
	</div>
);

export const GalleryTextBase = (): JSX.Element => (
	<div className={s.flex}>
		<Column style={Input.styles.outset} />
		<DivPx size={8} />
		<Column style={Input.styles.flat} />
	</div>
);
