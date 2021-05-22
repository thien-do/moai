import * as M from "../../core/src";
import { Shot } from "./shot/shot";

const Pane = () => (
	<M.Dialog.Pane width="content">
		<M.Dialog.Body>
			<M.Dialog.Title>Dialog title</M.Dialog.Title>
			<M.Paragraph>
				Dialog content. Lorem ipsum dolor sit amet, consectetur.
			</M.Paragraph>
		</M.Dialog.Body>
		<M.Dialog.Footer>
			<M.Button minWidth children="Cancel" />
			<M.Button minWidth highlight children="Publish" />
		</M.Dialog.Footer>
	</M.Dialog.Pane>
);

const alert = () =>
	M.Dialog.alert("Cannot save post. There was a network error.");

const confirm = () => M.Dialog.confirm("Publish post?");

const prompt = async () => {
	const title = await M.Dialog.prompt("Enter post title");
	if (!title) return;
	M.Dialog.alert(`Post "${title}" is published!`);
};

export const GalleryDialog = (): JSX.Element => (
	<Shot>
		<div style={{ display: "flex", gap: 8 }}>
			<M.Button fill onClick={alert} children="Alert" />
			<M.Button fill onClick={confirm} children="Confirm" />
			<M.Button fill onClick={prompt} children="Prompt" />
		</div>
		<M.DivPx size={8} />
		<Pane />
	</Shot>
);
