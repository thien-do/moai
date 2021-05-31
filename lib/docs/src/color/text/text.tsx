import { background, Table, text } from "../../../../core/src";
import { ColorSample, ColorSampleProps } from "../sample/sample";
import s from "./text.module.css";

type ColorKey = Exclude<keyof typeof text, "big" | "strong" | "p" | "break">;

interface Row {
	key: ColorKey;
	content: ColorSampleProps["content"];
}

const usageTexts: Record<ColorSampleProps["content"], string> = {
	both: "Icon and text",
	icon: "Icon only",
	text: "Text only",
};

const Usage = (row: Row): JSX.Element => <span>{usageTexts[row.content]}</span>;

const MakeColumn = (theme: "light" | "dark", back: string) => (
	row: Row
): JSX.Element => (
	<div className={theme}>
		<ColorSample back={back} fore={text[row.key]} content={row.content} />
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
	<div className={s.container}>
		<Table<Row>
			size={Table.sizes.small}
			fixed={{ firstColumn: true }}
			fill
			rows={props.rows}
			rowKey={(row) => row.key}
			columns={[
				{ title: "Name", className: s.name, render: "key" },
				{ title: "Usage", className: s.usage, render: Usage },
				{ title: "Light", render: LightStrong },
				{ title: "Light (alt. bg)", render: LightWeak },
				{ title: "Dark", render: DarkStrong },
				{ title: "Dark (alt. bg)", render: DarkWeak },
			]}
		/>
	</div>
);
