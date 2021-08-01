import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@moai/core";
import { useState } from "react";

describe("Button", () => {
	test("throws if has no content", () => {
		jest.spyOn(console, "error").mockImplementation(() => void 0);
		expect(() => {
			render(<Button />);
		}).toThrowError('must have either "icon" or "children"');
	});
});

describe("Testing Button onClick", () => {
	const defaultValue = "Hello";
	const newValue = "Goodbye";
	const TestingButton = () => {
		const [text, setText] = useState(defaultValue);
		return (
			<div>
				<div>{text}</div>
				<Button onClick={() => setText(newValue)}>
					Testing Button
				</Button>
			</div>
		);
	};
	test("Div's value should be changed when click button", () => {
		render(<TestingButton />);
		const buttonElement = screen.getByText("Testing Button");
		expect(screen.getByText(defaultValue)).toBeDefined();
		fireEvent.click(buttonElement);
		expect(screen.getByText(newValue)).toBeDefined();
	});
});

describe("Testing Button Disabled Prop", () => {
	const defaultValue = "Hello";
	const newValue = "Goodbye";
	const TestingButton = () => {
		const [text, setText] = useState(defaultValue);
		return (
			<div>
				<div>{text}</div>
				<Button disabled onClick={() => setText(newValue)}>
					Testing Button
				</Button>
			</div>
		);
	};
	test("Div's value shouldn't be changed when click button", () => {
		render(<TestingButton />);
		const buttonElement = screen.getByText("Testing Button");
		fireEvent.click(buttonElement);
		expect(screen.getByText(defaultValue)).toBeDefined();
	});
});

describe("Testing Button Busy Prop", () => {
	const defaultValue = "Hello";
	const newValue = "Goodbye";
	const TestingButton = () => {
		const [text, setText] = useState(defaultValue);
		return (
			<div>
				<div>{text}</div>
				<Button busy onClick={() => setText(newValue)}>
					Testing Button
				</Button>
			</div>
		);
	};
	test("Button should be disabled when busy", () => {
		render(<TestingButton />);
		const buttonElement = screen.getByText("Testing Button");
		fireEvent.click(buttonElement);
		expect(screen.getByText(defaultValue)).toBeDefined();
	});
});
