import * as M from "..";
import { DivPx } from "../../div/div";
import s from "../styles.module.css";

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
			<div className={s.flex}>
				<M.Button>Cancel</M.Button>
				<DivPx size={8} />
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

export const GalleryContainerDialog = () => (
	<div>
		<div className={s.flex}>
			<M.Button fill onClick={alert} children="Alert" />
			<M.DivPx size={8} />
			<M.Button fill onClick={confirm} children="Confirm" />
			<M.DivPx size={8} />
			<M.Button fill onClick={prompt} children="Prompt" />
		</div>
		<M.DivPx size={8} />
		<Pane />
	</div>
);
