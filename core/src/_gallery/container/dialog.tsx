import * as M from "..";
import { Paragraph } from "../../text/text";
import s from "../styles.module.css";

const Pane = () => (
	<M.Dialog.Pane width="content">
		<M.Dialog.Body>
			<M.Dialog.Title>Dialog title</M.Dialog.Title>
			<Paragraph>
				Dialog content. Lorem ipsum dolor sit amet, consectetur.
			</Paragraph>
		</M.Dialog.Body>
		<M.Dialog.Footer>
			<div className={s.flex}>
				<M.Button minWidth>Cancel</M.Button>
				<M.DivPx size={8} />
				<M.Button minWidth highlight>
					Publish
				</M.Button>
			</div>
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

export const GalleryContainerDialog = (): JSX.Element => (
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
