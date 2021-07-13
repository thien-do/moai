import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@moai/core";
import { useState } from "react";

const InputTesting = () => {
	const [value, setValue] = useState("");
	return (
		<div>
			<Input value={value} setValue={setValue} aria-label="input" />
			<div>{value}</div>
			<button data-testid="button" onClick={() => setValue("Goodbye")}>
				Change
			</button>
		</div>
	);
};

describe("Testing Input Component", () => {
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
