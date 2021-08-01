import { render, screen } from "@testing-library/react";
import { Button, ButtonProps } from "@moai/core";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
	test("Should throws if has no content", () => {
		jest.spyOn(console, "error").mockImplementation(() => void 0);
		expect(() => {
			render(<Button />);
		}).toThrowError('must have either "icon" or "children"');
	});

	const defaultName = "Pikachu";
	const newName = "Eevee";
	const Test = ({ button }: { button: ButtonProps }) => {
		const [name, setName] = useState(defaultName);
		return (
			<div>
				<div>Name is {name}</div>
				<Button onClick={() => setName(newName)} {...button}>
					Change
				</Button>
			</div>
		);
	};

	test("Should trigger `onClick` handler", () => {
		render(<Test button={{}} />);
		const button = screen.getByRole("button", { name: "Change" });
		userEvent.click(button);
		const div = screen.getByText("Name is", { exact: false });
		expect(div).toHaveTextContent("Name is Eevee");
	});
	test("Should not trigger `onClick` when `disabled` is set", () => {
		render(<Test button={{ disabled: true }} />);
		const button = screen.getByRole("button", { name: "Change" });
		expect(button).toBeDisabled();
		userEvent.click(button);
		const div = screen.getByText("Name is", { exact: false });
		expect(div).toHaveTextContent("Name is Pikachu");
	});
	test("Should be disabled when `busy` is set", () => {
		render(<Test button={{ busy: true }} />);
		const button = screen.getByRole("button", { name: "Change" });
		expect(button).toBeDisabled();
		userEvent.click(button);
		const div = screen.getByText("Name is", { exact: false });
		expect(div).toHaveTextContent("Name is Pikachu");
	});
});
