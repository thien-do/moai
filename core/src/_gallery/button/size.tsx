import * as go from "react-icons/go";
import { Button, ButtonGroup, coreIcons, DivPx } from "..";
import s from "../styles.module.css";

const ss = Button.sizes;
const mi = ss.mediumIcon;

const IconRow = ({ disabled }: { disabled: boolean }): JSX.Element => {
	const d = { disabled };
	return (
		<div className={s.flex}>
			<Button {...d} iconLabel="Search" icon={go.GoSearch} />
			<DivPx size={8} />
			<Button {...d} iconLabel="Search" icon={go.GoSearch} size={mi} />
			<DivPx size={8} />
			<ButtonGroup>
				<Button {...d} icon={go.GoPlus} children="Add" />
				<Button
					{...d}
					icon={go.GoKebabHorizontal}
					iconLabel="More"
					size={mi}
				/>
			</ButtonGroup>
		</div>
	);
};

export const GalleryButtonSize = (): JSX.Element => (
	<div className={s.flex}>
		<div>
			<Button icon={go.GoPlus} size={ss.large} children="Large" />
			<DivPx size={8} />
			<Button icon={go.GoPlus} size={ss.medium} children="Medium" />
			<DivPx size={8} />
			<Button icon={go.GoPlus} size={ss.small} children="Small" />
		</div>
		<DivPx size={8} />
		<div>
			<div className={s.flex}>
				<Button children="Previous" icon={go.GoChevronLeft} />
				<DivPx size={8} />
				<Button children="Next" icon={go.GoChevronRight} reverse />
			</div>
			<DivPx size={8} />
			<IconRow disabled={false} />
			<DivPx size={8} />
			<IconRow disabled={true} />
		</div>
	</div>
);
