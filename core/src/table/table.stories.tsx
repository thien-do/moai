import { storiesOf } from "@storybook/react";
import { CSSProperties } from "react";
import type { Person } from "../../../site/components/gallery/samples/people";
import peopleRaw from "../../../site/components/gallery/samples/people.json";
import { Table } from "./table";
import s from "./table.stories.module.css";

const people: Person[] = peopleRaw;

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
