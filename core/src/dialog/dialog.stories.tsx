import { _Story } from "../_story";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Dialog, DialogPane } from "./dialog";
import { dialogAlert, dialogConfirm, dialogPrompt } from "../";

const _width = {
	content: "content",
	fixed: "fixed",
};

export default {
	title: "Components/Dialog",
	component: Dialog,
	argTypes: {
		width: _width,
	},
};

interface Props {
	width: "content" | "fixed";
}

export const Primary = (props: Props) => {
	return (
		<DialogPane width={props.width}>
			<Dialog.Body>
				<Dialog.Message
					children={[
						"Dialog title",
						"Dialog content. Lorem ipsum dolor sit amet, consectetur.",
					]}
				/>
			</Dialog.Body>
			<Dialog.Footer>
				<Button>Cancel</Button>
				<DivPx size={8} />
				<Button highlight>Publish</Button>
			</Dialog.Footer>
		</DialogPane>
	);
};

export const Alert = () => {
	const alert = () =>
		dialogAlert([
			"Cannot save post",
			"There was a network error. Please check your connection and try again.",
		]);
	return <Button onClick={alert} children="Show alert" />;
};

_Story.desc(Alert)(`
 Moai's alternative to window.alert
 See https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
`);

export const Confirm = () => {
	const confirm = () =>
		dialogConfirm([
			"Publish post?",
			"Published posts can be seen by anyone on the internet.",
		]);
	return <Button onClick={confirm} children="Show confirm" />;
};

_Story.desc(Confirm)(`
 Moai's alternative to window.confirm
 See https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
`);

export const Prompt = () => {
	const prompt = async () => {
		const title = await dialogPrompt([
			"Enter post title",
			"Post title is required to publish",
		]);
		if (!title) return;
		dialogAlert(`Post "${title}" is published!`);
	};
	return <Button onClick={prompt} children="Show prompt" />;
};

_Story.desc(Prompt)(`
 Moai's alternative to window.prompt
 See https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
`);
