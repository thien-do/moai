import s from "./grid.module.css";
import { ColorStaticTable } from "./table";

export const ColorStaticGrid = (): JSX.Element => (
  <div className={s.container}>
    <ColorStaticTable name="gray" />
    <ColorStaticTable name="highlight" />
    <ColorStaticTable name="success" />
    <ColorStaticTable name="failure" />
  </div>
);
