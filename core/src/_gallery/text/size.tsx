import * as M from "..";
import s from "../styles.module.css";

const { search } = M.coreIcons;

const button = (size: M.ButtonSize) => (
	<M.Button icon={search} iconLabel="Search" size={size} />
);
const input = (size: M.InputSize) => (
	<M.Input placeholder="With Button" size={size} />
);

const Column = ({ sizes }: { sizes: [M.ButtonSize, M.InputSize] }): JSX.Element => (
	<div>
		<div style={{ minHeight: 32 }}>
			<M.Input icon={search} placeholder="With Icon" size={sizes[1]} />
		</div>
		<M.DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.ButtonGroup
				fill
				children={[
					{ fill: true, element: input(sizes[1]) },
					{ fill: false, element: button(sizes[0]) },
				]}
			/>
		</div>
		<M.DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.ButtonGroup
				fill
				children={[
					{ fill: false, element: button(sizes[0]) },
					{ fill: true, element: input(sizes[1]) },
				]}
			/>
		</div>
	</div>
);

export const GalleryTextSize = (): JSX.Element => (
	<div className={s.flex}>
		<Column sizes={[M.Button.sizes.medium, M.Input.sizes.medium]} />
		<M.DivPx size={8} />
		<Column sizes={[M.Button.sizes.small, M.Input.sizes.small]} />
	</div>
);
