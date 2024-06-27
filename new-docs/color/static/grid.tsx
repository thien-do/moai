import { ReactElement } from "react";
import s from "./grid.module.css";
import { ColorStaticTable } from "./table";

export function ColorStaticGrid(): ReactElement {
	return (
		<div className={s.container}>
			<ColorStaticTable name="gray" />
			<ColorStaticTable name="highlight" />
			<ColorStaticTable name="success" />
			<ColorStaticTable name="failure" />
		</div>
	);
}
