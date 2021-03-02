import { Input, InputStyle } from "../components";

const Column = ({ style }: { style: InputStyle }): JSX.Element => (
	<div className="space-y-8 flex-1">
		<Input style={style} defaultValue="Text box" />
		<Input style={style} defaultValue="" placeholder="Placeholder" />
		<Input style={style} defaultValue="Read-only" readOnly />
		<Input style={style} defaultValue="Disabled" disabled />
	</div>
);

export const GalleryInputBase = (): JSX.Element => (
	<div className="flex space-x-8">
		<Column style={Input.styles.outset} />
		<Column style={Input.styles.flat} />
	</div>
);
