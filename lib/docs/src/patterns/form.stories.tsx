import { Meta } from "@storybook/react/types-6-0";
import { ErrorMessage, Field, Form, Formik, FormikErrors } from "formik";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, DivPx, FormError, Input } from "../../../core/src";
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
	email: string;
	pass: string;
}

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

	const email = (
		<>
			<label htmlFor="fm-email">Email</label>
			<Field id="fm-email" type="email" name="email" as={Input} />
			<ErrorMessage name="email" component={FormError} />
		</>
	);

	const password = (
		<>
			<label htmlFor="fm-pass">Password</label>
			<Field id="fm-pass" type="password" name="pass" as={Input} />
			<ErrorMessage name="pass" component={FormError} />
		</>
	);

	return (
		<Formik<FormValues>
			initialValues={{ email: "", pass: "" }}
			validate={(values) => {
				const errors: FormikErrors<FormValues> = {};
				if (!values.email) errors.email = "Email is required";
				if (!values.pass) errors.pass = "Password is required";
				return errors;
			}}
			onSubmit={async (values, { setSubmitting }) => {
				await postToServer(values);
				setSubmitting(false);
			}}
			children={({ isSubmitting: busy }) => (
				<Form>
					{email}
					<DivPx size={16} />
					{password}
					<DivPx size={16} />
					<Button
						type="submit"
						highlight
						busy={busy}
						children="Submit"
					/>
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

	const email = (
		<>
			<label htmlFor="rhf-email">Email</label>
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<Input {...field} id="rhf-email" type="email" />
				)}
				rules={{ required: "Email is required" }}
				defaultValue=""
			/>
			<FormError children={errors.email?.message} />
		</>
	);

	const password = (
		<>
			<label htmlFor="rhf-pass">Password</label>
			<Controller
				name="pass"
				control={control}
				render={({ field }) => (
					<Input {...field} id="rhf-pass" type="password" />
				)}
				rules={{ required: "Password is required" }}
				defaultValue=""
			/>
			<FormError children={errors.pass?.message} />
		</>
	);

	return (
		<form
			onSubmit={handleSubmit(async (data) => {
				setBusy(true);
				await postToServer(data);
				setBusy(false);
			})}
		>
			{email}
			<DivPx size={16} />
			{password}
			<DivPx size={16} />
			<Button type="submit" highlight busy={busy} children="Submit" />
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
