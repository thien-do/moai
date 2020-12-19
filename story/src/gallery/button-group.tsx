import { useState } from "react";
import { Button, ButtonGroup } from "../../../core/src";
import { icons } from "../../../icon/src";

const Theme = () => {
	const [value, setValue] = useState("Light");
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

export const GalleryButtonGroup = (): JSX.Element => (
	<div className="flex space-x-16">
		<ButtonGroup>
			<Button highlight icon={icons.plus} children="Button" />
			<Button highlight icon={icons.caret} iconLabel="More" />
		</ButtonGroup>
		<ButtonGroup>
			<Button icon={icons.plus} children="Button" />
			<Button icon={icons.caret} iconLabel="More" />
		</ButtonGroup>
		<Theme />
	</div>
);
