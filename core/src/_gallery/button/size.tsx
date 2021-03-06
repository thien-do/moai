import { Button, ButtonGroup, coreIcons, DivPx } from "..";
import s from "../styles.module.css";

const ss = Button.sizes;
const mi = ss.mediumIcon;
const i = coreIcons;

const IconRow = ({ disabled }: { disabled: boolean }): JSX.Element => {
	const d = { disabled };
	return (
		<div className={s.flex}>
			<Button {...d} iconLabel="Search" icon={i.search} />
			<DivPx size={8} />
			<Button {...d} iconLabel="Search" icon={i.search} size={mi} />
			<DivPx size={8} />
			<ButtonGroup>
				<Button {...d} icon={i.plus} children="Add" />
				<Button {...d} icon={i.caret} iconLabel="More" size={mi} />
			</ButtonGroup>
		</div>
	);
};

export const GalleryButtonSize = (): JSX.Element => (
	<div className={s.flex}>
		<div>
			<Button icon={i.plus} size={ss.large} children="Large" />
			<DivPx size={8} />
			<Button icon={i.plus} size={ss.medium} children="Medium" />
			<DivPx size={8} />
			<Button icon={i.plus} size={ss.small} children="Small" />
		</div>
		<DivPx size={8} />
		<div>
			<div className={s.flex}>
				<Button children="Previous" icon={i.arrowLeft} />
				<DivPx size={8} />
				<Button children="Next" icon={i.arrowRight} reverse />
			</div>
			<DivPx size={8} />
			<IconRow disabled={false} />
			<DivPx size={8} />
			<IconRow disabled={true} />
		</div>
	</div>
);
