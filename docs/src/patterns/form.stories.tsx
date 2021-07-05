import { Meta } from "@storybook/react/types-6-0";
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import { CSSProperties, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, FormError, Input, TextArea } from "@moai/core";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Patterns/Form",
};

Utils.page.pattern(meta, {
	desc: `
Moai doesn't come with a built-in form solution. Instead, our input components
(like [Input][3] and [TextArea][4]) are designed to work with popular form
builders (such as [Formik][1] and [React Hook Form][2]) out of the box.

[1]: https://formik.org/
[2]: https://react-hook-form.com/
[3]: /docs/components-input--primary
[4]: /docs/components-textarea--primary
`,
});

export default meta;

interface FormValues {
	title: string;
	message: string;
}

const ERRORS = {
	titleRequired: "Title is required",
	messageRequired: "Message is required",
	messageLength: "Message must be longer than 5 characters",
};

const formStyles: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	gap: 16,
};

const SubmitButton = ({ busy }: { busy: boolean }): JSX.Element => (
	<Button type="submit" highlight busy={busy} children="Submit" />
);

const postToServer = async (values: FormValues): Promise<void> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			resolve();
		}, 500);
	});
};

// Is required by Storybook
export const Primary = (): JSX.Element => <div>Skipped</div>;

export const FormikExample = (): JSX.Element => {
	/* import { Input, Button, FormError } from "@moai/core" */

	const title = (
		<div>
			<label htmlFor="fm-title">Title</label>
			<Field id="fm-title" type="text" name="title" as={Input} />
			<ErrorMessage name="title" component={FormError} />
		</div>
	);

	const message = (
		<div>
			<label htmlFor="fm-message">Message</label>
			<Field id="fm-message" name="message" as={TextArea} />
			<ErrorMessage name="message" component={FormError} />
		</div>
	);

	const validate = (values: FormValues): FormikErrors<FormValues> => {
		const errors: FormikErrors<FormValues> = {};
		if (!values.title) errors.title = ERRORS.titleRequired;
		if (!values.message) errors.message = ERRORS.messageRequired;
		if (values.message.length < 5) errors.message = ERRORS.messageLength;
		return errors;
	};

	return (
		<Formik<FormValues>
			initialValues={{ title: "", message: "" }}
			validate={validate}
			onSubmit={async (values, { setSubmitting }) => {
				await postToServer(values);
				setSubmitting(false);
			}}
			children={({ isSubmitting: busy }) => (
				<Form style={formStyles}>
					{title}
					{message}
					<SubmitButton busy={busy} />
				</Form>
			)}
		/>
	);
};

Utils.story(FormikExample, {
	name: "Formik",
	desc: `
To use Moai's input components with Formik, pass them to the "as" prop of
Formik's [Field][1] component:

[1]: https://formik.org/docs/api/field

~~~tsx
import { Field } from "formik";
import { Input } from "@moai/core";

<label htmlFor="email">Email</label>
<Field id="email" type="email" name="email" as={Input} />
~~~

To show errors, pass FormError to the "component" prop of Formik's
[ErrorMessage][2] component:

~~~tsx
import { ErrorMessage } from "formik";
import { FormError } from "@moai/core";

<ErrorMessage name="email" component={FormError} />
~~~

[2]: https://formik.org/docs/api/errormessage

Full example:
`,
});

export const ReactHookForm = (): JSX.Element => {
	/* import { Input, Button, FormError } from "@moai/core" */

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
			style={formStyles}
		>
			{title}
			{message}
			<SubmitButton busy={busy} />
		</form>
	);
};

Utils.story(ReactHookForm, {
	desc: `
To use Moai's input components with React Hook Form, [render][2] them in the
"render" prop of RHF's [Controller][1] component:

~~~tsx
import { Controller } from "react-hook-form";
import { Input } from "@moai/core";

<label htmlFor="email">Email</label>
<Controller
	name="email"
	control={control}
	render={({ field }) => (
		<Input {...field} id="email" type="email" />
	)}
	rules={{ required: "Email is required" }}
/>
~~~

[1]: https://react-hook-form.com/api#Controller
[2]: https://react-hook-form.com/get-started#IntegratingwithUIlibraries

To show errors, pass RHF's [error messages][3] as children of Moai's FormError
component:

~~~tsx
import { FormError } from "@moai/core";

<FormError children={errors.email?.message} />
~~~

[3]: https://react-hook-form.com/advanced-usage#ErrorMessages

Full example:
`,
});
