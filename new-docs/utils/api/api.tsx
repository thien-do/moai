import { ReactElement, ReactNode } from "react";
import { Table, border } from "../../../core/src";
import s from "./api.module.css";

export interface APIData {
	prop: string;
	description: {
		type: string;
		description: ReactNode;
	};
	required?: boolean;
}

interface Props {
	data: APIData[];
}

export function APIReference({ data }: Props): ReactElement {
	return (
		<div className={[s.container, border.weak].join(" ")}>
			<Table
				size={Table.sizes.small}
				fixed={{ firstColumn: true }}
				fill
				rows={data}
				rowKey={(row) => row.prop}
				columns={[
					{
						title: "Prop",
						render: ({ prop, required }) => {
							return (
								<div className={s.prop}>
									<i>{prop}</i>
									{required && (
										<span className={s.required}>*</span>
									)}
								</div>
							);
						},
					},
					{
						title: "Description",
						render: ({ description }) => {
							return (
								<div>
									<div className={s.description}>
										{description.description !== ""
											? description.description
											: "-"}
									</div>
									<code className={s.type}>
										{description.type}
									</code>
								</div>
							);
						},
					},
				]}
			/>
		</div>
	);
}
