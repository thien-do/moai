import { ReactElement } from "react";
import { DivPx, Icon } from "../../../core";
import { GallerySection } from "../../../gallery";
import * as outline from "./outline";
import * as solid from "./solid";
import * as colored from "./colored";

import s from "./gallery.module.css";

const IconSet = ({ icons }: { icons: Record<string, string> }): ReactElement => {
	return (
		<div className={s.set}>
			{Object.keys(icons).map((key) => (
				<div key={key} className={s.icon}>
					<Icon display="block" component={() => <img src={icons[key]} />} />
					<div className={s.label}>{key}</div>
				</div>
			))}
		</div>
	)
};

export const GalleryIcon = (): ReactElement => (
	<GallerySection title="Icons">
		<div className={s.container}>
			<h2 className={s.heading}>Colored set</h2>
			<IconSet icons={colored} />
			<DivPx size={32} />
			<h2 className={s.heading}>Outline set</h2>
			<IconSet icons={outline} />
			<DivPx size={32} />
			<h2 className={s.heading}>Solid set</h2>
			<IconSet icons={solid} />
		</div>
	</GallerySection>
);
