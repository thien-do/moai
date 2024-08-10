import { ButtonMenu } from "../button-menu/button-menu";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { Select } from "../select/select";
import { Tooltip } from "../tooltip/tooltip";
import s from "./button-group.module.css";

export interface ButtonGroupItemProps {
  fill?: boolean;
  element: JSX.Element;
}

interface Props {
  children: (ButtonGroupItemProps | JSX.Element)[];
  skipChildTypeCheck?: boolean;
  fill?: boolean;
}

const normalizeChild = (defaultFill: boolean | undefined) => {
  return (raw: ButtonGroupItemProps | JSX.Element): ButtonGroupItemProps => {
    // If child is full Item already
    if ((raw as ButtonGroupItemProps).element)
      return raw as ButtonGroupItemProps;
    // If child is only an element ---> fill should be inherited
    return { element: raw as JSX.Element, fill: defaultFill };
  };
};

const SUPPORTED_CHILD_TYPES = [Button, ButtonMenu, Select, Tooltip, Input];

export const ButtonGroup = (props: Props): JSX.Element => (
  <div className={[s.container, props.fill ? s.containerFill : ""].join(" ")}>
    {props.children.map(normalizeChild(props.fill)).map((child, index) => {
      if (
        SUPPORTED_CHILD_TYPES.includes(child.element.type) === false &&
        !!props.skipChildTypeCheck === false
      )
        throw Error(`Unsupported child type: ${child.element.type}`);

      const cls = [];
      if (index !== 0) cls.push("group-tail");
      if (index !== props.children.length - 1) cls.push("group-init");
      cls.push(child.fill ? s.childFill : s.childFix);

      return (
        <div className={cls.join(" ")} key={index}>
          {child.element}
        </div>
      );
    })}
  </div>
);
