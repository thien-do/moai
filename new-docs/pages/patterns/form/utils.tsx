import { Button } from "../../../../core/src";

export interface FormValues {
	title: string;
	message: string;
}

export const ERRORS = {
	titleRequired: "Title is required",
	messageRequired: "Message is required",
	messageLength: "Message must be longer than 5 characters",
};

export const SubmitButton = ({ busy }: { busy: boolean }): JSX.Element => (
	<Button type="submit" highlight busy={busy} children="Submit" />
);

export const postToServer = async (values: FormValues): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			resolve();
		}, 500);
	});
};
