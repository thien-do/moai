import * as M from "../components";
import { DateInput } from "../components";

const COLORS = [""];

export const GalleryInputType = (): JSX.Element => (
	<div className="space-y-8 flex-1" style={{ width: 180 }}>
		<div style={{ minHeight: 32 }}>
			<M.Input type="date" />
		</div>
		<div style={{ minHeight: 32 }}>
			<DateInput format={DateInput.formats.dmy} />
		</div>
		<div style={{ minHeight: 32 }}>
			<M.Input
				placeholder="Autocomplete"
				list={{ id: "sample-colors", values: COLORS }}
			/>
		</div>
		<div style={{ minHeight: 32 }}>
			<M.Input type="password" defaultValue="password" />
		</div>
	</div>
);
