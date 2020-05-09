import React from "react";

import outline from "../style/outline.module.scss";
import s from "./number.module.scss";

interface Props {
    value: number;
    setValue: (value: number) => void;
    list?: { id: string, numbers: number[] };
    fullWidth?: boolean;
}

const getCls = (fullWidth?: boolean) => [
    `${outline.outer} ${s.input}`,
    fullWidth ? s.widthFull : s.widthFixed,
].join(" ");

export const NumberInput: React.FC<Props> = ({
    value, setValue, list, fullWidth
}) => (
    <>
        <input
            className={getCls(fullWidth)}
            type="number"
            value={value ? value : ""}
            onChange={e => setValue(e.target.valueAsNumber)}
            list={list?.id ?? undefined}
        />
        {list && (
            <datalist id={list.id}>
                {list.numbers.map(num => (
                    <option key={num} value={num.toString()} />
                ))}
            </datalist>
        )}
    </>
);
