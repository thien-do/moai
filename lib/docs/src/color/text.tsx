import { background, Table, text } from "../../../core/src";
import { ColorSample, ColorSampleProps } from "./sample";
import s from "./text.module.css";

type ColorKey = Exclude<keyof typeof text, "big" | "strong" | "p" | "break">;

interface Row {
	key: ColorKey;
	content: ColorSampleProps["content"];
}

const Name = (row: Row): JSX.Element => (
	<span className={s.name}>{row.key}</span>
);

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

export const ColorText = (): JSX.Element => (
	<Table<Row>
		size={Table.sizes.small}
		fill
		rows={[
			{ key: "normal", content: "both" },
			{ key: "muted", content: "both" },
			{ key: "highlightStrong", content: "text" },
			{ key: "highlightWeak", content: "icon" },
			{ key: "successStrong", content: "text" },
			{ key: "successWeak", content: "icon" },
			{ key: "failureStrong", content: "text" },
			{ key: "failureWeak", content: "icon" },
		]}
		rowKey={(row) => row.key}
		columns={[
			{ title: "Name", render: Name },
			{ title: "Light strong", render: LightStrong },
			{ title: "Light weak", render: LightWeak },
			{ title: "Dark strong", render: DarkStrong },
			{ title: "Dark weak", render: DarkWeak },
		]}
	/>
);
