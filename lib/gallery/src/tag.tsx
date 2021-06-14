import { Tag } from "../../core/src";
import s from "./styles.module.css";

const getColor = (color: string): string => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (Tag.colors as any)[color];
};

export const GalleryTag = (): JSX.Element => (
	<div className={[s.cols, s.wrap].join(" ")}>
		{Object.keys(Tag.colors).map((color) => (
			<div key={color}>
				<Tag color={getColor(color)} children={color} />
			</div>
		))}
	</div>
);
