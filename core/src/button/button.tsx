import React from "react";

import { IconC, Icon } from "../icon/icon";
import form from "../form/button.module.scss";
import outline from "../style/outline.module.scss";

import s from "./button.module.scss";

interface Props {
    selected?: boolean;
    highlight?: boolean;
    onClick: () => void;
    children: React.ReactNode;
    icon?: Icon;
}

const getClass = ({ highlight, selected }: Props) => {
    if (highlight === true && selected === true) {
        throw Error("Button cannot have both highlight and selected set.");
    }
    return [
        selected ? s.selected : "",
        highlight ? form.highlight : "",
        `${s.button} ${form.button} ${outline.outer}`,
    ].join(" ");
};

type Ref = React.Ref<HTMLButtonElement>;

const ButtonWithRef = (props: Props, ref: Ref) => {
    const { onClick, children, icon } = props;
    return (
        <button ref={ref} onClick={onClick} className={getClass(props)}>
            {icon && <span className={s.icon}><IconC icon={icon} /></span>}
            <span className={s.text}>{children}</span>
        </button>
    );
};

export const Button = React.forwardRef(ButtonWithRef);
