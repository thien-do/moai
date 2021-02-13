import { Meta } from "@storybook/react";
import faker from "faker";
import { Button } from "../button/button";
import { Table } from "./table";
import s from "./table.stories.module.css";
import { TableColumn } from "./_fake";

export default {
	title: "Components/Table",
	subcomponents: { Table, TableColumn },
} as Meta;

export const Primary = () => (
	<div className={s.primary}>
		{/* It's optional but highly recommended to define the type of Table's
		rows as soon as possible */}
		<Table<Faker.ContextualCard>
			columns={[
				// Simple render via a property name
				{ title: "Name", render: "name", className: s.name },
				// Complex render via a function
				{ title: "DOB", render: (card) => card.dob.toDateString() },
				// Title can be more than a string
				{ title: <Button children="Email" />, render: "email" },
				{ title: "Phone", render: "phone" },
				{ title: "Username", render: "username" },
				{ title: "Website", render: "website" },
				{ title: "Company", render: (card) => card.company.name },
			]}
			rows={Array.from({ length: 50 }, () => {
				return faker.helpers.contextualCard();
			})}
			rowKey={(p) => p.email}
		/>
	</div>
);

export const Expandable = () => (
	<div className={s.expandable}>
		<Table<Faker.ContextualCard>
			columns={[
				{ title: "Name", render: "name", className: s.name },
				{ title: "Phone", render: "phone" },
				{ title: "Username", render: "username" },
				{ title: "Website", render: "website" },
			]}
			rows={Array.from({ length: 5 }, () => {
				return faker.helpers.contextualCard();
			})}
			rowKey={(p) => p.email}
			expandRowRender={(card) => JSON.stringify(card.address)}
		/>
	</div>
);
