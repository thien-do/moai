import { render, screen, fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { Input } from "@moai/core";
import { useState } from "react";

describe("Input", () => {
	test("throw if input value is not changed", () => {
		const spy = jest.spyOn(console, "error");
		spy.mockImplementation(() => void 0);

		const { result } = renderHook(() => useState("Hello"));
		const [value, setValue] = result.current;

		render(
			<Input placeholder="test-input" value={value} setValue={setValue} />
		);

		render(<div data-testid="testing">{value}</div>);

		const inputElement = screen.getByPlaceholderText("test-input");
		const divElement = screen.getByTestId("testing");

		fireEvent.change(inputElement, "Hello");
		expect(divElement.textContent).toBe("Hello");

		spy.mockRestore();
	});
});
