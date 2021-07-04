import { render } from "@testing-library/react";
import { Button } from "@moai/core";

describe("Button", () => {
	test("throws if has no content", () => {
		const spy = jest.spyOn(console, "error");
		spy.mockImplementation(() => void 0);
		expect(() => {
			render(<Button />);
		}).toThrowError('must have either "icon" or "children"');
		spy.mockRestore();
	});
});
