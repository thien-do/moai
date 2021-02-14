import { DateInput } from "@moai/core";

export const DateInputGallery = (): JSX.Element => (
	<div>
		<DateInput format={DateInput.formats.dmy} />
		<DateInput format={DateInput.formats.mdy} />
	</div>
);
