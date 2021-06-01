import s from "./grid.module.css";
import { ColorStaticSample } from "./sample";

interface Props {
	name: string;
}

export const ColorStaticGrid = (props: Props): JSX.Element => (
	<div className={s.container}>
		{[...Array(10).keys()].map((value) => (
			<ColorStaticSample key={value} name={`${props.name}-${value}`} />
		))}
	</div>
);
