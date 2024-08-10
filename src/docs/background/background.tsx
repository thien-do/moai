import { background, border, Table, text } from "../../core";
import { ColorSample } from "../../old-docs/color/sample/sample";
import s from "./background.module.css";

type BackgroundKey = keyof typeof background;

interface Row {
  key: BackgroundKey;
}

const MakeColumn =
  (theme: "light" | "dark", text: string) =>
  (row: Row): JSX.Element => (
    <div className={theme}>
      <ColorSample
        background={background[row.key]}
        foreground={{ type: "text", cls: text, usage: "both" }}
      />
    </div>
  );

const LightStrong = MakeColumn("light", text.normal);
const LightWeak = MakeColumn("light", text.muted);
const DarkStrong = MakeColumn("dark", text.normal);
const DarkWeak = MakeColumn("dark", text.muted);

interface Props {
  rows: Row[];
}

export const ColorBackground = (props: Props): JSX.Element => (
  <div className={[s.container, border.weak].join(" ")}>
    <Table<Row>
      size={Table.sizes.small}
      fixed={{ firstColumn: true }}
      fill
      rows={props.rows}
      rowKey={(row) => row.key}
      columns={[
        { title: "Name", className: s.name, render: "key" },
        { title: "Light", render: LightStrong },
        { title: "Light (muted)", render: LightWeak },
        { title: "Dark", render: DarkStrong },
        { title: "Dark (muted)", render: DarkWeak },
      ]}
    />
  </div>
);
