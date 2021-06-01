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
[Input](https://docs.moaijs.com/?path=/docs/components-input--primary)). With
this prop, you can put an icon inside the desired component.
`,
});

export default meta;

// Is required by Storybook
export const Primary = (): JSX.Element => <div>Skipped</div>;

export const Usage = (): JSX.Element => (
	<div style={{ width: "25%" }}>
		<Button icon={coreIcons.caret} iconRight={true}>
			Foo
		</Button>
		<DivPx size={12} />
		<Input icon={coreIcons.check} placeholder="Foo" />
	</div>
);

Utils.story(Usage, {
	name: "Usage",
	desc: `
To display an icon inside a component (that has icon prop), you can choose one
from coreIcons component or create your own set of icons by using
[react-icons](https://react-icons.github.io/react-icons/).
Thus, some components might have other icon releated props for customization.
`,
});
