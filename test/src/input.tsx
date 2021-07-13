import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@moai/core";
import { useState } from "react";

const InputTesting = () => {
	const [value, setValue] = useState("");
	return (
		<div>
			<Input value={value} setValue={setValue} data-testid="input" />
			<div data-testid="div">{value}</div>
			<button data-testid="button" onClick={() => setValue("Goodbye")}>
				Change
			</button>
		</div>
	);
};

describe("Testing Input Component", () => {
	test("div value should change after Input value change", async () => {
		const spy = jest.spyOn(console, "error");
		spy.mockImplementation(() => void 0);

		render(<InputTesting />);

		const inputElement = screen.getByTestId("input") as HTMLInputElement;
		const divElement = screen.getByTestId("div");

		fireEvent.change(inputElement, { target: { value: "Hello" } });
		expect(inputElement.value).toBe("Hello");
		expect(divElement.textContent).toBe("Hello");

		spy.mockRestore();
	});

	test("Input and div values should change after button clicked", async () => {
		const spy = jest.spyOn(console, "error");
		spy.mockImplementation(() => void 0);

		render(<InputTesting />);

		const inputElement = screen.getByTestId("input") as HTMLInputElement;
		const divElement = screen.getByTestId("div");
		const buttonElement = screen.getByTestId("button");

		fireEvent.click(buttonElement, { bubbles: true });
		expect(divElement.textContent).toBe("Goodbye");
		expect(inputElement.value).toBe("Goodbye");

		spy.mockRestore();
	});
});
