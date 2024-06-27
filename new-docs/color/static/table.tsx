import { ReactElement } from "react";
import { border, Table } from "../../../core/src";
import { ColorStaticSample } from "./sample";
import s from "./table.module.css";

interface Props {
	name: string;
}

const Color =
	(props: Props) =>
	(row: number): ReactElement => {
		return (
			// eslint-disable-next-line react/prop-types
			<ColorStaticSample name={`${props.name}-${row}`} />
		);
	};

const Name =
	(props: Props) =>
	(row: number): ReactElement => {
		return (
			// eslint-disable-next-line react/prop-types
			<span children={`${props.name}-${row}`} />
		);
	};

export function ColorStaticTable(props: Props): ReactElement {
	return (
		<div className={[s.container, border.weak].join(" ")}>
			<Table<number>
				fill
				rows={[...Array(10).keys()]}
				rowKey={(row) => row.toString()}
				columns={[
					{
						title: "Color",
						className: s.color,
						render: Color(props),
					},
					{ title: "Name", className: s.name, render: Name(props) },
				]}
			/>
		</div>
	);
}
