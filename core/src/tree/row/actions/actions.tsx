import { ButtonMenu } from "../../../button-menu/button-menu";
import { Button } from "../../../button/button";
import { coreIcons } from "../../../icons/icons";
import { TreeProps } from "../../tree";

interface Props extends TreeProps {}

export const TreeRowActions = (props: Props): JSX.Element | null => {
	const actions = props.getRowActions?.(props.node) ?? [];
	if (actions.length === 0) return null;
	return (
		<div
			onClick={(event) => {
				event.stopPropagation();
			}}
		>
			<ButtonMenu
				button={{
					icon: coreIcons.kebab,
					iconLabel: "More actions",
					style: Button.styles.flat,
					size: Button.sizes.small,
				}}
				items={actions}
			/>
		</div>
	);
};
