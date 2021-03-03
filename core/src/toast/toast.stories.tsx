import { toast } from "./toast";
import { Button } from "../";
import { _Story } from "../_story";
import { toastTypes } from "./type/type";

export default {
	title: "Components/Toast",
	component: toast,
	argTypes: {
		type: _Story.arg(toastTypes),
		message: _Story.arg("text"),
	},
};

interface Props {
	type?: string | undefined;
	message?: string;
}

export const Primary = (props: Props) => {
	if (props.type === undefined) {
		props.type = "success";
	}

	if (props.message === undefined) {
		props.message =
			toastTypes[props.type] === toastTypes.success
				? "Post published"
				: "Cannot publish";
	}

	return (
		<div>
			<Button
				onClick={() => toast(toastTypes[props.type], props.message)}
			>
				Click to show toast
			</Button>
		</div>
	);
};

export const Usage = () => {
	return (
		<Button
			onClick={() =>
				toast(toastTypes.success, "Will render success pane")
			}
		>
			Success toast
		</Button>
	);
};

_Story.desc(Usage)(`
Using toast very easy, you just need declare toast with button and provide \`type: ToastType\` and \`message: string\`.

For example:

\`\`\`typescript
<Button onClick={() => toast(toastTypes.success, "Will render success pane" >
	Success toast
</Button>
\`\`\`
`);
