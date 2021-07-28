import { fireEvent, screen } from "@testing-library/react";

export const getButton = (name: string): HTMLElement =>
	screen.getByRole("button", { name });

export const fireEscEvent = (element: HTMLElement): void => {
	element.focus();
	fireEvent.keyDown(element, {
		key: "Escape",
		code: "Escape",
		keyCode: 27,
		charCode: 27,
	});
};
