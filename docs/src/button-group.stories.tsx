import { Meta } from "@storybook/react";
import { GoSearch } from "react-icons/go";
import { Button, ButtonGroup, Input, Select } from "../../core/src";

export default {
	title: "Draft/Button Group",
	component: ButtonGroup,
} as Meta;

export const Primary = (): JSX.Element => {
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
