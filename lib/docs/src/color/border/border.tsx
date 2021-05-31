import { background, border, Table } from "../../../../core/src";
import { ColorSample } from "../sample/sample";
import s from "./border.module.css";

type BorderKey = keyof typeof border;

interface Row {
	key: BorderKey;
}

const MakeColumn = (theme: "light" | "dark", back: string) => (
	row: Row
): JSX.Element => (
	<div className={theme}>
		<ColorSample
			background={back}
			foreground={{ type: "border", cls: border[row.key] }}
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

export const ColorBorder = (props: Props): JSX.Element => (
	<div className={s.container}>
		<Table<Row>
			size={Table.sizes.small}
			fixed={{ firstColumn: true }}
			fill
			rows={props.rows}
			rowKey={(row) => row.key}
			columns={[
				{ title: "Name", className: s.name, render: "key" },
				{ title: "Light", render: LightStrong },
				{ title: "Light (alt bg)", render: LightWeak },
				{ title: "Dark", render: DarkStrong },
				{ title: "Dark (alt bg)", render: DarkWeak },
			]}
		/>
	</div>
);
