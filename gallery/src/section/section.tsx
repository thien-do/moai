export const Pane = ({
	fill,
	children,
}: {
	fill?: boolean;
	children: React.ReactNode;
}): JSX.Element => (
	<div style={{ width: fill ? "100%" : 320 }} children={children} />
);

export const Section = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}): JSX.Element => (
	<div className="flex flex-wrap border-0 p-8">
		<div className="p-8" style={{ width: 200 }}>
			<h2 className="text-xl font-semibold py-4 leading-24">{title}</h2>
		</div>
		<div className="flex flex-wrap w-full" style={{ maxWidth: 320 * 3 }}>
			{children}
		</div>
	</div>
);
