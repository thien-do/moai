import { Meta } from "@storybook/react/types-6-0";
import {
	ErrorMessage,
	FormikProps,
	Field,
	Form,
	Formik,
	FormikErrors,
} from "formik";
import React from "react";
import { _Story } from "../_story";
import { Input } from "../input/input";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { FormError } from "./form";
import { text } from "../text/text";

export default {
	title: "Guides/Form",
	component: null,
	parameters: {
		docs: {
			description: {
				component: `
Moai doesn't come with a built-in form solution. Instead, our components (like
[Input][3] and [TextArea][4]) are designed to work with popular form builders
(such as [Formik][1] or [React Hook Form][2]) out of the box. This page
showcases these usages.

[1]: https://formik.org/
[2]: https://react-hook-form.com/
[3]: /docs/components-input--primary
[4]: /docs/components-textarea--primary
`,
			},
		},
	},
} as Meta;

interface FormValues {
	email: string;
	password: string;
}

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const Primary = (): JSX.Element => (
	<div className={text.muted}>
		This is a dummy element to bypass the Primary canvas requirement of
		StoryBook
	</div>
);

export const FormikExample = (): JSX.Element => {
	/* import { Input, Button, FormError } from "@moai/core" */

	const render = ({ isSubmitting }: FormikProps<FormValues>) => (
		<Form>
			<label htmlFor="email">Email</label>
			<Field id="email" type="email" name="email" as={Input} />
			<ErrorMessage name="email" component={FormError} />
			<DivPx size={16} />

			<label htmlFor="password">Password</label>
			<Field id="password" type="password" name="password" as={Input} />
			<ErrorMessage name="password" component={FormError} />
			<DivPx size={16} />

			<Button type="submit" highlight busy={isSubmitting}>
				Submit
			</Button>
		</Form>
	);
	return (
		<div style={{ width: 240 }}>
			<Formik<FormValues>
				initialValues={{ email: "", password: "" }}
				validate={(values) => {
					const errors: FormikErrors<FormValues> = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (!emailRegex.test(values.email)) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
				children={render}
			/>
		</div>
	);
};

_Story.desc(FormikExample)(`
Moai's [Input][3] and [TextArea][4] can be passed directly to the "as" prop of
Formik's [Field][1] component. Similarly, FormError should be passed to the
"component" prop of Formik's [ErrorMessage][2] component.

[1]: https://formik.org/docs/api/field
[2]: https://formik.org/docs/api/errormessage
[3]: /docs/components-input--primary
[4]: /docs/components-textarea--primary

We are working on [Select][5] and other input components.

[5]: /docs/components-textarea--primary
`);
_Story.name(FormikExample, "Formik");
