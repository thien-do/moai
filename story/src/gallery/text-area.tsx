import { TextArea } from "../../../core/src";

export const GalleryTextArea = (): JSX.Element => (
	<div style={{ width: 240 }} className="space-y-8">
		<TextArea defaultValue="Text area" rows={3} />
		<TextArea defaultValue="Text area" rows={3} disabled />
	</div>
);
