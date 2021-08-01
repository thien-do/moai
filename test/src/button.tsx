import { render } from "@testing-library/react";
import { Button } from "@moai/core";

describe("Button", () => {
	test("throws if has no content", () => {
		jest.spyOn(console, "error").mockImplementation(() => void 0);
		expect(() => {
			render(<Button />);
		}).toThrowError('must have either "icon" or "children"');
	});
});
