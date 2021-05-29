import { Button, toast } from "../../../core/src";
import { Utils } from "../utils/utils";

export default {
	title: "Components/Toast",
	component: toast,
	argTypes: {
		type: Utils.arg(toast.types),
	},
};

interface Props {
	type?: string | undefined;
}

export const Primary = (props: Props): JSX.Element => {
	if (props.type === undefined) props.type = "success";

	return (
		<div>
			<Button
				onClick={() =>
					// eslint-disable-next-line
					toast((toast.types as any)[props.type!], "Message")
				}
			>
				Click to show toast
			</Button>
		</div>
	);
};

Utils.fixPrimary(Primary);

export const Usage = (): JSX.Element => {
	return (
		<Button
			onClick={() =>
				toast(toast.types.success, "Will render success pane")
			}
		>
			Success toast
		</Button>
	);
};

Utils.story(Usage, { desc: `
Using toast very easy, you just need declare toast with button and provide \`type: ToastType\` and \`message: string\`.

For example:

\`\`\`typescript
<Button onClick={() => toast(toastTypes.success, "Will render success pane" >
	Success toast
</Button>
\`\`\`
`});
