import * as M from "../..";
import { DivPx } from "../../components/div/div";
import { Robot, ROBOTS } from "./robots";
import s from "./table.module.css";

interface RowProps {
	robot: Robot;
}

type Column = (props: RowProps) => JSX.Element;

const SearchHeader = ({ children }: { children: string }): JSX.Element => (
	<div>
		<div>{children}</div>
		<DivPx size={8} />
		<M.Input icon={M.coreIcons.search} placeholder="Search" />
	</div>
);

const Overview: Column = ({ robot }) => (
	<div className={s.overviewCell}>
		<img
			width="32"
			height="32"
			src={robot.avatar}
			alt={`Image of ${robot.name.last}`}
			className="block"
			style={{ background: `${robot.color}20` }}
		/>
		<DivPx size={8} />
		<div>
			{robot.name.first} {robot.name.last}
		</div>
	</div>
);

const LastSeenHeader = (): JSX.Element => (
	<div>
		<div>Last seen</div>
		<DivPx size={8} />
		<M.Input type="date" placeholder="Search" />
	</div>
);

const Action: Column = ({ robot }) => (
	<div>
		{robot.deployed ? (
			<M.Button highlight children="Deploy" />
		) : (
			<>
				<M.Button children="Retreat" />
				<DivPx size={8} />
				<M.Button children="Upgrade" />
			</>
		)}
	</div>
);

// https://github.com/Marak/faker.js/blob/master/lib/locales/en/commerce/product_name.js#L21
const MATERIAL_TAGS = {
	Steel: M.Tag.colors.gray,
	Wooden: M.Tag.colors.yellow,
	Concrete: M.Tag.colors.green,
	Plastic: M.Tag.colors.blue,
	Cotton: M.Tag.colors.indigo,
	Granite: M.Tag.colors.purple,
	Rubber: M.Tag.colors.pink,
	Metal: M.Tag.colors.red,
	Soft: M.Tag.colors.gray,
	Fresh: M.Tag.colors.green,
	Frozen: M.Tag.colors.blue,
};

const MaterialsHeader = (): JSX.Element => (
	<div>
		<div>Materials</div>
		<DivPx size={8} />
		<M.Select
			options={[...Object.keys(MATERIAL_TAGS), "Filter: All"].map(
				M.Select.toStringOption
			)}
			defaultValue="Filter: All"
		/>
	</div>
);

const Materials: Column = ({ robot }) => (
	<div>
		{robot.materials.map((material) => (
			<div key={material}>
				<M.Tag
					color={(MATERIAL_TAGS as any)[material]}
					children={material}
				/>
			</div>
		))}
	</div>
);

const LastSeen: Column = ({ robot }) => (
	<div>{new Date(robot.lastSeen).toDateString()}</div>
);

const Note: Column = ({ robot }) => (
	<M.Paragraph>
		<span>{robot.note}</span>
		<span>{` — ${robot.name.last}`}</span>
	</M.Paragraph>
);

const Mac: Column = ({ robot }) => (
	<div>
		<M.Button
			size={M.Button.sizes.small}
			icon={M.coreIcons.duplicate}
			iconLabel="Copy"
		/>
		<DivPx size={8} />
		<div>{robot.MAC}</div>
	</div>
);

const getColumns = (): M.TableColumn<Robot>[] => [
	{
		title: <SearchHeader children="Bot" />,
		render: (robot) => <Overview robot={robot} />,
		className: s.overview,
	},
	{
		title: <LastSeenHeader />,
		render: (robot) => <LastSeen robot={robot} />,
		className: s.lastSeen,
	},
	{
		title: <SearchHeader children="MAC" />,
		render: (robot) => <Mac robot={robot} />,
		className: s.mac,
	},
	{
		title: <MaterialsHeader />,
		render: (robot) => <Materials robot={robot} />,
		className: s.materials,
	},
	{
		title: <SearchHeader children="Email" />,
		render: "email",
		className: s.email,
	},
	{
		title: "Action",
		render: (robot) => <Action robot={robot} />,
		className: s.action,
	},
];

export const TableGallery = (): JSX.Element => (
	<M.Pane noPadding>
		<div className={s.container}>
			<M.Table
				rows={ROBOTS}
				columns={getColumns()}
				rowKey={(robot) => robot.id}
				expandRowRender={(robot) => <Note robot={robot} />}
			/>
		</div>
	</M.Pane>
);
