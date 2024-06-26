import { useState } from "react";
import { ERRORS, FormValues, SubmitButton, postToServer } from "./utils";
import { Controller, useForm } from "react-hook-form";
import { FormError, Input, TextArea } from "../../../../core/src";
import s from "./form.module.css";

export const ReactHookFormExample = (): JSX.Element => {
	/* import { Input, Button, FormError } from "../../../core/src" */

	const { control, formState, handleSubmit } = useForm<FormValues>();
	const { errors } = formState;
	const [busy, setBusy] = useState(false);

	const title = (
		<div>
			<label htmlFor="rhf-title">Title</label>
			<Controller
				name="title"
				control={control}
				render={({ field }) => (
					<Input {...field} id="rhf-title" type="text" />
				)}
				rules={{ required: ERRORS.titleRequired }}
				defaultValue=""
			/>
			<FormError children={errors.title?.message} />
		</div>
	);

	const message = (
		<div>
			<label htmlFor="rhf-message">Message</label>
			<Controller
				name="message"
				control={control}
				render={({ field }) => <TextArea {...field} id="rhf-message" />}
				rules={{
					required: { value: true, message: ERRORS.messageRequired },
					minLength: { value: 5, message: ERRORS.messageLength },
				}}
				defaultValue=""
			/>
			<FormError children={errors.message?.message} />
		</div>
	);

	return (
		<form
			onSubmit={handleSubmit(async (data) => {
				setBusy(true);
				await postToServer(data);
				setBusy(false);
			})}
			className={s.form}
		>
			{title}
			{message}
			<SubmitButton busy={busy} />
		</form>
	);
};
