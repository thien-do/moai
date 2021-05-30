import { Meta } from "@storybook/react";
import { Button, Popover, PopoverPlacement } from "../../../core/src";
import { Utils } from "../utils/utils";

const placements: PopoverPlacement[] = [
	"top",
	"top-start",
	"top-end",
	"right",
	"right-start",
	"right-end",
	"bottom",
	"bottom-start",
	"bottom-end",
	"left",
	"left-start",
	"left-end",
	"auto",
	"auto-start",
	"auto-end",
];

const meta: Meta = {
	title: "Components/Popover",
	component: Popover,
	argTypes: {
		placement: Utils.arg(placements),
		target: Utils.arg(null),
		content: Utils.arg(null),
		TargetWrapper: Utils.arg(null),
	},
};

Utils.page.component(meta, { primary: "sticky", shots: [] });

export default meta;

interface Props {
	placement?: PopoverPlacement;
}

export const Primary = (props: Props): JSX.Element => (
	<Popover
		placement={props.placement}
		target={(popover) => (
			<Button onClick={popover.toggle} children="Show popover" />
		)}
		content={() => <div style={{ padding: 8 }} children="Hello" />}
	/>
);

export const Basic = (): JSX.Element => (
	<Popover
		target={(popover) => (
			<Button
				onClick={() => popover.toggle()}
				selected={popover.opened}
				children="Show popover"
			/>
		)}
		content={() => "Hello"}
	/>
);

Utils.story(Basic, {
	
	desc: `
A popover consists of 2 parts: a "content" and a "target". They are both
[render props][1].

The \`content\` prop expects a function that returns what to be rendered inside
the pop-up container. This is a function to avoid unnecessary renders (e.g.
when the popover is not activated).

The \`target\` prop expects a function that returns an element. This element
is always rendered, and should use the \`popover\` param to activate the
popover on users' action. The \`popover\` param has the following interface:

~~~ts
interface PopoverTarget {
	// Open or close the popover
	toggle: () => void;
	// "true" if the popover is opened
	opened: boolean;
}
~~~

This means Popover is similar to an [uncontrolled][2] component. You cannot
control whether a popover is opened via a prop, but instead can only "trigger"
it, imperatively, via the callback you received.

[1]: https://reactjs.org/docs/render-props.html
[2]: https://reactjs.org/docs/uncontrolled-components.html
`,
});

export const TargetWrapper = (): JSX.Element => (
	<Popover
		content={() => "Hello"}
		target={(popover) => <span onClick={popover.toggle}>Click me!</span>}
		TargetWrapper={Popover.targetWrappers.inline}
	/>
);

Utils.story(TargetWrapper, {
	
	desc: `
In order to position the content relative to the target, Popover needs to wrap
the target inside a wrapper. By default, this wrapper is an HTML \`div\`
element with a \`width: fit-content\`. This should work for most cases, but
there are also other wrappers at \`Popover.targetWrappers\` for other cases:

- \`inline\` should be used when your \`target\` is an [inline][1] element,
such as a \`<span />\`.
- \`block\` should be used when you don't want the \`fit-content\` width, e.g.
for full-width buttons.

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
`,
});

export const PlacementExample = (): JSX.Element => (
	<Popover
		placement="right"
		target={(popover) => (
			<Button onClick={popover.toggle} children="Show popover" />
		)}
		content={() => <div style={{ padding: 8 }} children="Hello" />}
	/>
);

Utils.story(PlacementExample, {
	name: "Placement",
	
	desc: `
By default, Popover positions its content on top of its target. This can be
changed by the \`placement\` prop, which expects a string of [Popper.js'
\`placement\`][1] option. You can see (and try!) all available placements at
the [props table][2] below.

Note that this is more like a suggestion. If there is no space in the selected
placement, Popover will choose another placement, usually the opposite
one, to keep the content in the viewport.

[1]: https://popper.js.org/docs/v2/constructors/#options
[2]: #props
`,
});
