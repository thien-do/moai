import { render } from "@testing-library/react";
import { Button } from "@moai/core";

describe("Button", () => {
	test("renders Button component", () => {
		render(<Button children="Hello" />);
	});
});
