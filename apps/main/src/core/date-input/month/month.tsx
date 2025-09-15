import { Dispatch, SetStateAction } from "react";
import { Border } from "../../border/border";
import { DivPx } from "../../div/div";
import { Select } from "../../select/select";
import s from "./month.module.css";

interface Props {
  value: Date;
  setValue: Dispatch<SetStateAction<Date>>;
}

const months: number[] = Array(12)
  .fill(0)
  .map((value, index) => value + index);

const years: number[] = Array(100)
  .fill(1950)
  .map((value, index) => value + index);

export const DateInputMonth = ({ value, setValue }: Props): JSX.Element => (
  <div className={s.wrapper}>
    <div className={s.container}>
      <Select<number>
        value={value.getMonth()}
        setValue={(month) => {
          setValue(new Date(value.getFullYear(), month));
        }}
        options={months.map((month) => ({
          id: month.toString(),
          label: (month + 1).toString(),
          value: month,
        }))}
        style={Select.styles.flat}
      />
      <Select<number>
        value={value.getFullYear()}
        setValue={(year) => {
          setValue(new Date(year, value.getMonth()));
        }}
        options={years.map((year) => ({
          id: year.toString(),
          label: year.toString(),
          value: year,
        }))}
        style={Select.styles.flat}
      />
    </div>
    <DivPx size={8} />
    <Border color="weak" />
    <DivPx size={16} />
  </div>
);
