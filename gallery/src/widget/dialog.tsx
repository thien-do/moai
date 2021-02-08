import * as M from "@moai/core/src";

const Pane = () => (
	<M.DialogPane width="content">
		<M.Dialog.Body>
			<M.Dialog.Message
				children={[
					"Dialog title",
					"Dialog content. Lorem ipsum dolor sit amet, consectetur.",
				]}
			/>
		</M.Dialog.Body>
		<M.Dialog.Footer>
			<div className="flex space-x-8">
				<M.Button>Cancel</M.Button>
				<M.Button highlight>Publish</M.Button>
			</div>
		</M.Dialog.Footer>
	</M.DialogPane>
);

const alert = () =>
	M.dialogAlert([
		"Cannot save post",
		"There was a network error. Please check your connection and try again.",
	]);

const confirm = () =>
	M.dialogConfirm([
		"Publish post?",
		"Published posts can be seen by anyone on the internet.",
	]);

const prompt = async () => {
	const title = await M.dialogPrompt([
		"Enter post title",
		"Post title is required to publish",
	]);
	if (!title) return;
	M.dialogAlert(`Post "${title}" is published!`);
};

export const DialogGallery = () => (
	<div className="space-y-8">
		<div className="flex space-x-8">
			<M.Button fill onClick={alert} children="Alert" />
			<M.Button fill onClick={confirm} children="Confirm" />
			<M.Button fill onClick={prompt} children="Prompt" />
		</div>
		<Pane />
	</div>
);
