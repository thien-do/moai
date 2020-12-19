import { Button, ButtonProps } from "../../../core/src";
import { icons } from "../../../icon/src";

const { flat } = Button.style;
const icon = icons.plus;

const base: ButtonProps = {
	children: "Button",
	onClick: () => window.alert("Hello!"),
};

const Row = (props: ButtonProps): JSX.Element => (
	<div className="flex space-x-8">
		<Button {...base} highlight {...props} />
		<Button {...base} {...props} />
		<Button {...base} icon={icon} {...props} />
		<Button
			{...base}
			children={undefined}
			iconLabel="Button"
			icon={icon}
			{...props}
		/>
		<Button {...base} highlight style={flat} {...props} />
		<Button {...base} style={flat} {...props} />
	</div>
);

export const GalleryButton = (): JSX.Element => (
	<div className="space-y-8">
		<Row />
		<Row disabled />
		<Row busy />
	</div>
);
