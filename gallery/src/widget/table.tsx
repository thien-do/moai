import { Button, Input, Pane, Paragraph, Select, Table, TableColumn, Tag } from "@moai/core"; // prettier-ignore
import { Duplicate, Search } from "@moai/icon/bp";
import { Person } from "./samples/people";
import PEOPLE_RAW from "./samples/people.json";
import { toOption } from "./select";
import s from "./table.module.css";

interface RowProps {
	person: Person;
}

const PEOPLE: Person[] = PEOPLE_RAW;

type Column = (props: RowProps) => JSX.Element;

const SearchHeader = ({ children }: { children: string }): JSX.Element => (
	<div className="space-y-8">
		<div className="">{children}</div>
		<div className="font-normal">
			<Input icon={Search} placeholder="Search" />
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
				<Tag type={Tag.types.neutral} children={genre} />
			</div>
		))}
	</div>
);

const Note: Column = ({ person }) => (
	<Paragraph children={person.note.split(".").slice(0, 1).join(".")} />
);

const Phone: Column = ({ person }) => (
	<div className="flex items-center space-x-8">
		<div>{person.phone}</div>
		<Button.sizes={Button.sizes.small} icon={Duplicate} iconLabel="Copy" />
	</div>
);

const getColumns = (): TableColumn<Person>[] => [
	{
		title: <SearchHeader children="Bot" />,
		render: (p) => <Overview person={p} />,
		className: s.overview,
	},
	{
		title: <LastSeenHeader />,
		render: (p) => p.lastSeen,
		className: s.lastSeen,
	},
	{
		title: <SearchHeader children="Phone" />,
		render: (p) => <Phone person={p} />,
		className: s.phone,
	},
	{
		title: <GenresHeader />,
		render: (p) => <Genres person={p} />,
		className: s.genres,
	},
	{
		title: <SearchHeader children="Email" />,
		render: (p) => p.email,
		className: s.email,
	},
	{
		title: <SearchHeader children="Note" />,
		render: (p) => <Note person={p} />,
		className: s.note,
	},
	{
		title: "Action",
		render: (p) => <Action person={p} />,
		className: s.action,
	},
];

export const TableGallery = (): JSX.Element => (
	<Pane noPadding>
		<div className={s.container}>
			<Table rows={PEOPLE} columns={getColumns()} rowKey={(p) => p.id} />
		</div>
	</Pane>
);
