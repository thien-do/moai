import { Button, ButtonProps } from "../../../core/src";
import { icons } from "../../../icon/src";

const { medium, small } = Button.size;
const { flat } = Button.style;
const icon = icons.plus;

const flatIcon: ButtonProps = { icon, style: flat };

export const GalleryButtonSize = (): JSX.Element => (
	<div className="space-y-8">
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
		<div>
			<Button
				target="_blank"
				href="https://moai.xyz"
				children="Link to moai.xyz"
			/>
		</div>
	</div>
);
