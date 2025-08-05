import { Fragment, useState } from "react";
import { Toggle } from "./toggle";
import { Meta, StoryObj } from "@storybook/react";
import { docsMetaArgTypes } from "main/src/docs/utils/arg-type";

const meta: Meta = {
	title: "Toggle",
	component: Toggle,
	argTypes: docsMetaArgTypes({
		"": {
			name: false,
			setValue: false,
			value: false,
			defaultValue: false,
			checked: false,
			defaultChecked: false,
		}
	})
};

export default meta;

export const Primary: StoryObj<typeof Toggle> = {
	render: () => {
		const [checked, setChecked] = useState<boolean>(false);
		return (
			<Fragment>
				<Toggle checked={checked} setValue={setChecked} />
				<br />
				<Toggle
					checked={!checked}
					setValue={(state) => setChecked(!state)}
				/>
			</Fragment >
		);
	}
};
