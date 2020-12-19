import { useState } from "react";
import { Button, ButtonGroup } from "../../../core/src";
import { icons } from "../../../icon/src";

const Theme = () => {
	const [value, setValue] = useState("Auto");
	return (
		<ButtonGroup>
			{["Light", "Auto", "Dark"].map((id) => (
				<Button
					key={id}
					children={id}
					selected={value === id}
					onClick={() => setValue(id)}
				/>
			))}
		</ButtonGroup>
	);
};

const Toggle = (): JSX.Element => {
	const [selected, setSelected] = useState(false);
	return (
		<Button
			children="Toggle"
			selected={selected}
			onClick={() => setSelected(!selected)}
		/>
	);
};

export const GalleryButtonGroup = (): JSX.Element => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<Toggle />
			<Theme />
		</div>
		<div className="flex space-x-8">
			<Button children="Back" icon={icons.arrowLeft} />
			<Button children="Next" icon={icons.arrowRight} reverse />
			<Button iconLabel="Search" icon={icons.search} />
		</div>
		<div>
			<ButtonGroup>
				<Button icon={icons.plus} children="Add" />
				<Button icon={icons.caret} iconLabel="More" />
			</ButtonGroup>
		</div>
		<div>
			<Button fill children="Filled Button" />
		</div>
	</div>
);
