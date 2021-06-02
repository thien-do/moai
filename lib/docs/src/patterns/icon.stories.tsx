import { Meta } from "@storybook/react/types-6-0";
import { coreIcons, Button, Input, DivPx } from "../../../core/src";
import { Utils } from "../utils/utils";

const meta: Meta = {
	title: "Patterns/Icon",
};

Utils.page.pattern(meta, {
	desc: `
There are several components across moai that have the icon property (like
[Button](https://docs.moaijs.com/?path=/docs/components-button--primary) and
[Input](https://docs.moaijs.com/?path=/docs/components-input--primary)). You can
use this prop to display an icon inside desired component.
`,
});

export default meta;

// Is required by Storybook
export const Primary = (): JSX.Element => <div>Skipped</div>;

export const Basic = (): JSX.Element => (
	<div style={{ width: "25%", display: "flex" }}>
		<Input icon={coreIcons.check} placeholder="Foo" />
		<DivPx size={12} />
		<Button icon={coreIcons.caret} iconRight={true}>
			Foo
		</Button>
	</div>
);

Utils.story(Basic, {
	name: "Basic",
	desc: `
To get started, you need to put an icon that has IconType as the value. There
are some ways for you to get this icon: you can either choose one from our
coreIcons component or create your own set of icons by using
[react-icons](https://react-icons.github.io/react-icons/).
Thus, some components might have other icon releated props for customization.
`,
});
