import React from "react";
import { border, Table } from "../../../../core/src";
import { GalleryTag } from "../../../../gallery/src/tag";
import s from "./category.module.css";

interface Row {
	name: string;
	link: string;
	example: React.ReactNode;
}

const Name = (row: Row): JSX.Element => (
	<a href={row.link} children={row.name} />
);

const Example = (row: Row): JSX.Element => <div children={row.example} />;

export const ColorCategoryTable = (): JSX.Element => (
	<div className={[s.container, border.weak].join(" ")}>
		<Table<Row>
			rows={[
				{
					name: "Tag",
					link: "/docs/components-tag",
					example: <GalleryTag />,
				},
			]}
			rowKey={(row) => row.name}
			columns={[
				{ title: "Component", render: Name },
				{ title: "Example", render: Example },
			]}
			fill
			fixed={{ firstColumn: true }}
		/>
	</div>
);
