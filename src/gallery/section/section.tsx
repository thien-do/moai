import { DivPx } from "@moai/core";
import s from "./section.module.css";

interface Props {
	children: React.ReactNode;
	title: string;
}

export const GallerySection = (props: Props): JSX.Element => (
	<div className={s.container}>
		<div className={s.title}>
			<h2 className={s.heading} children={props.title} />
		</div>
		<DivPx size={16} />
		<div className={s.children} children={props.children} />
	</div>
);
