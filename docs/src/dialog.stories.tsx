import { Meta } from "@storybook/react";
import { useState } from "react";
import { Button, Dialog, DivGrow, DivPx, Paragraph } from "../../core/src";
import { Utils } from "./utils";

export default {
	title: "Components/Dialog",
	component: Dialog,
} as Meta;

export const Primary = (): JSX.Element => {
	const [visible, setVisible] = useState(false);
	const show = () => setVisible(true);
	const hide = () => setVisible(false);
	return (
		<>
			<Button onClick={show} children="Show a dialog" />
			{visible && (
				<Dialog onEsc={hide}>
					<Dialog.Body>
						<Dialog.Title>There was a network error</Dialog.Title>
						<Paragraph>
							Please check your connection and try again
						</Paragraph>
					</Dialog.Body>
					<Dialog.Footer>
						<Button minWidth highlight onClick={hide} autoFocus>
							OK
						</Button>
					</Dialog.Footer>
				</Dialog>
			)}
		</>
	);
};

export const Basic = (): JSX.Element => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Button onClick={() => setVisible(true)} children="Show" />
			{visible && (
				<Dialog onEsc={() => setVisible(false)}>Hello world!</Dialog>
			)}
		</>
	);
};

Utils.desc(Basic)(`
Dialog is just a component that renders some content on top of your app, on a
backdrop (thus the term "modal").

Using a dialog is similar to using a [controlled][1] component: you
maintain the state (i.e. whether the dialog should be visible) and set that
state upon the user's interaction (e.g. use Dialog's "onEsc" to set it to
false):

[1]: https://reactjs.org/docs/forms.html#controlled-components
`);

export const Layout = (): JSX.Element => (
	<Dialog.Pane>
		<Dialog.Body>
			<Dialog.Title>Title</Dialog.Title>
			<Paragraph>Body</Paragraph>
		</Dialog.Body>
		<Dialog.Footer>
			<Button>First</Button>
			<DivGrow />
			<Button>Second</Button>
			<DivPx size={16} />
			<Button highlight>Third</Button>
		</Dialog.Footer>
	</Dialog.Pane>
);

Utils.desc(Layout)(`
To allow maximum customization, Dialog renders its children as-is out of the
box (e.g. no padding or border). That being said, it also comes with supporting
components to help you easily build common dialog layout:

- \`Dialog.Body\` wraps its children inside a padding.
- \`Dialog.Footer\` places its children horizontally, aligned to end.
- \`Dialog.Title\` makes its children bold and larger, like a title.

Note that the example below uses \`Dialog.Pane\` instead of \`Dialog\` to
simplify the demo code. \`Pane\` just renders its children in-place, without any
backdrop or overlay. In practice, you should always use \`Dialog\`.
`);

export const Utilities = (): JSX.Element => (
	<Button
		onClick={async () => {
			const name = await Dialog.prompt("What's your name?");
			const yes = await Dialog.confirm(`Is your name: "${name}"?`);
			Dialog.alert(yes ? `Hello ${name}!` : "But you said so!");
		}}
		children="Ask name"
	/>
);

Utils.desc(Utilities)(`
The Dialog component has 3 static methods: \`Dialog.alert\`,
\`Dialog.confirm\`, and \`Dialog.prompt\` as alternatives to the browser's
built-in [\`alert\`][a], [\`confirm\`][c] and [\`prompt\`][p]. They have async
APIs and use Moai's components instead of the browser's built-in dialogs.

[a]: https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
[c]: https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
[p]: https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
`);
