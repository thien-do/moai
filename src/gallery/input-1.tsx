import { Input, InputStyle } from "../core";
import { Shot } from "./shot/shot";
import s from "./styles.module.css";

const Column = ({ style }: { style: InputStyle }): JSX.Element => (
  <div className={[s.col, s.rows].join(" ")}>
    <Input style={style} defaultValue="Text box" />
    <Input style={style} defaultValue="" placeholder="Placeholder" />
    <Input style={style} defaultValue="Read-only" readOnly />
    <Input style={style} defaultValue="Disabled" disabled />
  </div>
);

export const GalleryInput1 = (): JSX.Element => (
  <Shot>
    <div className={s.cols}>
      <Column style={Input.styles.outset} />
      <Column style={Input.styles.flat} />
    </div>
  </Shot>
);
