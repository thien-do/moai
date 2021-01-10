import { Button, ButtonGroup, ButtonProps, coreIcons } from "@moai/core";

const { medium, small } = Button.sizes;
const { flat } = Button.styles;

const Plus = coreIcons.plus;

const flatIcon: ButtonProps = { icon: Plus, style: flat };

export const Button3Gallery = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Button children="Back" icon={coreIcons.arrowLeft} />
			<Button children="Next" icon={coreIcons.arrowRight} reverse />
			<Button iconLabel="Search" icon={coreIcons.search} />
			<Button iconLabel="Search" icon={coreIcons.search} disabled />
		</div>
		<div className="flex space-x-8">
			<ButtonGroup>
				<Button icon={Plus} children="Add" />
				<Button icon={coreIcons.caret} iconLabel="More" />
			</ButtonGroup>
			<ButtonGroup>
				<Button disabled icon={Plus} children="Add" />
				<Button disabled icon={coreIcons.caret} iconLabel="More" />
			</ButtonGroup>
		</div>
		<div className="flex space-x-8">
			<Button icon={Plus} size={medium} children="Medium" />
			<Button icon={Plus} size={small} children="Small" />
			<Button icon={Plus} size={small} iconLabel="Add" />
			<Button icon={Plus} size={small} iconLabel="Add" busy />
		</div>
		<div className="flex space-x-8">
			<Button {...flatIcon} size={medium} children="Medium" />
			<Button {...flatIcon} size={small} children="Small" />
			<Button {...flatIcon} size={small} iconLabel="Add" />
			<Button {...flatIcon} size={small} iconLabel="Add" busy />
		</div>
	</div>
);
