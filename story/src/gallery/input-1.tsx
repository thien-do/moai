import { Input, InputStyle } from "../../../core/src";

const Column = ({ style }: { style: InputStyle }): JSX.Element => (
	<div style={{ width: 120 }} className="space-y-8">
		<Input style={style} defaultValue="Text field" />
		<Input style={style} defaultValue="" placeholder="Placeholder" />
		<Input style={style} defaultValue="Read-only" readOnly />
		<Input style={style} defaultValue="Disabled" disabled />
	</div>
);

export const GalleryInput1 = (): JSX.Element => (
	<div className="flex space-x-8">
		<Column style={Input.style.outset} />
		<Column style={Input.style.flat} />
	</div>
);
