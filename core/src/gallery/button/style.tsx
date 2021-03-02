import { DivPx, Button, ButtonProps, dialogAlert } from "../../components";
import s from "../styles.module.css";

const base: ButtonProps = {
	children: "Button",
	onClick: () =>
		dialogAlert(
			["You clicked the button", "Press enter or esc to close"],
			"content"
		),
};

const Row = (props: ButtonProps): JSX.Element => (
	<div className={s.flex}>
		<Button {...base} highlight {...props} />
		<DivPx size={8} />
		<Button {...base} {...props} />
		<DivPx size={8} />
		<Button {...base} style={Button.styles.flat} {...props} />
	</div>
);

export const GalleryButtonStyle = (): JSX.Element => (
	<div>
		<Row />
		<DivPx size={8} />
		<Row selected />
		<DivPx size={8} />
		<Row disabled />
		<DivPx size={8} />
		<Row busy />
	</div>
);
