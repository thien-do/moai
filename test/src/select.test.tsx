import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useState } from "react";
import { Select, Button } from "@moai/core";

const SELECTIONS = [
	{ value: "red", id: "red", label: "Red" },
	{ value: "blue", id: "blue", label: "Blue" },
	{ value: "green", id: "green", label: "Green" },
];

describe("Testing Select Uncontrolled Props", () => {
	test("Select value should be default value", () => {
		render(
			<div>
				<label htmlFor="select">select</label>
				<Select
					options={SELECTIONS}
					defaultValue={"blue"}
					id="select"
				/>
			</div>,
		);
		const selectElement = screen.getByLabelText("select");
		expect(selectElement).toHaveValue("blue");
	});
});

describe("Testing Select Controlled Props", () => {
	const TestingSelect = () => {
		const [value, setValue] = useState<string>("red");
		return (
			<div>
				<label htmlFor="select">select</label>
				<Select<string>
					options={SELECTIONS}
					value={value}
					setValue={setValue}
					id="select"
				/>
				<div aria-label="div">{value}</div>
				<Button onClick={() => setValue("green")}>Change option</Button>
			</div>
		);
	};

	test("Select value should change when state change", () => {
		render(<TestingSelect />);

		const selectElement = screen.getByLabelText("select");
		const buttonELement = screen.getByRole("button");

		fireEvent.click(buttonELement);
		expect(selectElement).toHaveValue("green");
	});

	test("State should change when Select value change", () => {
		render(<TestingSelect />);

		const selectElement = screen.getByLabelText("select");

		userEvent.selectOptions(selectElement, "green");
		expect(screen.getByText("green")).toBeInTheDocument();
	});
});

describe("Testing Select Disabled Props", () => {
	test("Select value shouldn't be changed when disabled", () => {
		render(
			<div>
				<label htmlFor="select">select</label>
				<Select options={SELECTIONS} disabled id="select" />
			</div>,
		);

		const selectElement = screen.getByLabelText("select");

		userEvent.selectOptions(selectElement, "green");
		expect(selectElement).toHaveValue("red");
	});

	test("Disabled option shouldn't change Select value", () => {
		render(
			<div>
				<label htmlFor="select">select</label>
				<Select
					options={[
						{ value: 0, id: "red", label: "Red" },
						{ value: 1, id: "blue", label: "Blue", disabled: true },
						{ value: 2, id: "green", label: "Green" },
					]}
					id="select"
				/>
			</div>,
		);

		const selectElement = screen.getByLabelText("select");

		userEvent.selectOptions(selectElement, "blue");
		expect(selectElement).toHaveValue("red");
	});
});
