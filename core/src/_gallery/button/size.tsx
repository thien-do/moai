import {
	Button,
	ButtonGroup,
	ButtonProps,
	coreIcons,
	DivPx,
} from "..";
import s from "../styles.module.css";

const { medium, small } = Button.sizes;
const { flat } = Button.styles;

const Plus = () => coreIcons.plus;

const flatIcon: ButtonProps = { icon: Plus(), style: flat };

export const GalleryButtonSize = (): JSX.Element => (
	<div>
		<div className={s.flex}>
			<Button children="Back" icon={coreIcons.arrowLeft} />
			<DivPx size={8} />
			<Button children="Next" icon={coreIcons.arrowRight} reverse />
			<DivPx size={8} />
			<Button iconLabel="Search" icon={coreIcons.search} />
			<DivPx size={8} />
			<Button iconLabel="Search" icon={coreIcons.search} disabled />
		</div>
		<DivPx size={8} />
		<div className={s.flex}>
			<ButtonGroup>
				<Button icon={Plus()} children="Add" />
				<Button icon={coreIcons.caret} iconLabel="More" />
			</ButtonGroup>
			<DivPx size={8} />
			<ButtonGroup>
				<Button disabled icon={Plus()} children="Add" />
				<Button disabled icon={coreIcons.caret} iconLabel="More" />
			</ButtonGroup>
		</div>
		<DivPx size={8} />
		<div className={s.flex}>
			<Button icon={Plus()} size={medium} children="Medium" />
			<DivPx size={8} />
			<Button icon={Plus()} size={small} children="Small" />
			<DivPx size={8} />
			<Button icon={Plus()} size={small} iconLabel="Add" />
			<DivPx size={8} />
			<Button icon={Plus()} size={small} iconLabel="Add" busy />
		</div>
		<DivPx size={8} />
		<div className={s.flex}>
			<Button {...flatIcon} size={medium} children="Medium" />
			<DivPx size={8} />
			<Button {...flatIcon} size={small} children="Small" />
			<DivPx size={8} />
			<Button {...flatIcon} size={small} iconLabel="Add" />
			<DivPx size={8} />
			<Button {...flatIcon} size={small} iconLabel="Add" busy />
		</div>
	</div>
);
