import { TextArea } from "../components";

export const GalleryTextArea = (): JSX.Element => (
	<div className="space-y-8">
		<TextArea defaultValue="Text area" rows={2} />
		<TextArea defaultValue="Text area" rows={2} disabled />
	</div>
);
