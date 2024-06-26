import { GoSearch } from "react-icons/go";
import { Button, ButtonGroup, Input, Select } from "@moai/core/src";

export const ButtonGroupExample = (): JSX.Element => {
	const input = <Input placeholder="Search" />;
	const button = <Button icon={GoSearch} iconLabel="Search" />;
	const select = <Select options={["Posts"].map(Select.toStringOption)} />;
	return (
		<div style={{ width: 320 }}>
			<ButtonGroup>
				{[
					{ fill: false, element: select },
					{ fill: true, element: input },
					{ fill: false, element: button },
				]}
			</ButtonGroup>
		</div>
	);
};
