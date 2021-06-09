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
	const expanded = state.expandable.expanded.has(rowKey);
	const icon = expanded ? coreIcons.chevronUp : coreIcons.chevronDown;
	const toggle = () => state.expandable.setExpanded(rowKey, !expanded);
	return (
		<div className={s.container}>
			<div className={s.child}>
				<Button
					onClick={toggle}
					icon={icon}
					iconLabel="Expand/collapse row"
					size={Button.sizes.smallIcon}
				/>
			</div>
			<DivPx size={16} />
			{children}
		</div>
	);
};
