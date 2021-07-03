import { render } from "@testing-library/react";
import { Button } from "../../core/src";

describe("Button", () => {
	test("renders Button component", () => {
		render(<Button children="Hello" />);
	});
});
