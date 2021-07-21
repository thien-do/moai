import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Input } from "@moai/core";
import { useState } from "react";

describe("Testing Input Controlled Props", () => {
	const InputTesting = () => {
		const [value, setValue] = useState<string>("");
		return (
			<div>
				<Input value={value} setValue={setValue} aria-label="input" />
				<div>{value}</div>
				<button
					data-testid="button"
					onClick={() => setValue("Goodbye")}
				>
					Change
				</button>
			</div>
		);
	};

	test("div value should change after Input value change", async () => {
		render(<InputTesting />);

		const inputElement = screen.getByLabelText("input") as HTMLInputElement;

		fireEvent.change(inputElement, { target: { value: "Hello" } });
		expect(inputElement.value).toBe("Hello");
		expect(screen.getByText("Hello")).toBeDefined();
	});

	test("Input's text should be changed when props.value is changed", async () => {
		render(<InputTesting />);

		const inputElement = screen.getByLabelText("input") as HTMLInputElement;
		const buttonElement = screen.getByTestId("button");

		fireEvent.click(buttonElement);
		expect(screen.getByText("Goodbye")).toBeDefined();
		expect(inputElement.value).toBe("Goodbye");
	});
});

describe("Testing Input Uncontrolled Props", () => {
	const InputTesting = () => (
		<Input defaultValue="Foo" aria-label="default-input" />
	);

	test("props.defaultValue should be displayed before Input's text change", async () => {
		render(<InputTesting />);

		const inputElement = screen.getByLabelText(
			"default-input"
		) as HTMLInputElement;

		expect(inputElement.value).toBe("Foo");
	});

	test("props.defaultValue should be replace when Input's text change", async () => {
		render(<InputTesting />);

		const inputElement = screen.getByLabelText(
			"default-input"
		) as HTMLInputElement;

		fireEvent.change(inputElement, { target: { value: "Hello" } });
		expect(inputElement.value).toBe("Hello");
	});
});

describe("Testing Input Type Prop", () => {
	test("props.type 'number' doesn't allow characters", async () => {
		const inputValue = "foo";
		render(<Input type="number" aria-label="input-test" />);
		const inputElement = screen.getByLabelText(
			"input-test"
		) as HTMLInputElement;
		userEvent.type(inputElement, inputValue);
		expect(inputElement).not.toHaveValue(inputValue);
	});
});

describe("Testing Input Disable Prop", () => {
	test("props.type 'number' doesn't allow characters", async () => {
		const inputValue = "foo";
		render(<Input disabled aria-label="input-test" />);
		const inputElement = screen.getByLabelText(
			"input-test"
		) as HTMLInputElement;
		userEvent.type(inputElement, inputValue);
		expect(inputElement).not.toHaveValue(inputValue);
	});
});
