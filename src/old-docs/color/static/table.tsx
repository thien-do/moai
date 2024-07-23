import { border, Table } from "../../../../core/src";
import { ColorStaticSample } from "./sample";
import s from "./table.module.css";

interface Props {
  name: string;
}

const Color =
  (props: Props) =>
  (row: number): JSX.Element => (
    // eslint-disable-next-line react/prop-types
    <ColorStaticSample name={`${props.name}-${row}`} />
  );

const Name =
  (props: Props) =>
  (row: number): JSX.Element => (
    // eslint-disable-next-line react/prop-types
    <span children={`${props.name}-${row}`} />
  );

export const ColorStaticTable = (props: Props): JSX.Element => (
  <div className={[s.container, border.weak].join(" ")}>
    <Table<number>
      fill
      rows={[...Array(10).keys()]}
      rowKey={(row) => row.toString()}
      columns={[
        { title: "Color", className: s.color, render: Color(props) },
        { title: "Name", className: s.name, render: Name(props) },
      ]}
    />
  </div>
);
