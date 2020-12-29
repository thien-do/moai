import { useState, FormEvent } from "react";
import { ButtonGroup } from "../../button-group/button-group";
import { Button } from "../../button/button";
import { dialogAlert } from "../../dialog/alert";
import { Input } from "../../input/input";
import s from "./input.module.css";

interface Props {
	value: number;
	setValue: (page: number) => void;
}

export const PaginationInput = (props: Props): JSX.Element => {
	const [value, setValue] = useState(props.value.toString());

	const input = <Input autoFocus value={value} setValue={setValue} />;
	const button = <Button type="submit" children="Go" />;

	const onSubmit = (event: FormEvent): void => {
		event.preventDefault();
		const num = parseInt(value);
		if (Number.isNaN(num)) {
			dialogAlert("Please enter a valid number");
			return;
		} else {
			props.setValue(num);
		}
	};

	return (
		<form className={s.container} onSubmit={onSubmit}>
			<ButtonGroup
				children={[
					{ fill: true, element: input },
					{ fill: false, element: button },
				]}
			/>
		</form>
	);
};
