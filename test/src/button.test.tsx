import { render, screen } from "@testing-library/react";
import { Button, ButtonProps } from "@moai/core";
import { useState } from "react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
	test("Should throws if has no content", () => {
		jest.spyOn(console, "error").mockImplementation(() => void 0);
		expect(() => {
			render(<Button />);
		}).toThrowError('must have either "icon" or "children"');
	});

	const defaultName = "Pikachu";
	const newName = "Eevee";
	const buttonLabel = "Change";
	const Test = ({ button }: { button: ButtonProps }) => {
		const [name, setName] = useState(defaultName);
		return (
			<div>
				<div>Name is {name}</div>
				<Button onClick={() => setName(newName)} {...button}>
					{buttonLabel}
				</Button>
			</div>
		);
	};

	test("Should trigger `onClick` handler", () => {
		render(<Test button={{}} />);
		const button = screen.getByRole("button", { name: buttonLabel });
		userEvent.click(button);
		const div = screen.getByText("Name is", { exact: false });
		expect(div).toHaveTextContent("Name is Eevee");
	});

	test("Should not trigger `onClick` when `disabled` is set", () => {
		render(<Test button={{ disabled: true }} />);
		const button = screen.getByRole("button", { name: buttonLabel });
		expect(button).toBeDisabled();
		userEvent.click(button);
		const div = screen.getByText("Name is", { exact: false });
		expect(div).toHaveTextContent("Name is Pikachu");
	});

	test("Should be disabled when `busy` is set", () => {
		render(<Test button={{ busy: true }} />);
		const button = screen.getByRole("button", { name: buttonLabel });
		expect(button).toBeDisabled();
		userEvent.click(button);
		const div = screen.getByText("Name is", { exact: false });
		expect(div).toHaveTextContent("Name is Pikachu");
	});

	describe("Render an a if `href` is provided", () => {
		test("Renders correctly", () => {
			render(
				<Test
					button={{ href: "https://moai.thien.do/", rel: "noopener" }}
				/>
			);

			expect(
				screen.queryByRole("button", { name: buttonLabel })
			).not.toBeInTheDocument();
			const link = screen.getByRole("link", { name: buttonLabel });
			expect(link).toHaveAttribute("rel", "noopener");
		});

		test("Should trigger `onClick` event", () => {
			const onClickMockFn = jest.fn();
			render(
				<Test
					button={{
						href: "https://moai.thien.do/",
						rel: "noopener",
						onClick: onClickMockFn,
					}}
				/>
			);
			const link = screen.getByRole("link", { name: buttonLabel });
			userEvent.click(link);
			expect(onClickMockFn).toHaveBeenCalledTimes(1);
		});
	});

	test("Should contain id attribute", () => {
		render(<Test button={{ id: "submit-button" }} />);
		const button = screen.getByRole("button", { name: buttonLabel });
		expect(button.id).toBe("submit-button");
	});
});
