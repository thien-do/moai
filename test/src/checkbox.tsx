import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useState } from "react";
import { Checkbox, Button } from "@moai/core";

describe("Testing Checkbox Uncontrolled Prop", () => {
	test("Checkbox should be checked when set DefaultChecked", () => {
		render(<Checkbox defaultChecked>foo</Checkbox>);

		const checkboxElement = screen.getByRole("checkbox");

		expect(checkboxElement).toBeChecked();
	});
});

describe("Testing Checkbox Disabled Prop", () => {
	test("Checkbox shouldn't change state when disabled", () => {
		render(<Checkbox disabled>foo</Checkbox>);

		const checkboxElement = screen.getByRole("checkbox");
		userEvent.click(checkboxElement);

		expect(checkboxElement).not.toBeChecked();
	});
});

describe("Testing Checkbox Controlled Prop", () => {
	const TestingCheckbox = () => {
		const [value, setValue] = useState<boolean>(false);
		return (
			<div>
				<Checkbox checked={value} setChecked={setValue}>
					foo
				</Checkbox>
				<div aria-label="div">{value}</div>
				<Button onClick={() => setValue(true)}>Change option</Button>
			</div>
		);
	};
	test("Checkbox should be checked when set DefaultChecked", () => {
		render(<TestingCheckbox />);

		const checkboxElement = screen.getByRole("checkbox");
		const buttonElement = screen.getByRole("button");

		fireEvent.click(buttonElement);
		expect(checkboxElement).toBeChecked();
	});
});
