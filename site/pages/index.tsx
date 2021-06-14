import { background, Border } from "@moai/core";
import { Gallery } from "@moai/gallery";
import "@moai/gallery/dist/bundle.css";
import { Hero } from "../components/hero/hero";
import { Toolbar } from "../components/toolbar/toolbar";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div className={s.container}>
		<div className={[background.weak].join(" ")}>
			<div className={s.content} children={<Hero />} />
			<Border color="strong" />
		</div>
		<div className={[background.strong, s.body].join(" ")}>
			<div className={[s.toolbar, s.content].join(" ")}>
				<Toolbar />
			</div>
			<div className={[s.gallery, s.content].join(" ")}>
				<Gallery />
			</div>
		</div>
	</div>
);

export default Index;
