import { NavbarElementProps } from "react-day-picker/types/Props";
import { Button } from "../../button/button";
import { coreIcons } from "../../icons/icons";
import s from "./navbar.module.css";

export const DateInputNavbar = (props: NavbarElementProps): JSX.Element => (
	<div className={[props.className, s.container].join(" ")}>
		<div className={s.previous}>
			<Button
				onClick={() => void props.onPreviousClick()}
				icon={coreIcons.chevronLeft}
				iconLabel="Previous month"
				size={Button.sizes.mediumIcon}
				style={Button.styles.flat}
			/>
		</div>
		<div className={s.next}>
			<Button
				onClick={() => void props.onNextClick()}
				icon={coreIcons.chevronRight}
				iconLabel="Next month"
				size={Button.sizes.mediumIcon}
				style={Button.styles.flat}
			/>
		</div>
	</div>
);
