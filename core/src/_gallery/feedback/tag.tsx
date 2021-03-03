import { DivPx, Tag } from "..";
import s from "../styles.module.css";

export const GalleryFeedbackTag = (): JSX.Element => (
	<div>
		<div>
			<span>Tag is </span>
			<Tag color={Tag.colors.gray}>inline</Tag>
		</div>
		<DivPx size={8} />
		<div
			className={[s.flex, s.flexWrap].join(" ")}
			style={{ margin: "-4" }}
		>
			{Object.keys(Tag.colors).map((color) => (
				<div key={color} className={s.p4}>
					<Tag color={(Tag.colors as any)[color]} children={color} />
				</div>
			))}
		</div>
	</div>
);
