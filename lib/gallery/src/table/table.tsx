import { Fragment, useState } from "react";
import * as M from "../../../core/src";
import { Book, BOOKS } from "../example/normalizedBooks";
import s from "./table.module.css";
import { GoSearch } from "react-icons/go";

interface RowProps {
	book: Book;
}

type Column = (props: RowProps) => JSX.Element;

const SearchHeader = ({ children }: { children: string }): JSX.Element => (
	<div>
		<div>{children}</div>
		<M.DivPx size={8} />
		<M.Input icon={GoSearch} placeholder="Search" />
	</div>
);

const Overview: Column = ({ book }: RowProps) => (
	<div className={s.overview}>
		<img
			width="32"
			height="32"
			src={book.cover.small}
			alt={`Image of ${book.title}`}
			className="block"
		/>
		<M.DivPx size={8} />
		<p>{book.title}</p>
	</div>
);

const PublishDateHeader = (): JSX.Element => (
	<div>
		<div>Publish</div>
		<M.DivPx size={8} />
		<M.Input type="date" placeholder="Search" />
	</div>
);

const Subjects: Column = ({ book }: RowProps) => (
	<div className={s.subjects}>
		{book.subjects.map((subject) => (
			<Fragment key={subject}>{subject}, </Fragment>
		))}
	</div>
);

const PublishDate: Column = ({ book }: RowProps) => (
	<div>{book.publish_date}</div>
);

const Url: Column = ({ book }: RowProps) => (
	<M.Paragraph>
		<a>{book.url}</a>
	</M.Paragraph>
);

const Author: Column = ({ book }: RowProps) => (
	<div className={s.author}>{book.author}</div>
);

const getColumns = (): M.TableColumn<Book>[] => [
	{
		title: <SearchHeader children="Title" />,
		render: (book) => <Overview book={book} />,
	},
	{
		title: <SearchHeader children="Publish Date" />,
		render: (book) => <PublishDate book={book} />,
	},
	{
		title: <SearchHeader children="Author" />,
		render: (book) => <Author book={book} />,
	},
	{
		title: <SearchHeader children="Subject" />,
		render: (book) => <Subjects book={book} />,
	},
	{
		title: <SearchHeader children="Publishers" />,
		render: "publishers",
	},
];

export const GalleryTable = (): JSX.Element => {
	const [selected, setSelected] = useState<Set<string>>(new Set());

	const table = (
		<M.Table
			rows={BOOKS as Book[]}
			columns={getColumns()}
			rowKey={(book) => book.key}
			expandable={{ render: (book) => <Url book={book} /> }}
			selectable={{ selected, setSelected }}
			fixed={{ header: true, firstColumn: true }}
		/>
	);

	return (
		<div className={s.wrapper}>
			<M.Pane noPadding>
				<div className={s.container} children={table} />
			</M.Pane>
		</div>
	);
};
