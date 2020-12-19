import { alert, Button, ButtonProps } from "../../../core/src";
import { icons } from "../../../icon/src";

const { flat } = Button.style;
const icon = icons.plus;

const hi = () =>
	alert(["You clicked the button", "Press enter or esc to close"], "content");

const base: ButtonProps = {
	children: "Button",
	onClick: hi,
};

const Row = (props: ButtonProps): JSX.Element => (
	<div className="flex space-x-8">
		<Button {...base} highlight {...props} />
		<Button {...base} {...props} />
		<Button {...base} icon={icon} {...props} />
		<Button onClick={hi} iconLabel="Button" icon={icon} {...props} />
		<Button {...base} style={flat} {...props} />
	</div>
);

export const GalleryButton = (): JSX.Element => (
	<div className="space-y-8">
		<Row />
		<Row selected />
		<Row disabled />
		<Row busy />
	</div>
);
