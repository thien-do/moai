import { Checkbox } from "../../../checkbox/checkbox";
import { Radio } from "../../../radio/radio";
import { TableSelectableProps, TableSelected } from "./state";

interface Props<T extends TableSelected> {
  rowKey: string;
  selectable: TableSelectableProps<T>;
}

type PropsGeneric = Props<TableSelected>;
type PropsSingle = Props<string>;
type PropsMultiple = Props<Set<string>>;

const SelectableCheckbox = (props: PropsMultiple): JSX.Element => {
  const { rowKey, selectable } = props;
  const { selected, setSelected } = selectable;
  const setChecked = (checked: boolean): void => {
    const next = new Set(selected);
    checked ? next.add(rowKey) : next.delete(rowKey);
    setSelected(next);
  };
  return (
    <Checkbox
      checked={selected.has(rowKey)}
      setChecked={setChecked}
      children={`Select ${rowKey}`}
      hideLabel
    />
  );
};

const SelectableRadio = (props: PropsSingle): JSX.Element => {
  const { rowKey } = props;
  const { selected, setSelected, radioGroupName } = props.selectable;
  if (radioGroupName === undefined)
    throw Error("radioGroupName must be defined for single-selection");
  return (
    <Radio
      name={radioGroupName}
      checked={selected === rowKey}
      value={rowKey}
      setValue={setSelected}
      children={`Select ${rowKey}`}
      hideLabel
    />
  );
};

const isPropsSingle = (props: PropsGeneric): props is PropsSingle =>
  typeof props.selectable.selected === "string";

const isPropsMultiple = (props: PropsGeneric): props is PropsMultiple =>
  typeof props.selectable.selected !== "string";

export const TableSelectableControl = (props: PropsGeneric): JSX.Element => {
  if (isPropsSingle(props)) return <SelectableRadio {...props} />;
  if (isPropsMultiple(props)) return <SelectableCheckbox {...props} />;
  throw Error("'props' is either single or multiple");
};
