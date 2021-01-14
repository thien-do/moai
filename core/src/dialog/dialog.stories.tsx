import { storiesOf } from "@storybook/react";
import { Button } from "../button/button";
import { DivPx } from "../div/div";
import { Dialog, DialogPane } from "./dialog";

storiesOf("Dialog", module).add("Main", () => (
	<div>
		<DialogPane width="content">
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
	</div>
));
