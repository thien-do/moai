import { Button } from "../../../button/button";
import { coreIcons } from "../../../icons/icons";
import { TableExpandableState } from "./state";

interface Props {
  expandable: TableExpandableState;
  rowKey: string;
}

export const TableExpandableControl = (props: Props): JSX.Element => {
  const { rowKey } = props;
  const { expanded, setExpanded } = props.expandable;
  const isExpanded = expanded.has(rowKey);
  return (
    <Button
      onClick={() => {
        const next = new Set(expanded);
        isExpanded ? next.delete(rowKey) : next.add(rowKey);
        setExpanded(next);
      }}
      icon={isExpanded ? coreIcons.chevronUp : coreIcons.chevronDown}
      iconLabel="Expand/collapse row"
      size={Button.sizes.smallIcon}
    />
  );
};
