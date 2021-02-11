import { DateInput } from "@moai/core/src";

export const DateInputGallery = (): JSX.Element => (
	<div>
		<DateInput format={DateInput.formats.dmy} />
		<DateInput format={DateInput.formats.mdy} />
	</div>
);
