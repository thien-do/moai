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
	 * The current page
	 */
	value: number;
	/**
	 * Callback to set the current page. This supports both sync and async
	 * usages. The component will show a loading state while the async callback
	 * is running.
	 */
	setValue: (num: number) => void | Promise<void>;
	/**
	 * The smallest page to be displayed in the pagination. This is usually
	 * "0" or "1", depends on your counting. Pagination shows pages between
	 * "min" and "max" props (inclusive).
	 */
	min: number;
	/**
	 * The largest page to be displayed in the pagination. This is the total of
	 * pages. Pagination shows pages between "min" and "max" props (inclusive).
	 */
	max: number;
}

const rangeMsg = (min: number, max: number): string =>
	`Please enter a number between ${min} and ${max}`;

/**
 * A pagination is used to navigate between pages, and quickly jump to one.
 */
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
		[setValueOrg, max, min],
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
							icon={coreIcons.kebab}
							iconRight
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
