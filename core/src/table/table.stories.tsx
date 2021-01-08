import { storiesOf } from "@storybook/react";
import { Table } from "./table";
import s from "./table.stories.module.css";

export interface Person {
	id: string;
	first_name: string;
	last_name: string;
}

const people: Person[] = [
	{
		id: "4af81b79-7fef-4b96-81aa-a9ff63763d73",
		first_name: "Marilee",
		last_name: "Ferruzzi",
	},
	{
		id: "f5a615af-6ade-44bb-95bd-94f24bd71370",
		first_name: "Natividad",
		last_name: "Enticott",
	},
	{
		id: "5e356880-189c-4070-81ce-cda47f10fc97",
		first_name: "Hube",
		last_name: "Haliday",
	},
	{
		id: "31fb56b2-7291-47b6-ac65-a82d616b72cd",
		first_name: "Westleigh",
		last_name: "Leggate",
	},
	{
		id: "91e87874-4eed-4fa6-9abb-9a24d84abf64",
		first_name: "Roderick",
		last_name: "Markham",
	},
	{
		id: "d6b382b4-66c4-4a2b-af19-a41f3bf1ab47",
		first_name: "Von",
		last_name: "Fowells",
	},
	{
		id: "9e4b4037-702b-497d-9183-03a48932329d",
		first_name: "Derrick",
		last_name: "Kewzick",
	},
	{
		id: "cc1adab9-1ad7-4048-83d7-62a07329fd59",
		first_name: "Kenny",
		last_name: "Mincini",
	},
	{
		id: "43cec69a-06a3-4a2d-a962-85432daa9aec",
		first_name: "Sunshine",
		last_name: "Timby",
	},
	{
		id: "7e44b154-11d6-4d9a-b48e-0967a5bf2214",
		first_name: "Shay",
		last_name: "Kobpac",
	},
	{
		id: "e1c6c344-be5f-44e6-a873-326a8b19a0c4",
		first_name: "Tildie",
		last_name: "McQuode",
	},
	{
		id: "ec0925ae-9eac-494e-b6bc-c2ad2f449dde",
		first_name: "Marmaduke",
		last_name: "Sarrell",
	},
];

storiesOf("Table", module).add("Main", () => (
	<div className={s.container}>
		<Table<Person>
			columns={[
				{ title: "ID", render: "id" },
				{ title: "First name", render: "first_name" },
				{ title: "Last name", render: "last_name" },
			]}
			rows={people}
			rowKey={(p) => p.id}
		/>
	</div>
));
