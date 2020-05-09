import React from "react";

import form from "../form/button.module.scss";
import outline from "../style/outline.module.scss";
import s from "./radio.module.scss";

interface Props {
    name: string;
    value: string;
    setValue: () => void;
    checked: boolean;
    label: React.ReactNode;
}

export const Radio: React.FC<Props> = ({ name, value, setValue, checked, label }) => (
    <label className={s.container}>
        {checked && <span className={s.dot} />}
        <input
            className={`${s.input} ${form.button} ${outline.outer}`}
            type="radio" name={name} checked={checked}
            value={value} onChange={() => setValue()}
        />
        <span className={s.label}>{label}</span>
    </label>
);
