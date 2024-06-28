import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useState } from "react";
import { Radio, Button } from "@moai/core";

describe("Testing Checkbox Uncontrolled Prop", () => {
	test("Checkbox should be checked when set DefaultChecked", () => {
		render(
			<Radio defaultChecked name="radio" value="1">
				foo
			</Radio>,
		);

		const radioElement = screen.getByRole("radio");

		expect(radioElement).toBeChecked();
	});
});

describe("Testing Checkbox Disabled Prop", () => {
	test("Checkbox shouldn't change state when disabled", () => {
		render(
			<Radio disabled name="radio" value="1">
				foo
			</Radio>,
		);

		const radioElement = screen.getByRole("radio");
		userEvent.click(radioElement);

		expect(radioElement).not.toBeChecked();
	});
});

describe("Testing Checkbox Controlled Prop", () => {
	const TestingCheckbox = () => {
		const [checked, setChecked] = useState<boolean>(false);
		return (
			<div>
				<Radio checked={checked} name="radio" value="1">
					foo
				</Radio>
				<Button onClick={() => setChecked(true)}>Change option</Button>
			</div>
		);
	};

	test("Checkbox should be checked when set DefaultChecked", () => {
		render(<TestingCheckbox />);

		const radioElement = screen.getByRole("radio");
		const buttonElement = screen.getByRole("button");

		fireEvent.click(buttonElement);
		expect(radioElement).toBeChecked();
	});
});
