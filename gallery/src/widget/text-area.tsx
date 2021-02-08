import { TextArea } from "@moai/core/src";

export const TextAreaGallery = (): JSX.Element => (
	<div className="space-y-8">
		<TextArea defaultValue="Text area" rows={2} />
		<TextArea defaultValue="Text area" rows={2} disabled />
	</div>
);
