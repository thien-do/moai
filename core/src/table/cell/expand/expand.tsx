import { ReactNode } from "react";
import { Button } from "../../../button/button";
import { DivPx } from "../../../div/div";
import { coreIcons } from "../../../icons/icons";
import { TableState } from "../../table";
import s from "./expand.module.css";

interface Props {
	state: TableState;
	rowKey: string;
	children: ReactNode;
}

/** Add a toggle button to first cell of an expandable row */
export const TableCellExpand = (props: Props): JSX.Element => {
	const { state, rowKey, children } = props;
	const expanded = state.expanded.has(rowKey);
	return (
		<div className={s.container}>
			<Button
				selected={expanded}
				onClick={() => state.setExpanded(rowKey, !expanded)}
				icon={coreIcons.plus}
				iconLabel="Expand/collapse row"
				size={Button.sizes.smallIcon}
			/>
			<DivPx size={16} />
			{children}
		</div>
	);
};
