import { Button, ButtonGroup, ButtonProps } from "../../../core/src";
import { icons } from "../../../icon/src";

const { medium, small } = Button.size;
const { flat } = Button.style;
const icon = icons.plus;

const flatIcon: ButtonProps = { icon, style: flat };

export const GalleryButton3 = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Button children="Back" icon={icons.arrowLeft} />
			<Button children="Next" icon={icons.arrowRight} reverse />
		</div>
		<div className="flex space-x-8">
			<ButtonGroup>
				<Button icon={icons.plus} children="Add" />
				<Button icon={icons.caret} iconLabel="More" />
			</ButtonGroup>
			<Button iconLabel="Search" icon={icons.search} />
			<Button iconLabel="Search" icon={icons.search} disabled />
		</div>
		<div className="flex space-x-8">
			<Button icon={icon} size={medium} children="Medium" />
			<Button icon={icon} size={small} children="Small" />
			<Button icon={icon} size={small} iconLabel="Add" />
			<Button icon={icon} size={small} iconLabel="Add" busy />
		</div>
		<div className="flex space-x-8">
			<Button {...flatIcon} size={medium} children="Medium" />
			<Button {...flatIcon} size={small} children="Small" />
			<Button {...flatIcon} size={small} iconLabel="Add" />
			<Button {...flatIcon} size={small} iconLabel="Add" busy />
		</div>
	</div>
);
