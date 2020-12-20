import { useState } from "react";
import * as M from "../../../core/src";

const Foo = () => (
	<M.DialogPane width="content">
		<div style={{ width: 240 }}>
			<M.Dialog.Body>
				<M.Dialog.Message
					children={[
						"Publish post?",
						"Published posts can be seen by anyone on the internet.",
					]}
				/>
			</M.Dialog.Body>
		</div>
		<M.Dialog.Footer>
			<div className="flex space-x-8">
				<M.Button>Cancel</M.Button>
				<M.Button highlight>Publish</M.Button>
			</div>
		</M.Dialog.Footer>
	</M.DialogPane>
);

const alert = () =>
	M.alert([
		"Cannot save post",
		"There was a network error. Please check your connection and try again.",
	]);

const confirm = () =>
	M.confirm([
		"Publish post?",
		"Published posts can be seen by anyone on the internet.",
	]);

const prompt = async () => {
	const title = await M.prompt([
		"Enter post title",
		"Post title is required to publish",
	]);
	if (!title) return;
	M.alert(`Post "${title}" is published!`);
};

export const GalleryDialog = () => (
	<div className="space-y-8">
		<Foo />
		<div className="flex space-x-8">
			<M.Button onClick={alert} children="Alert" />
			<M.Button onClick={confirm} children="Confirm" />
			<M.Button onClick={prompt} children="Prompt" />
		</div>
	</div>
);
