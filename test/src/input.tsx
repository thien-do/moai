import { Button, Input } from "@moai/core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("Input Controlled", () => {
	const ControlledInput = () => {
		const [value, setValue] = useState<string>("Pikachu");
		return (
			<div>
				<label htmlFor="name">Name</label>
				<Input id="name" value={value} setValue={setValue} />
				<div>Pokemon is {value}</div>
				<Button onClick={() => setValue("Eevee")}>Change</Button>
			</div>
		);
	};
	test("Changes in the Input should be reflected outside", () => {
		render(<ControlledInput />);
		const input = screen.getByRole("textbox", { name: "Name" });
		userEvent.clear(input);
		userEvent.type(input, "Mew");
		const div = screen.getByText("Pokemon is", { exact: false });
		expect(div).toHaveTextContent("Pokemon is Mew");
	});
	test("Changes outside should be reflected in the Input", () => {
		render(<ControlledInput />);
		const button = screen.getByRole("button", { name: "Change" });
		userEvent.click(button);
		const input = screen.getByRole("textbox", { name: "Name" });
		expect(input).toHaveDisplayValue("Eevee");
	});
});

describe("Input Uncontrolled", () => {
	const UncontrolledInput = () => (
		<div>
			<label htmlFor="name">Name</label>
			<Input id="name" defaultValue="Pikachu" />
		</div>
	);
	test("Direct changes to the Input should work", () => {
		render(<UncontrolledInput />);
		const input = screen.getByRole("textbox", { name: "Name" });
		userEvent.clear(input);
		userEvent.type(input, "Mew");
		expect(input).toHaveDisplayValue("Mew");
	});
});
