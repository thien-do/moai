import { background, border, Table, text } from "../../../core";
import { ColorSample, ColorSampleUsage } from "../sample/sample";
import s from "./text.module.css";

type TextKey = keyof typeof text;

interface Row {
  key: TextKey;
  usage: ColorSampleUsage;
}

// const usageTexts: Record<ColorSampleUsage, string> = {
// 	both: "Icon and text",
// 	icon: "Icon only",
// 	text: "Text only",
// };

// const Usage = (row: Row): JSX.Element => <span>{usageTexts[row.usage]}</span>;

const MakeColumn =
  (theme: "light" | "dark", back: string) =>
    (row: Row): JSX.Element => (
      <div className={theme}>
        <ColorSample
          background={back}
          foreground={{
            type: "text",
            cls: text[row.key],
            usage: row.usage,
          }}
        />
      </div>
    );

const LightStrong = MakeColumn("light", background.strong);
const LightWeak = MakeColumn("light", background.weak);
const DarkStrong = MakeColumn("dark", background.strong);
const DarkWeak = MakeColumn("dark", background.weak);

interface Props {
  rows: Row[];
}

export const ColorText = (props: Props): JSX.Element => (
  <div className={[s.container, border.weak].join(" ")}>
    <Table<Row>
      size={Table.sizes.small}
      fixed={{ firstColumn: true }}
      fill
      rows={props.rows}
      rowKey={(row) => row.key}
      columns={[
        { title: "Name", className: s.name, render: "key" },
        // { title: "Usage", className: s.usage, render: Usage },
        { title: "Light", render: LightStrong },
        { title: "Light (alt bg)", render: LightWeak },
        { title: "Dark", render: DarkStrong },
        { title: "Dark (alt bg)", render: DarkWeak },
      ]}
    />
  </div>
);
