import { Button, Dialog, DivGrow, Paragraph } from "@moai/core";
import { screen } from "@testing-library/react";
import { useState } from "react";

export const LABELS = {
	HELLO_WORLD: "Hello World!",
	SHOW: "Show",
	CANCEL: "Cancel",
	OK: "OK",
};
export const expectDialogTruthy = (): void =>
	expect(screen.queryByRole("dialog")).toBeTruthy();
export const expectDialogFalsy = (): void =>
	expect(screen.queryByRole("dialog")).toBeFalsy();

export const ComponentMock = (): JSX.Element => {
	const [visible, setVisible] = useState<boolean>(false);
	return (
		<>
			<Button onClick={() => setVisible(true)} children="Show" />
			{visible && (
				<Dialog onEsc={() => setVisible(false)}>
					<Dialog.Body>
						<Dialog.Title>Title</Dialog.Title>
						<Paragraph>Body</Paragraph>
					</Dialog.Body>
					<Dialog.Footer>
						<Button>First</Button>
						<DivGrow />
						<Button>Second</Button>
						<Button highlight>Third</Button>
					</Dialog.Footer>
				</Dialog>
			)}
		</>
	);
};
export const createUtilitiesButtonMock = (name: string): JSX.Element => (
	<Button
		onClick={async () => {
			switch (name) {
				case "Dialog.alert":
					await Dialog.alert(LABELS.HELLO_WORLD);
					break;
				case "Dialog.confirm":
					await Dialog.confirm(LABELS.HELLO_WORLD);
					break;
				case "Dialog.prompt":
					await Dialog.prompt(LABELS.HELLO_WORLD);
					break;
				default:
					break;
			}
		}}
		children={LABELS.SHOW}
	/>
);
