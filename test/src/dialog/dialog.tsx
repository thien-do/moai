import { Dialog } from "@moai/core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEscEvent, getButton } from "../utils";
import {
	ComponentMock,
	createUtilitiesButtonMock,
	expectDialogFalsy,
	expectDialogTruthy,
	LABELS,
} from "./utils";

const clickMock = jest.fn();

const expectElementsTruthy = (): void => {
	expectDialogTruthy();
	["First", "Second", "Third"].forEach((button) => {
		expect(screen.queryByRole("button", { name: button })).toBeTruthy();
	});
	expect(screen.getByTestId("dialogBody")).toBeTruthy();
	expect(screen.getByTestId("dialogTitle")).toBeTruthy();
	expect(screen.getByTestId("dialogFooter")).toBeTruthy();
};

describe("Dialog", () => {
	beforeEach(() => {
		jest.spyOn(console, "error").mockImplementation(() => void 0);
	});

	describe("Dialog itself (unit)", () => {
		it("render Dialog correctly", () => {
			render(<Dialog onEsc={clickMock}>{LABELS.HELLO_WORLD}</Dialog>);

			expectDialogTruthy();
			expect(screen.getByText(LABELS.HELLO_WORLD)).toBeTruthy();
		});

		it('call its onEsc function when the user press the "Esc" key', () => {
			render(<Dialog onEsc={clickMock}>{LABELS.HELLO_WORLD}</Dialog>);

			expectDialogTruthy();
			fireEscEvent(screen.getByRole("dialog"));

			expect(clickMock).toHaveBeenCalled();
			expect(clickMock).toHaveBeenCalledTimes(1);
		});

		it("call its onEsc function when the user click on the backdrop", () => {
			render(<Dialog onEsc={clickMock}>{LABELS.HELLO_WORLD}</Dialog>);

			expectDialogTruthy();
			userEvent.click(screen.getByTestId("dialogBackdrop"));

			expect(clickMock).toHaveBeenCalled();
			expect(clickMock).toHaveBeenCalledTimes(1);
		});

		it("render Dialog with default fixed width", () => {
			render(<Dialog onEsc={clickMock}>{LABELS.HELLO_WORLD}</Dialog>);

			expectDialogTruthy();
			expect(screen.getByText(LABELS.HELLO_WORLD).className).toContain(
				"widthFixed"
			);
		});

		it("render Dialog with fixed width", () => {
			render(
				<Dialog onEsc={clickMock} width="fixed">
					{LABELS.HELLO_WORLD}
				</Dialog>
			);

			expectDialogTruthy();
			expect(screen.getByText(LABELS.HELLO_WORLD).className).toContain(
				"widthFixed"
			);
		});

		it("render Dialog with width fit with its content", () => {
			render(
				<Dialog onEsc={clickMock} width="content">
					{LABELS.HELLO_WORLD}
				</Dialog>
			);

			expectDialogTruthy();
			expect(
				screen.getByText(LABELS.HELLO_WORLD).className
			).not.toContain("widthFixed");
		});

		it("render correctly with children", () => {
			render(
				<Dialog onEsc={clickMock} width="content">
					<div data-testid="childrenComponent">
						{LABELS.HELLO_WORLD}
					</div>
				</Dialog>
			);
			const childrenComponent = screen.getByTestId("childrenComponent");

			expect(childrenComponent).toBeTruthy();
			expect(childrenComponent.textContent).toEqual(LABELS.HELLO_WORLD);
		});
	});

	describe("Dialog with wrapper component (integration)", () => {
		it("render correctly", () => {
			render(<ComponentMock />);

			// Hidden by default state
			expectDialogFalsy();

			const showButton = getButton(LABELS.SHOW);
			userEvent.click(showButton);

			// Should be shown when click on Show button
			expectElementsTruthy();
		});

		it('call its onEsc function when the user press the "Esc" key', () => {
			render(<ComponentMock />);
			expectDialogFalsy();

			const showButton = getButton(LABELS.SHOW);
			userEvent.click(showButton);

			expectElementsTruthy();
			fireEscEvent(screen.getByRole("dialog"));

			expectDialogFalsy();
		});

		it("call its onEsc function when the user click on the backdrop", () => {
			render(<ComponentMock />);
			expectDialogFalsy();

			const showButton = getButton(LABELS.SHOW);
			userEvent.click(showButton);

			expectElementsTruthy();
			userEvent.click(screen.getByTestId("dialogBackdrop"));

			expectDialogFalsy();
		});
	});

	describe("Dialog utilities", () => {
		describe.each`
			name                | buttons
			${"Dialog.alert"}   | ${"OK"}
			${"Dialog.confirm"} | ${"OK,Cancel"}
			${"Dialog.prompt"}  | ${"OK,Cancel"}
		`("$name", ({ name, buttons }) => {
			it(`${name}: render correctly with dialog and buttons: ${buttons}`, () => {
				render(createUtilitiesButtonMock(name));
				expectDialogFalsy();

				const showButton = getButton(LABELS.SHOW);
				showButton.click();

				expectDialogTruthy();
				buttons.split(",").forEach((buttonName: string) => {
					expect(getButton(buttonName)).toBeTruthy();
				});
				expect(screen.queryByText(LABELS.HELLO_WORLD)).toBeTruthy();
				// To make sure all dialogs are closed
				fireEscEvent(screen.getByRole("dialog"));
			});

			it(`closed when the user press the "Esc" key`, () => {
				render(createUtilitiesButtonMock(name));
				expectDialogFalsy();

				const showButton = getButton(LABELS.SHOW);
				userEvent.click(showButton);

				expectDialogTruthy();
				fireEscEvent(screen.getByRole("dialog"));

				expectDialogFalsy();
			});

			it(`closed when the user click on the backdrop`, () => {
				render(createUtilitiesButtonMock(name));
				expectDialogFalsy();

				const showButton = getButton(LABELS.SHOW);
				userEvent.click(showButton);

				expectDialogTruthy();
				userEvent.click(screen.getByTestId("dialogBackdrop"));

				expectDialogFalsy();
			});

			it(`closed when the user click on children buttons`, () => {
				render(createUtilitiesButtonMock(name));
				expectDialogFalsy();

				const showButton = getButton(LABELS.SHOW);

				buttons.split(",").forEach((button: string) => {
					userEvent.click(showButton);
					expectDialogTruthy();
					userEvent.click(getButton(button));
					expectDialogFalsy();
				});
			});
		});
	});
});
