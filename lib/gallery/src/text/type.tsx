import * as M from "../../../core/src";
import s from "../styles.module.css";
import { MATERIALS } from "../table/robots";

export const GalleryTextType = (): JSX.Element => (
	<div className={s.flex1} style={{ width: 180 }}>
		<div style={{ minHeight: 32 }}>
			<M.Input type="date" placeholder="Native date input" />
		</div>
		<M.DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.DateInput />
		</div>
		<M.DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.Input
				placeholder="Autocomplete"
				list={{ id: "materials", values: MATERIALS }}
			/>
		</div>
		<M.DivPx size={8} />
		<div style={{ minHeight: 32 }}>
			<M.Input type="password" defaultValue="password" />
		</div>
	</div>
);
