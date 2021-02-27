import { Button, ButtonProps, dialogAlert } from "..";

const base: ButtonProps = {
	children: "Button",
	onClick: () =>
		dialogAlert(
			["You clicked the button", "Press enter or esc to close"],
			"content"
		),
};

const Row = (props: ButtonProps): JSX.Element => (
	<div className="flex space-x-8">
		<Button {...base} highlight {...props} />
		<Button {...base} {...props} />
		<Button {...base} style={Button.styles.flat} {...props} />
	</div>
);

export const Button1Gallery = (): JSX.Element => (
	<div className="space-y-8">
		<Row />
		<Row selected />
		<Row disabled />
		<Row busy />
	</div>
);
