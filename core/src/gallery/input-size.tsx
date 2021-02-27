import {
	Button,
	ButtonGroup,
	ButtonSize,
	ButtonStyle,
	coreIcons,
	Input,
	InputSize,
	InputStyle,
} from "..";

const { search } = coreIcons;
const bs = Button.styles;
const is = Input.styles;

const button = (size: ButtonSize) => (
	<Button icon={search} iconLabel="Search" size={size} />
);
const input = (size: InputSize) => (
	<Input placeholder="With Button" size={size} />
);

const Column = ({ sizes }: { sizes: [ButtonSize, InputSize] }): JSX.Element => (
	<div className="space-y-8">
		<div style={{ minHeight: 32 }}>
			<Input icon={search} placeholder="With Icon" size={sizes[1]} />
		</div>
		<div style={{ minHeight: 32 }}>
			<ButtonGroup
				fill
				children={[
					{ fill: true, element: input(sizes[1]) },
					{ fill: false, element: button(sizes[0]) },
				]}
			/>
		</div>
		<div style={{ minHeight: 32 }}>
			<ButtonGroup
				fill
				children={[
					{ fill: false, element: button(sizes[0]) },
					{ fill: true, element: input(sizes[1]) },
				]}
			/>
		</div>
	</div>
);

export const InputSizeGallery = (): JSX.Element => (
	<div className="flex space-x-8">
		<Column sizes={[Button.sizes.medium, Input.sizes.medium]} />
		<Column sizes={[Button.sizes.small, Input.sizes.small]} />
	</div>
);
