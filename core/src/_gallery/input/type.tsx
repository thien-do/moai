import * as M from "..";
import { DivPx } from "../../div/div";
import s from "../styles.module.css";

const COLORS = [""];

export const GalleryInputType = (): JSX.Element => (
	<div className={s.flex1} style={{ width: 180 }}>
		<div style={{ minHeight: 32 }}>
			<M.Input type="date" />
		</div>
		<DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.DateInput />
		</div>
		<DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.Input
				placeholder="Autocomplete"
				list={{ id: "sample-colors", values: COLORS }}
			/>
		</div>
		<DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.Input type="password" defaultValue="password" />
		</div>
	</div>
);
