import { useCallback, useState } from "react";
import { ButtonGroup } from "../button-group/button-group";
import { Button } from "../button/button";
import { Dialog } from "../dialog/dialog";
import { coreIcons } from "../icons/icons";
import { Popover } from "../popover/popover";
import { PaginationInput } from "./input/input";
import s from "./pagination.module.css";

export interface PaginationProps {
	/**
	 * The number of the page to be selected.
	 */
	value: number;
	/**
	 * Callback fired when the page is changed
	 */
	setValue: (num: number) => void | Promise<void>;
	/**
	 * Minimum number of page to be displayed in the pagination
	 */
	min: number;
	/**
	 * Maximum numbers of page to be displayed in the pagination
	 */
	max: number;
}

const rangeMsg = (min: number, max: number): string =>
	`Please enter a number between ${min} and ${max}`;

export const Pagination = (props: PaginationProps): JSX.Element => {
	const { setValue: setValueOrg, min, max } = props;
	const [busy, setBusy] = useState(false);

	const setValue = useCallback(
		async (value: number) => {
			if (value < min || value > max) {
				await Dialog.alert(rangeMsg(min, max));
				return;
			}
			setBusy(true);
			await setValueOrg(value);
			setBusy(false);
		},
		[setValueOrg, max, min]
	);

	return (
		<div className={s.container}>
			<ButtonGroup skipChildTypeCheck>
				<Button
					icon={coreIcons.chevronLeft}
					iconLabel="Previous"
					disabled={props.value === min || busy}
					onClick={() => setValue(props.value - 1)}
				/>
				<Popover
					content={(popover) => (
						<PaginationInput
							value={props.value}
							setValue={(value) => {
								setValue(value);
								popover.close();
							}}
						/>
					)}
					target={(popover) => (
						<Button
							busy={busy}
							icon={coreIcons["caret"]}
							reverse
							selected={popover.opened}
							onClick={popover.toggle}
						>
							{props.value}
							<span>/</span>
							{props.max}
						</Button>
					)}
				/>
				<Button
					icon={coreIcons.chevronRight}
					iconLabel="Next"
					disabled={props.value === max || busy}
					onClick={() => setValue(props.value + 1)}
				/>
			</ButtonGroup>
		</div>
	);
};
