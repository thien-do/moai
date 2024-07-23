import * as React from "react";
import { background } from "../background/background";
import { border } from "../border/border";
import { shadow } from "../shadow/shadow";
import { DivPx } from "../div/div";
import { MenuItem } from "./item/item";

export interface MenuItemAction {
  label: string;
  fn?: () => void;
  disabled?: boolean;
}

export type MenuItemProps = MenuItemAction | "divider";

interface Props {
  items: MenuItemProps[];
  onEsc?: () => void;
}

export const Menu = (props: Props): JSX.Element => {
  const { onEsc } = props;

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (onEsc === undefined) return;
    const listener = (event: MouseEvent) => {
      const element = ref.current;
      if (!(event.target instanceof Node)) return;
      if (element?.contains(event.target)) return;
      onEsc();
    };
    document.addEventListener("click", listener);
    return () => document.removeEventListener("click", listener);
  }, [onEsc]);

  const style = Menu.styles.outset;

  return (
    <div className={style} ref={ref}>
      <DivPx size={8} />
      {props.items.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
      <DivPx size={8} />
    </div>
  );
};

Menu.styles = {
  outset: [border.px1, border.strong, shadow.boxStrong, background.strong].join(
    " ",
  ),
};
