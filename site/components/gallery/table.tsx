import { Button, Input, Pane, Paragraph, Select, Table, TableColumn, Tag } from "@moai/core"; // prettier-ignore
import { icons } from "@moai/icon";
import { Person } from "../../../site/components/gallery/samples/people";
import PEOPLE from "../../../site/components/gallery/samples/people.json";
import { toOption } from "./select";
import s from "./table.module.css";

interface RowProps {
	person: Person;
}

type Column = (props: RowProps) => JSX.Element;

const SearchHeader = ({ children }: { children: string }): JSX.Element => (
	<div className="space-y-8">
		<div className="">{children}</div>
		<div className="font-normal">
			<Input icon={icons.search} placeholder="Search" />
		</div>
	</div>
);

const Overview: Column = ({ person }) => (
	<div className="flex items-center space-x-8">
		<div>
			<img
				width="32"
				height="32"
				src={person.avatar}
				alt={`Image of ${person.last_name}`}
				className="block"
				style={{ background: `${person.color}20` }}
			/>
		</div>
		<div>
			{person.first_name} {person.last_name}
		</div>
	</div>
);

const LastSeenHeader = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex-shrink-0">Last seen</div>
		<div className="flex-1 font-normal">
			<Input type="date" placeholder="Search" />
		</div>
	</div>
);

const Action: Column = ({ person }) => (
	<div className="flex justify-end space-x-8">
		{person.deployed > 90 ? (
			<Button highlight children="Deploy" />
		) : (
			<>
				<Button children="Retreat" />
				<Button children="Upgrade" />
			</>
		)}
	</div>
);

const ALL_GENRES: string[] = [
	"Filter: All",
	...new Set(PEOPLE.flatMap((p) => p.genres.split("|"))),
];

const GenresHeader = (): JSX.Element => (
	<div className="space-y-8">
		<div className="">Genres</div>
		<div className="font-normal">
			<Select
				options={ALL_GENRES.map(toOption)}
				defaultValue="Filter: All"
			/>
		</div>
	</div>
);

const Genres: Column = ({ person }) => (
	<div className="flex flex-wrap -mx-4 -my-8">
		{person.genres.split("|").map((genre) => (
			<div className="px-4 py-8" key={genre}>
				<Tag children={genre} />
			</div>
		))}
	</div>
);

const Note: Column = ({ person }) => <Paragraph children={person.note} />;

const Phone: Column = ({ person }) => (
	<div className="flex items-center space-x-8">
		<div>{person.phone}</div>
		<Button
			size={Button.size.small}
			icon={icons.duplicate}
			iconLabel="Copy"
		/>
	</div>
);

const getColumns = (): TableColumn[] => [
	{
		title: <SearchHeader children="Bot" />,
		render: (i) => <Overview person={PEOPLE[i]} />,
		className: s.overview,
	},
	{
		title: <LastSeenHeader />,
		render: (i) => PEOPLE[i].lastSeen,
		className: s.lastSeen,
	},
	{
		title: <SearchHeader children="Phone" />,
		render: (i) => <Phone person={PEOPLE[i]} />,
		className: s.phone,
	},
	{
		title: <GenresHeader />,
		render: (i) => <Genres person={PEOPLE[i]} />,
		className: s.genres,
	},
	{
		title: <SearchHeader children="Email" />,
		render: (i) => PEOPLE[i].email,
		className: s.email,
	},
	{
		title: <SearchHeader children="Note" />,
		render: (i) => <Note person={PEOPLE[i]} />,
		className: s.note,
	},
	{
		title: "Action",
		render: (i) => <Action person={PEOPLE[i]} />,
		className: s.action,
	},
];

export const GalleryTable = (): JSX.Element => (
	<Pane noPadding>
		<div className={s.container} style={{ height: 300 }}>
			<Table
				columns={getColumns()}
				rowKey={(i) => PEOPLE[i].id}
				rowsLength={PEOPLE.length}
			/>
		</div>
	</Pane>
);
